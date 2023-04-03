<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Methods: PUT");
    header("Access-Control-Allow-Headers: *");

    if ($_SERVER["REQUEST_METHOD"] != "PUT") {
        exit("Solo se aceptan peticiones PUT");
    }

    $jsonReview = json_decode(file_get_contents("php://input"), true);
    if (!$jsonReview) {
        exit("No se enviarion datos");
    }

    $titulo = $jsonReview["titulo"];
    $texto = $jsonReview["texto"];
    $idReview = $jsonReview["idReview"];
    $error = null;
    $bd = include_once "bd.php";
    try {
        $sentencia = $bd->prepare("UPDATE Review SET titulo = ?, texto = ?, fecha = CURRENT_TIMESTAMP()  WHERE idReview = ?");
        $resultado = $sentencia->execute([$titulo, $texto, $idReview]);
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