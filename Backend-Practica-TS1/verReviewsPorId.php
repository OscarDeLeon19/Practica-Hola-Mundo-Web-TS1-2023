<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");

    if(!isset($_GET["idUsuario"])){
        exit("No hay parametros para la peticion");
    }
    $idUsuario = $_GET["idUsuario"];
    $bd = include_once "bd.php";
    $sentencia = $bd->prepare("SELECT * FROM Review WHERE idUsuario = ?");
    $sentencia->execute([$idUsuario]);
    $reviews = $sentencia->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($reviews);
?>