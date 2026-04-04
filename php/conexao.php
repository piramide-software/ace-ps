<?php

$env = parse_ini_file(__DIR__ . '/../.env');

$host = $env['DB_HOST'];
$dbname = $env['DB_NAME'];
$user = $env['DB_USER'];
$password = $env['DB_PASS'];

$conn = new PDO("pgsql:host=$host;dbname=$dbname",$user,$password);

?>