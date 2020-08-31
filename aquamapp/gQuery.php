<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

require_once("conexion.php");
$data = json_decode(file_get_contents('php://input'));
// $data = tipo.  datos, proceimiento

$tipo = substr($data->name,0,2);
if ($tipo=="fn"){   
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

if ($tipo=="sp" || $tipo=="rp"){       
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
    // echo "A"; 
    echo(json_encode($arr));
}

if ($data->name =="Buscar"){
    $ObjCn = new Conexion();
    $rs ="null";
    $rs = $ObjCn->EjecutarStore($data->datos);
    // echo $sql;

    if (mysqli_num_rows($rs)>0){
        $cont =0;
        while ($f = mysqli_fetch_array($rs)){
            for ($x = 0; $x<mysqli_num_fields($rs); $x++){
                $finfo = mysqli_fetch_field_direct($rs, $x);
                $nombre = $finfo->name;
                $arr[$cont][$nombre]= $f[$x];   
            }
            $cont++;
        }
        echo(json_encode($arr));
    }
}

if ($data->name =="Execute"){
    $ObjCn = new Conexion();
    $rs ="null";
    $rs = $ObjCn->EjecutarStore($data->datos);
}

?>