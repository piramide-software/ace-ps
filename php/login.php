<?php

session_start();

require 'conexao.php';

$email = $_POST['email'];
$senha = $_POST['senha'];

$sql = "SELECT * FROM usuario WHERE email = :email";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':email', $email);
$stmt->execute();

$usuario = $stmt->fetch(PDO::FETCH_ASSOC);

if ($usuario) {

    if (password_verify($senha, $usuario['senha'])) {

        $_SESSION['usuario_id'] = $usuario['id_usuario'];
        $_SESSION['nome'] = $usuario['nome'];
        $_SESSION['tipo_usuario'] = $usuario['tipo_usuario'];

        header("Location: dashboard.php");
        exit;

    } else {

        echo "Senha incorreta";

    }

} else {

    echo "Usuário não encontrado";

}

?>