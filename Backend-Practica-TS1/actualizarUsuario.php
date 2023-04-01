<?php
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo se aceptan peticiones PUT");
}

$jsonUsuario = json_decode(file_get_contents("php://input"), true);
if (!$jsonUsuario) {
    exit("No se enviarion datos");
}

$nombreUsuario = $jsonUsuario["nombre"];
$correo = $jsonUsuario["correo"];
$id = $jsonUsuario["id"];
$error = null;
$bd = include_once "bd.php";
try {
    $sentencia = $bd->prepare("UPDATE Usuario SET nombre = ?, correo = ? WHERE idUsuario = ?");
    $resultado = $sentencia->execute([$nombreUsuario, $correo, $id]);
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