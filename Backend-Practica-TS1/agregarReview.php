<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: *");


    if($_SERVER["REQUEST_METHOD"] != "POST"){
        exit("Solo se aceptan peticiones post");
    }

    $jsonReview = json_decode(file_get_contents("php://input"), true);
    if (!$jsonReview) {
        exit("No se encontraron datos");
    }
    $bd = include_once "bd.php";
    $idUsuario = $jsonReview["idUsuario"];
    $titulo = $jsonReview["titulo"];
    $texto = $jsonReview["texto"];
    $error = null;
    try {
        $query = $bd->prepare("INSERT INTO Review (idUsuario,titulo, texto) VALUES (?,?,?)");
        $resultado = $query->execute([$idUsuario, $titulo, $texto]);
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