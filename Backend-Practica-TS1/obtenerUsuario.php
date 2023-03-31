<?php
    if(!isset($_GET["username"]) && !isset($_GET["pass"])){
        exit("No hay parametros para la peticion");
    }
    $username = $_GET["username"];
    $pass = $_GET["pass"];
    echo $pass;
    $bd = include_once "bd.php";
    $sentencia = $bd->prepare("SELECT * FROM Usuario WHERE username = ? AND password = ?");
    $sentencia->execute([$username, $pass]);
    $usuario = $sentencia->fetchObject();
    echo json_encode($usuario);
?>