<?php
    // Da acceso a las peticiones

    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Methods: DELETE");
    $metodo = $_SERVER["REQUEST_METHOD"];

    // Comprueba de que se utilice un metodo delete
    if ($metodo != "DELETE" && $metodo != "OPTIONS") {
        exit("Solo se permite metodo DELETE");
    }

    // Comprueba que se hayan enviado datos via GET
    if (empty($_GET["idReview"])) {
        exit("No hay id de review para eliminar");
    }
    $idReview = $_GET["idReview"];
    $bd = include_once "bd.php";
    $sentencia = $bd->prepare("DELETE FROM Review WHERE idReview = ?");
    $resultado = $sentencia->execute([$idReview]);
    echo json_encode($resultado);

?>