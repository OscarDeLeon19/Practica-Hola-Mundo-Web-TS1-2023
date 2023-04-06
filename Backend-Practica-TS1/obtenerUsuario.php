<?php
    // Da acceso para realizar peticiones
    header("Access-Control-Allow-Origin: http://localhost:4200");

    // Comprueba que se hayan enviado parametros a la peticion
    if(!isset($_GET["username"]) && !isset($_GET["pass"])){
        exit("No hay parametros para la peticion");
    }
    // Obtiene los parametros
    $username = $_GET["username"];
    $pass = $_GET["pass"];
    // Realiza la query
    $bd = include_once "bd.php";
    $sentencia = $bd->prepare("SELECT * FROM Usuario WHERE username = ? AND password = ?");
    $sentencia->execute([$username, $pass]);
    $usuario = $sentencia->fetchObject();
    echo json_encode($usuario);
?>