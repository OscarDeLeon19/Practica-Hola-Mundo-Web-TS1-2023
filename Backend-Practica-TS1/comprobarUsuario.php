<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");

    if(!isset($_GET["username"])){
        exit("No hay parametros para la peticion");
    }
    $username = $_GET["username"];
    $bd = include_once "bd.php";
    $sentencia = $bd->prepare("SELECT * FROM Usuario WHERE username = ?");
    $sentencia->execute([$username]);
    $usuario = $sentencia->fetchObject();
    echo json_encode($usuario);
?>