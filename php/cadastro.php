<?php

require_once "conexao.php";
// ==============================
// 📥 DADOS DO FORM
// ==============================
$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';
$cpf = $_POST['cpf'] ?? '';
$telefone = $_POST['telefone'] ?? '';
$data_nascimento = $_POST['data_nascimento'] ?? null;
$senha = $_POST['senha'] ?? '';


// ==============================
// 🧹 LIMPEZA
// ==============================
$cpf = preg_replace('/\D/', '', $cpf);
$telefone = preg_replace('/\D/', '', $telefone);


// ==============================
// 🔍 VALIDAÇÕES
// ==============================

if (strlen($nome) < 3) {
    die("Nome inválido");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Email inválido");
}

if (strlen($cpf) != 11) {
    die("CPF inválido");
}

if (strlen($senha) < 6) {
    die("Senha muito curta");
}


// ==============================
// 🚫 VERIFICAR DUPLICIDADE
// ==============================
$sql = "SELECT id_usuario FROM usuario WHERE email = :email OR cpf = :cpf";
$stmt = $pdo->prepare($sql);
$stmt->execute([
    ':email' => $email,
    ':cpf' => $cpf
]);

if ($stmt->fetch()) {
    die("Email ou CPF já cadastrados");
}


// ==============================
// 🔐 HASH DA SENHA
// ==============================
$senhaHash = password_hash($senha, PASSWORD_DEFAULT);


// ==============================
// 👤 TIPO DE USUÁRIO
// ==============================
// padrão: aluno
$tipo_usuario = "aluno";

// ==============================
// 🔑 GERAR TOKEN
// ==============================
$token = bin2hex(random_bytes(32));
$expira = date("Y-m-d H:i:s", strtotime("+1 hour"));
// ==============================
// 💾 INSERT
// ==============================
$sql = "INSERT INTO usuario 
(nome, email, senha, data_nascimento, telefone, cpf, tipo_usuario, token, token_expira_em)
VALUES 
(:nome, :email, :senha, :data_nascimento, :telefone, :cpf, :tipo_usuario, :token, :expira)";
$stmt = $pdo->prepare($sql);

$stmt->execute([
    ':nome' => $nome,
    ':email' => $email,
    ':senha' => $senhaHash,
    ':data_nascimento' => $data_nascimento ?: null,
    ':telefone' => $telefone,
    ':cpf' => $cpf,
    ':tipo_usuario' => $tipo_usuario,
    ':token' => $token,
    ':expira' => $expira
]);


// ==============================
// 📧 ENVIAR EMAIL
// ==============================
require_once "enviar_email.php";

enviarEmail($email, $token);


// ==============================
// ✅ SUCESSO
// ==============================
header("Location: ../confirmacao.html?email=" . urlencode($email));
exit;