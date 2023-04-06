<?php
    // Da acceso a las peticiones
    header("Access-Control-Allow-Origin: http://localhost:4200");

    // Comprueba que haya un valor en la peticion get
    if(!isset($_GET["username"])){
        exit("No hay parametros para la peticion");
    }
    // Hace la peticion en la base de datos
    $username = $_GET["username"];
    $bd = include_once "bd.php";
    $sentencia = $bd->prepare("SELECT * FROM Usuario WHERE username = ?");
    $sentencia->execute([$username]);
    $usuario = $sentencia->fetchObject();
    echo json_encode($usuario);
?>