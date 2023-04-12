<?php
    // Da acceso a las peticiones
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: *");

    // Comprueba que se utilice un metodo post
    if($_SERVER["REQUEST_METHOD"] != "POST"){
        exit("Solo se aceptan peticiones post");
    }

    // Obtiene los valores de la peticion
    $jsonReview = json_decode(file_get_contents("php://input"), true);
    if (!$jsonReview) {
        exit("No se encontraron datos");
    }
    $bd = include_once "bd.php";
    $idUsuario = $jsonReview["idUsuario"];
    $puntos = $jsonReview["puntos"];
    $error = null;
    try {
        // Realiza la query en la base de datos
        $query = $bd->prepare("INSERT INTO Puntuacion (idUsuario,puntos) VALUES (?,?)");
        $resultado = $query->execute([$idUsuario, $puntos]);
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