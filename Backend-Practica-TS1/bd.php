<?php
    $password = "";
    $usuario = "root";
    $nombre = "practica1_ts1";
    // Realiza la conexion con la base de datos
    try {
        return new PDO("mysql:host=localhost;dbname=".$nombre, $usuario, $password);
    } catch (Exception $e) {
        echo "Error en la conexion de base de datos: ".$e->getMessage();
    }
?>