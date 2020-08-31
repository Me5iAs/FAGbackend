<?php 
class conexion {
    //conectar
    var $cnn;
    function conectar(){
        $servidor   = "mysql.hostinger.es";
        $usuario    = "u427634989_root";
        $clave      = "1123581321";
        $base       = "u427634989_mi";
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

$data = json_decode(file_get_contents('php://input'));
// $data = tipo.  datos, proceimiento

$tipo = substr($data->name,0,1);


if ($tipo=="f"){   
    $ObjCn = new Conexion();
    if (isset($data->datos)){
        $matrix = explode("|",$data->datos);
        $sql = "SELECT ".$data->name."(";
        reset($matrix);
        while (list($key, $val) = each($matrix)) {        
            $sql = $sql . "'".$val."',";
        }
        $sql= substr($sql, 0, strlen($sq)-1);
        $sql=$sql.") as resultado";
    }elseif(isset($data->param)){
        // $parametros = json_decode($data->param);
        $sql = '';
        // echo $data->param;
        $Param = $data->param;
        foreach ($Param as $valor) {
            $sql = $sql . "'".$valor."',";            
        }
        $sql= substr($sql, 0, strlen($sq)-1);
        $sql = "SELECT ".$data->name."(".$sql.") as resultado";    
    }else{
        $sql = "SELECT ".$data->name."() as resultado";
    }
    // echo $sql;
    $resultado = $ObjCn->EjecutarStore($sql);
    $f = mysqli_fetch_array($resultado);
    $arr["resultado"]=$f["resultado"];
    // $arr["sql"]=$sql;
    echo(json_encode($arr)); 
}

if ($tipo=="s"){        
    $ObjCn = new Conexion();

    if (isset($data->datos)){
        $matrix = explode("|",$data->datos);
        $sql = "CALL ".$data->name."(";
        reset($matrix);
        while (list($key, $val) = each($matrix)) {
            $sql = $sql . "'".$val."',";
        }
        $sql= substr($sql, 0, strlen($sq)-1);
        $sql=$sql.")";
    }elseif(isset($data->param)){
        // $parametros = json_decode($data->param);
        $sql = '';
        // echo $data->param;
        $Param = $data->param;
        foreach ($Param as $valor) {
            $sql = $sql . "'".$valor."',";            
        }
        $sql= substr($sql, 0, strlen($sq)-1);
        $sql = "CALL ".$data->name."(".$sql.")";        
    }else{
        $sql = "CALL ".$data->name."()";
    }
    
    $rs ="null";
    $rs = $ObjCn->EjecutarStore($sql);
    // echo $sql;
    $cont =0;
    while ($f = mysqli_fetch_array($rs)){
        for ($x = 0; $x<mysqli_num_fields($rs); $x++){
            $finfo = mysqli_fetch_field_direct($rs, $x);
            $nombre = $finfo->name;
            $arr[$cont][$nombre]= $f[$x];   
        }
        $cont++;
    }
    // $arr ["filas"]= mysqli_num_rows($rs);
    // $arr ["columnas"]= $x;
    // $arr["sql"]=$sql;    
    echo(json_encode($arr));
}
?>