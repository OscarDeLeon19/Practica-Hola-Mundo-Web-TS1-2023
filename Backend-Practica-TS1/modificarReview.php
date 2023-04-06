<?php
    // Da acceso para realizar peticiones
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Methods: PUT");
    header("Access-Control-Allow-Headers: *");

    // Comprueba que la peticion sea del tipo put
    if ($_SERVER["REQUEST_METHOD"] != "PUT") {
        exit("Solo se aceptan peticiones PUT");
    }

    // Obtiene los datos de la peticion
    $jsonReview = json_decode(file_get_contents("php://input"), true);
    if (!$jsonReview) {
        exit("No se enviarion datos");
    }

    $titulo = $jsonReview["titulo"];
    $texto = $jsonReview["texto"];
    $idReview = $jsonReview["idReview"];
    $error = null;
    $bd = include_once "bd.php";
    // Realiza la query
    try {
        $sentencia = $bd->prepare("UPDATE Review SET titulo = ?, texto = ?, fecha = CURRENT_TIMESTAMP()  WHERE idReview = ?");
        $resultado = $sentencia->execute([$titulo, $texto, $idReview]);
    } catch (Exception $e) {
        $resultado = false;
        $error = $e->getMessage();
    }
    // Retorna un json con los resultados
    echo json_encode(
        [
            "resultado" => $resultado,
            "error" => $error
        ]
    )
?>