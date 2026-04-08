<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../vendor/autoload.php';

// 🔐 carregar .env
$env = parse_ini_file(__DIR__ . '/../.env');

function enviarEmail($email, $token) {

    global $env;

    $mail = new PHPMailer(true);

    try {
        // 🔥 CONFIG SMTP
        $mail->isSMTP();
        $mail->Host = $env['MAIL_HOST'];
        $mail->SMTPAuth = true;
        $mail->Username = $env['MAIL_USERNAME'];
        $mail->Password = $env['MAIL_PASSWORD'];
        $mail->SMTPSecure = 'tls';
        $mail->Port = $env['MAIL_PORT'];

        $mail->SMTPDebug = 2;
        $mail->Debugoutput = 'html';
        // REMETENTE
        $mail->setFrom($env['MAIL_FROM'], $env['MAIL_FROM_NAME']);

        // DESTINO
        $mail->addAddress($email);

        // LINK
        $link = "http://localhost/ace-ps/php/verificar.php?token=$token";

        // EMAIL
        $mail->isHTML(true);
        $mail->Subject = 'Confirme seu email';
        $mail->Body = "
            <h2>Confirme seu cadastro</h2>
            <p>Clique no botão abaixo:</p>
            <a href='$link' style='padding:10px 20px;background:#4CAF50;color:white;text-decoration:none;'>
                Confirmar Email
            </a>
        ";

        $mail->send();

    } catch (Exception $e) {
        echo "Erro ao enviar email: {$mail->ErrorInfo}";
    }
}