<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");

    if(!isset($_GET["username"]) && !isset($_GET["pass"])){
        exit("No hay parametros para la peticion");
    }
    $username = $_GET["username"];
    $pass = $_GET["pass"];
    $bd = include_once "bd.php";
    $sentencia = $bd->prepare("SELECT * FROM Usuario WHERE username = ? AND password = ?");
    $sentencia->execute([$username, $pass]);
    $usuario = $sentencia->fetchObject();
    echo json_encode($usuario);
?>