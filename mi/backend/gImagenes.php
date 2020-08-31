<?php 
$uploadPath = ".." . DIRECTORY_SEPARATOR . "img" .DIRECTORY_SEPARATOR. "publicaciones" . DIRECTORY_SEPARATOR . $_GET["id"];

// identificar el número de archivo

$dir = opendir($uploadPath);
while ($elemento = readdir($dir)){
    if( $elemento != "." && $elemento != ".." && $elemento != "min"){
        $contador++;
    }
}
echo $contador;
?>