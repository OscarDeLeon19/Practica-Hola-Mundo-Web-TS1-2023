<?php

    if($_SERVER["REQUEST_METHOD"] != "GET"){
        exit("Solo se aceptan peticiones get");
    }

    header("Access-Control-Allow-Origin: http://localhost:4200");
    $bd = include_once "bd.php";
    $sentencia = $bd->query("SELECT * FROM Review");
    $reviews = $sentencia->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($reviews);

?>