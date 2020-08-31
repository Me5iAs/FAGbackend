<?
header("Content-Type: text/xml");
require_once("conexion.php");

$resultado = $ObjCn->EjecutarStore("sp_publicaciones");
$f = mysqli_fetch_array($resultado);

echo '<?xml version="1.0" encoding="iso-8859-1" ?>';

  echo '<rss version="2.0">
  <channel>
    <title>Ultimos Tutoriales</title>
    <link>http://www.adictosaltrabajo.com/</link>
    <description>Ultimos tutoriales expuestos en AdictosAlTrabajo</description>
    <language>es-ES</language>';

    // creamos documento si existen tutoriales nuevos
    // while ($fila = mysql_fetch_array($resultado)) { 
    echo '<item>
      <title>TITULO1</title>
      <description>DESCRIPCION1</description>
      <link>http://www.adictosaltrabajo.com/tutoriales/tutoriales.php?pagina=1</link>
      </item>';
    echo '<item>
      <title>TITULO2</title>
      <description>DESCRIPCION2</description>
      <link>http://www.adictosaltrabajo.com/tutoriales/tutoriales.php?pagina=2</link>
      </item>';
  
  echo '</channel></rss>'
?>