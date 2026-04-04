<?php

require 'conexao.php';

$nome = $_POST['nome'];
$email = $_POST['email'];
$cpf = $_POST['cpf'];
$telefone = $_POST['telefone'];
$data_nascimento = $_POST['data_nascimento'];

$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);

$tipo_usuario = "aluno"; // sempre aluno no cadastro

$sql = "INSERT INTO usuario 
(nome,email,senha,data_nascimento,telefone,cpf,tipo_usuario)
VALUES
(:nome,:email,:senha,:data_nascimento,:telefone,:cpf,:tipo_usuario)";

$stmt = $conn->prepare($sql);

$stmt->execute([
    'nome'=>$nome,
    'email'=>$email,
    'senha'=>$senha,
    'data_nascimento'=>$data_nascimento,
    'telefone'=>$telefone,
    'cpf'=>$cpf,
    'tipo_usuario'=>$tipo_usuario
]);

echo "Usuário cadastrado com sucesso!";

?>