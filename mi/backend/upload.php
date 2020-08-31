<?php

// definir las direcciones
$tempPath = $_FILES[ 'file' ][ 'tmp_name' ];
$realPath = $_FILES[ 'file' ][ 'name' ];
$tipo = $_FILES["file"]['type']; 
// echo "id: ".$_GET["id"];
$uploadPath = ".." . DIRECTORY_SEPARATOR . "img" .DIRECTORY_SEPARATOR. "publicaciones" . DIRECTORY_SEPARATOR . $_GET["id"];
$MinPath = ".." . DIRECTORY_SEPARATOR . "img" .DIRECTORY_SEPARATOR. "publicaciones" . DIRECTORY_SEPARATOR . $_GET["id"] . DIRECTORY_SEPARATOR . "min";
// echo $uploadPath;
// crear directorio si no existe
if(!is_dir($uploadPath)){ 
  mkdir($uploadPath, 0777);  
}

if(!is_dir($MinPath)){ 
  mkdir($MinPath, 0777);  
}

// chmod($destino, 0755);

// identificar el número de archivo
$contador=1;
$dir = opendir($uploadPath);
while ($elemento = readdir($dir)){
    if( $elemento != "." && $elemento != ".." && $elemento != "min"){
        $contador++;
    }
}
// mover
// move_uploaded_file( $tempPath, $uploadPath .DIRECTORY_SEPARATOR. $realPath);
move_uploaded_file( $tempPath, $uploadPath .DIRECTORY_SEPARATOR. $contador );


$file = $uploadPath .DIRECTORY_SEPARATOR. $contador;

// Ponemos el . antes del nombre del archivo porque estamos considerando que la ruta está a partir del archivo thumb.php
$file_info = getimagesize("." . $file);
// Obtenemos la relación de aspecto
$ratio = $file_info[0] / $file_info[1];
// Calculamos las nuevas dimensiones
$newwidth = "90";
$newheight = round($newwidth / $ratio);
 
// Sacamos la extensión del archivo
// $ext = explode(".", $tempPath);
// $ext = strtolower($ext[count($ext) - 1]);
// if ($ext == "jpeg") $ext = "jpg";
 
// Dependiendo de la extensión llamamos a distintas funciones
switch ($file_info[2]) {
  case 2:
          $img = imagecreatefromjpeg("." . $file);
          $ext = "jpg";
  break;
  case 3:
          $img = imagecreatefrompng("." . $file);
          $ext = "png";
  break;
  case 1:
          $img = imagecreatefromgif("." . $file);
          $ext = "gif";
  break;
}
// Creamos la miniatura
$thumb = imagecreatetruecolor($newwidth, $newheight);
// La redimensionamos
imagecopyresampled($thumb, $img, 0, 0, 0, 0, $newwidth, $newheight, $file_info[0], $file_info[1]);
// La mostramos como jpg
// header("Content-type: image/jpeg");
guardarImagen($thumb,$MinPath .DIRECTORY_SEPARATOR. $contador, $ext);

function guardarImagen($imagen, $nombre, $ext){
  switch ($ext){
    case "jpg":
      imagejpeg($imagen, $nombre, 100); // El 100 es la calidade de la imagen (entre 1 y 100. Con 100 sin compresion ni perdida de calidad.).
      break;
    case "gif":
      imagegif($imagen, $nombre);
      break;
    case "png":
      imagepng($imagen, $nombre, 9); // El 9 es grado de compresion de la imagen (entre 0 y 9. Con 9 maxima compresion pero igual calidad.).
      break;
    default :
      echo "Error: Tipo de imagen no permitido.";
  }
}  

?>