<?php
    $password = "af5435269xdB";
    $usuario = "root";
    $nombre = "practica1_ts1";

    try {
        return new PDO("mysql:host=localhost;dbname=".$nombre, $usuario, $password);
    } catch (Exception $e) {
        echo "Error en la conexion de base de datos: ".$e->getMessage();
    }
?>