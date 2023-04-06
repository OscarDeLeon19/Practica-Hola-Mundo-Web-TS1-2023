<?php
    // Da acceso para realizar peticiones
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Methods: PUT");
    header("Access-Control-Allow-Headers: *");

    // Comprueba que se use un metodo put
    if ($_SERVER["REQUEST_METHOD"] != "PUT") {
        exit("Solo se aceptan peticiones PUT");
    }

    // Obtiene los valores de la peticion
    $jsonUsuario = json_decode(file_get_contents("php://input"), true);
    if (!$jsonUsuario) {
        exit("No se enviarion datos");
    }

    $nombreUsuario = $jsonUsuario["nombre"];
    $correo = $jsonUsuario["correo"];
    $id = $jsonUsuario["id"];
    $error = null;
    $bd = include_once "bd.php";
    try {
        // Realiza la query en la base de datos
        $sentencia = $bd->prepare("UPDATE Usuario SET nombre = ?, correo = ? WHERE idUsuario = ?");
        $resultado = $sentencia->execute([$nombreUsuario, $correo, $id]);
    } catch (Exception $e) {
        $resultado = false;
        $error = $e->getMessage();
    }
    // Devuelve un resultado y error
    echo json_encode(
        [
            "resultado" => $resultado,
            "error" => $error
        ]
    )
?>