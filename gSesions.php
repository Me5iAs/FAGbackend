<?php
session_start();
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

require_once("conexion.php");
$data = json_decode(file_get_contents('php://input'));

$tipo = $data->tipo;
$ObjCn = new Conexion();
if($tipo=="login"){
    $rs = $ObjCn->EjecutarStore("call sp_usuarios_login('".$data->Usuario."','".$data->Clave."')");
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

}elseif($tipo=="logout"){

}elseif($tipo=="register"){
    $rs = $ObjCn->EjecutarStore("call sp_usuario_register('".$data->Nombre."','".$data->Usuario."','".$data->Doc."','".$data->Clave."','".$data->Direccion."')");
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


}elseif($tipo=="update"){
    $rs = $ObjCn->EjecutarStore("call sp_usuarios_update('".$data->Id."','". $data->Nombre."','".$data->Doc."','".$data->Direccion."','".$data->Referencia."')");
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
}elseif($tipo=="UpdatePwd"){
    
    $rs = $ObjCn->EjecutarStore("select fn_usuario_update_pwd('".$data->Id."','". $data->ClaveAnt."','".$data->ClaveAct."') as resultado");
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


?>