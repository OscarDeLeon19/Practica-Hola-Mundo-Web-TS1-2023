<?php
    // Da acceso a que se realice la peticion
    header("Access-Control-Allow-Origin: http://localhost:4200");

    // Comprueba que haya parametro
    if(!isset($_GET["idUsuario"])){
        exit("No hay parametros para la peticion");
    }

    // Obtiene los datos y realiza la query
    $idUsuario = $_GET["idUsuario"];
    $bd = include_once "bd.php";
    $sentencia = $bd->prepare("SELECT * FROM Puntuacion WHERE idUsuario = ?");
    $sentencia->execute([$idUsuario]);
    $reviews = $sentencia->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($reviews);
?>