<?php

    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Methods: DELETE");
    $metodo = $_SERVER["REQUEST_METHOD"];
    if ($metodo != "DELETE" && $metodo != "OPTIONS") {
        exit("Solo se permite metodo DELETE");
    }

    if (empty($_GET["idReview"])) {
        exit("No hay id de review para eliminar");
    }
    $idReview = $_GET["idReview"];
    $bd = include_once "bd.php";
    $sentencia = $bd->prepare("DELETE FROM Review WHERE idReview = ?");
    $resultado = $sentencia->execute([$idReview]);
    echo json_encode($resultado);

?>