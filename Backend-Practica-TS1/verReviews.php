<?php
    // Comprueba que se utilice el metodo GET
    if($_SERVER["REQUEST_METHOD"] != "GET"){
        exit("Solo se aceptan peticiones get");
    }

    // Da acceso a las peticiones
    header("Access-Control-Allow-Origin: http://localhost:4200");
    $bd = include_once "bd.php";
    // Realiza la query
    $sentencia = $bd->query("SELECT r.idReview, u.nombre as idUsuario, r.titulo, r.texto, r.fecha FROM Review r JOIN Usuario u WHERE r.idUsuario = u.idUsuario ORDER BY fecha DESC;");
    $reviews = $sentencia->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($reviews);

?>