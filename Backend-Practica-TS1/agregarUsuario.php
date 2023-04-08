<?php
    // Da acceso a las peticiones
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: *");

    // Comprueba de que se utilice un metodo post
    if($_SERVER["REQUEST_METHOD"] != "POST"){
        exit("Solo se aceptan peticiones post");
    }

    // Obtiene los valores de la peticion
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
    // Realiza la query en la base de datos
    try {
        $query = $bd->prepare("INSERT INTO Usuario (nombre, correo, username, password) VALUES (?,?,?,MD5(?))");
        $resultado = $query->execute([$nombre, $correo, $username, $password]);
    } catch (Exception $e) {
        $resultado = false;
        $error = $e->getMessage();
    }
    // Devuelve un json con los resultados
    echo json_encode(
        [
            "resultado" => $resultado,
            "error" => $error
        ]
    )
?>