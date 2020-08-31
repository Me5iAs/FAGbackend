<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: multipart/form-data; charset=UTF-8");
header("Access-Control-Allow-Methods: PUT, GET, POST, FILES");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if(isset($_FILES['imagenPropia'])){
  $imagen_tipo = $_FILES['imagenPropia']['type'];
  $imagen_nombre = $_FILES['imagenPropia']['name'];
  $directorio_final = "clientes/".$_POST['Nombre']; 

  if($imagen_tipo == "image/jpeg" || $imagen_tipo == "image/jpg" || $imagen_tipo == "image/png"){
    $directorio_final = "imagenes/".$_POST['Nombre']; 
  }else{
    $directorio_final = "archivos/".$imagen_nombre; 
  }
  // utf8_decode("SoluciÃ³n Ãºtil y apaÃ±ada a UTF-8");
  $directorio_final = utf8_decode($directorio_final);
  if(file_exists($directorio_final)){
    unlink($directorio_final); // Eliminamos la imagen previa si existe.
  }
  
  if(move_uploaded_file($_FILES['imagenPropia']['tmp_name'], $directorio_final)){

    $data = array(
      'status' => 'success',
      'code' => 200,
      'msj' => 'Imagen subida'
    );
    $format = (object) $data;
    $json = json_encode($format); 
    echo $json; 

  }else{

    $data = array(
      'status' => 'error',
      'code' => 400,
      'msj' => 'Error al mover imagen al servidor'
    );
    $format = (object) $data;
    $json = json_encode($format); 
    echo $json; 

  }

  

}else{

  $data = array(
    'status' => 'error',
    'code' => 400,
    'msj' => 'No se recibio ninguna imagen'
  );
  $format = (object) $data;
  $json = json_encode($format); 
  echo $json; 

}
?>