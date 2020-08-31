<?php 
class conexion {
    //cariale de conexion
    var $cnn;
    function conectar(){
        /* accesso a aquam
        $usuario    = "aquampe_admin"; 
        $clave      = "V?%KswDrwF[0";
        */
        $servidor   = "localhost";
        $usuario    = "root"; 
        $clave      = "123"; 
        $base       = "miapp"; 
        $link       = mysqli_connect($servidor,$usuario,$clave,$base);        
        
        // configuracion de caracteres UTF8
        mysqli_query($link,'SET NAMES utf8');
        return $link;
    }
    
    //fucion cerrar s
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