<?php 
class conexion {
    //cariale de conexion
    var $cnn;
    function conectar(){
        $servidor   = "localhost";
        $usuario    = "root"; //aquampe_adm
        $clave      = "123"; //1I}k+OeJt00^
        $base       = "fag"; //base de datos
        $link       = mysqli_connect($servidor,$usuario,$clave,$base);        
        
        // configuracion de caracteres UTF8
        mysqli_query($link,'SET NAMES utf8');
        return $link;
    }
    
    function cerrar ($cnn){ 
        mysqli_close($cnn); 
    }   

    function EjecutarStore($sql){
        $cn = $this->conectar();
        $rs = mysqli_query($cn, $sql);
        $this->cerrar($cn);
        return $rs;
    }
} 
?>