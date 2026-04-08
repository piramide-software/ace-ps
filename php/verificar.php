<?php
require_once "conexao.php";

$token = $_GET['token'] ?? '';

$sql = "SELECT * FROM usuario WHERE token = :token AND token_expira_em > NOW()";
$stmt = $pdo->prepare($sql);
$stmt->execute([':token' => $token]);

$usuario = $stmt->fetch();

if (!$usuario) {
    die("Token inválido ou expirado");
}

$sql = "UPDATE usuario SET email_verificado = true, token = NULL WHERE id_usuario = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute([':id' => $usuario['id_usuario']]);

echo "Email confirmado com sucesso!";