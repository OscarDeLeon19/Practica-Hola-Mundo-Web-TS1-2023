<?php

    if($_SERVER["REQUEST_METHOD"] != "POST"){
        exit("Solo se aceptan peticiones post");
    }

    $jsonUsuario = json_decode(file_get_contents("php://input"), true);
    if (!$jsonUsuario) {
        exit("No se encontraron datos");
    }
    $bd = include_once "bd.php";
    $nombre = $jsonUsuario["nombre"];
    $correo = $jsonUsuario["correo"];
    $username = $jsonUsuario["username"];
    $password = $jsonUsuario["password"];
    $error = null;
    try {
        $query = $bd->prepare("INSERT INTO Usuario (nombre, correo, username, password) VALUES (?,?,?,?)");
        $resultado = $query->execute([$nombre, $correo, $username, $password]);
    } catch (Exception $e) {
        $resultado = false;
        $error = $e->getMessage();
    }
    echo json_encode(
        [
            "resultado" => $resultado,
            "error" => $error
        ]
    )
?>