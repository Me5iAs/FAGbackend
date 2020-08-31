<?php 
class conexion {
    //conectar
    var $cnn;
    function conectar(){
        $servidor   = "localhost";
        $usuario    = "root";
        $clave      = "123";
        $base       = "mi4";
        $link       = mysqli_connect($servidor,$usuario,$clave,$base);        
        
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