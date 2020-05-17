-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.0.51b-community-nt-log - MySQL Community Edition (GPL)
-- SO del servidor:              Win32
-- HeidiSQL Versión:             8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura para tabla fag.cargos
DROP TABLE IF EXISTS `cargos`;
CREATE TABLE IF NOT EXISTS `cargos` (
  `Id` int(11) NOT NULL auto_increment,
  `Cargo` varchar(50) collate utf8_unicode_ci default NULL,
  `IdUnidad` int(11) default NULL,
  `Estado` int(11) default '1',
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla fag.cargos: 2 rows
DELETE FROM `cargos`;
/*!40000 ALTER TABLE `cargos` DISABLE KEYS */;
INSERT INTO `cargos` (`Id`, `Cargo`, `IdUnidad`, `Estado`) VALUES
	(1, 'Jefe de GPN', 1, 1),
	(2, 'Contador General', 2, 1);
/*!40000 ALTER TABLE `cargos` ENABLE KEYS */;


-- Volcando estructura para tabla fag.documentos
DROP TABLE IF EXISTS `documentos`;
CREATE TABLE IF NOT EXISTS `documentos` (
  `Id` int(11) NOT NULL auto_increment,
  `IdUnidad` int(11) default NULL,
  `Numero` varchar(50) collate utf8_unicode_ci default NULL,
  `Asunto` varchar(200) collate utf8_unicode_ci default NULL,
  `Glosa` varchar(200) collate utf8_unicode_ci default NULL,
  `Fecha` varchar(50) collate utf8_unicode_ci default NULL,
  `Ruta` varchar(500) collate utf8_unicode_ci default NULL,
  `Estado` int(11) default '1',
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla fag.documentos: 4 rows
DELETE FROM `documentos`;
/*!40000 ALTER TABLE `documentos` DISABLE KEYS */;
INSERT INTO `documentos` (`Id`, `IdUnidad`, `Numero`, `Asunto`, `Glosa`, `Fecha`, `Ruta`, `Estado`) VALUES
	(1, 3, 'numero', 'asunto', 'glosa', '2020-01-01', 'Factura Electronica - 023 - Distribuidora Amazónic', 1),
	(2, 3, 'asdasd', 'asdasd', 'asdasd', '2020-05-14', 'Proyecto Final - Actualización MOF PPS.docx', 0),
	(3, 4, 'sddsdd', 'aaaa', 'ssss', '2020-05-14', 'Proyecto Final - Actualización MOF PPS.docx', 1),
	(4, 4, 'Oficio Nº 49238-2019-SBS', 'Visita de Inspección N° 004-2019-VIG-DSMD', 'prueba de glosa', '2019-12-18', 'Oficio Nº 49238-2019-SBS.pdf', 1);
/*!40000 ALTER TABLE `documentos` ENABLE KEYS */;


-- Volcando estructura para tabla fag.observaciones
DROP TABLE IF EXISTS `observaciones`;
CREATE TABLE IF NOT EXISTS `observaciones` (
  `Id` int(11) NOT NULL auto_increment,
  `IdDoc` int(11) default NULL,
  `IdUnidad` int(11) default NULL,
  `Categoria` varchar(500) collate utf8_unicode_ci default NULL,
  `NumObs` varchar(50) collate utf8_unicode_ci default NULL,
  `Titulo` varchar(500) collate utf8_unicode_ci default NULL,
  `Incidencia` text collate utf8_unicode_ci,
  `FechaPedido` date default NULL,
  `FechaImplementacion` date default NULL,
  `EstadoImplementacion` int(11) default NULL COMMENT '0 pendiente, 1 en proceso, 2 implementado, 3 cerrado',
  `Glosa` text collate utf8_unicode_ci,
  `Estado` int(11) default '1',
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla fag.observaciones: 3 rows
DELETE FROM `observaciones`;
/*!40000 ALTER TABLE `observaciones` DISABLE KEYS */;
INSERT INTO `observaciones` (`Id`, `IdDoc`, `IdUnidad`, `Categoria`, `NumObs`, `Titulo`, `Incidencia`, `FechaPedido`, `FechaImplementacion`, `EstadoImplementacion`, `Glosa`, `Estado`) VALUES
	(1, 1, 3, 'categoria', 'numero', '1', 'incidencia', '2020-05-13', '2020-05-29', 0, 'glosa', 0),
	(2, 1, 4, 'categ', 'numero2', 'titulo2', 'inc', '2020-05-01', '2020-05-30', 0, 'glosa', 0),
	(3, 4, 4, 'GOBIERNO CORPORATIVO', '1', 'Necesidad de fortalecimiento de la Gerencia de Riesgos', 'La Gerencia de Riesgos presenta importantes debilidades que impactan en el alcance y eficacia de su labor, afectando negativamente el sistema de gestión integral de riesgos de la Caja. Dichas debilidades se evidencian en las siguientes situaciones:\n\na)	El personal de la Gerencia de Riesgos presenta poca especialización técnica y reducida capacitación, en particular, en lo relacionado a la gestión del riesgo de crédito -principal riesgo al que se encuentra expuesta la Caja-, tanto a nivel de gerencia, como de mandos medios y analistas. Así, se observa que dicha gerencia, conformada mayoritariamente por contadores (6 de 10), ha tenido una sola capacitación especializada  en riesgo de crédito en los últimos 2 años (Anexo N° 01 del Memorando Nº 002-2019-CMAC MAY -VIG.2019).\n\nLo señalado se ve reflejado en la calidad de los informes emitidos (Anexo N° 02 del Memorando Nº 002-2019-CMAC MAY -VIG.2019), ya que, por ejemplo, estos son de carácter estadístico para fines de gestión comercial , lo que determina que no presenten el rigor técnico requerido para cumplir cabalmente con las funciones establecidas en el artículo 14° del Reglamento de Gestión de Riesgo de Crédito (en adelante, el Reglamento), aprobado mediante Resolución SBS N° 3780-2011.\n\nb)	La carga de trabajo no se encuentra adecuadamente distribuida entre los colaboradores de la Gerencia de Riesgos debido a la falta de homogeneidad de sus competencias y especializaciones técnicas. Así, a pesar de contar con 10 colaboradores, según el Plan Anual de Riesgos 2019, la Coordinadora de Riesgos tiene a su cargo el 58 % (39 de 67) de las actividades programadas, las cuales podrían verse interrumpidas ante eventos fortuitos o programados, tales como enfermedad, licencias, capacitación, entre otros; como lo ocurrido en el año 2018 (licencias por periodo prolongado de la Coordinadora y accidente del personal que hacía las veces de coordinador). \n\nComo consecuencia, la Gerencia de Riesgos no ha cumplido con su Plan Anual de Trabajo 2018 (Anexo N° 03 del Memorando Nº 002-2019-CMAC MAY -VIG.2019), en particular, en lo que corresponde a la elaboración de los informes y análisis regulatorios vinculados a la gestión del riesgo de crédito, lo que además de exponer a la Caja a eventuales acciones administrativas por el incumplimiento del marco regulatorio vigente, no permite que las instancias de dirección y gestión de la Caja cuenten con información esencial para tomar medidas correctivas o preventivas eficaces y oportunas ante las tendencias identificadas en la evolución de dicho riesgo. Entre dichos informes, tenemos:\n\ni.	Alertas tempranas afectas a riesgo de crédito, requerido por el artículo 31° del Reglamento.\nii.	Seguimiento de las excepciones a las políticas y reglamento de créditos, requerido por el artículo 14° del Reglamento.\niii.	Análisis de “cosecha” de operaciones minoristas, requerido por el artículo 34° del Reglamento.\niv.	Seguimiento de las exposiciones afectas a riesgo de crédito a nivel individual y a nivel de portafolio, requeridos por los artículos 31° y 34° del Reglamento, respectivamente.\nv.	Análisis de migraciones, requerido por el artículo 35° del Reglamento.\nvi.	Informe trimestral de riesgo de sobreendeudamiento, requerido por el artículo 6° del Reglamento para la Administración del Riesgo de Sobre Endeudamiento de Deudores Minoristas, aprobado por Resolución SBS N° 6941-2008.\nvii.	Evaluación del riesgo Cambiario Crediticio a la que hace referencia el artículo 4° del Reglamento para la Administración del Riesgo Cambiario, aprobado por Resolución SBS N° 1455-2003. \n\nLo expuesto resulta preocupante, sobre todo tomando en cuenta las proyecciones de crecimiento de la Caja, así como su decisión de ingresar a nuevos mercados ; situaciones contempladas en el nuevo Plan Estratégico Institucional 2019-2023, aprobado en sesión de Directorio N° 37-2018 de fecha 27.11.2018. De esta forma, el máximo órgano de dirección de la Caja ha dispuesto el logro de objetivos estratégicos cuya consecución puede verse afectada por las limitaciones actuales que enfrenta la Gerencia de Riesgos. En este contexto, es importante destacar que es responsabilidad del Directorio el asegurar que ante estrategias de expansión y cambios importantes de negocios, operativos o informáticos -como es el caso del proyecto de desarrollo de un nuevo core bancario-, exista una gestión integral de riesgo adecuado y sólido, y un nivel apropiado de fortaleza patrimonial.\n\nDe acuerdo a lo dispuesto por el artículo 22° del Reglamento de Gobierno Corporativo y de la Gestión Integral de Riesgos, aprobado mediante Resolución SBS N° 272-2017, es responsabilidad del Directorio establecer una gestión integral de riesgos y propiciar un ambiente interno que facilite su desarrollo adecuado, debiendo aprobar los recursos necesarios para el apropiado desarrollo de dicha gestión a fin de contar con una estructura organizacional y personal apropiado.\n\nLa Caja, como respuesta, remite un cronograma de actividades a efectos de implementar las recomendaciones, el mismo que iniciaría el 14.03.2019 y concluiría el 31.01.2020. Así, en el referido cronograma se establecen las siguientes actividades: i) identificación de terna de postores (externo especializado) y presentación al Directorio; ii) evaluación y selección del externo por parte del Directorio; iii) contratación del consultor; iv) diagnóstico y presentación del plan de acción al Comité de Riesgos y Directorio para su evaluación; v) informe mensual por parte de la Gerencia de Riesgos al Comité de Riesgos y Directorio sobre la implementación de las medidas contempladas en los referidos planes de acción; entre otras actividades.\n', '2019-12-18', '2021-01-31', 0, 'ATENCIÓN PRIORITARIA', 1);
/*!40000 ALTER TABLE `observaciones` ENABLE KEYS */;


-- Volcando estructura para tabla fag.recomendaciones
DROP TABLE IF EXISTS `recomendaciones`;
CREATE TABLE IF NOT EXISTS `recomendaciones` (
  `Id` int(11) NOT NULL auto_increment,
  `IdObs` int(11) default '0',
  `NumRec` varchar(50) collate utf8_unicode_ci default NULL,
  `Recomendacion` text collate utf8_unicode_ci,
  `FechaImplementacion` date default NULL,
  `IdResponsable` int(11) default NULL,
  `IdCoResp` varchar(50) collate utf8_unicode_ci default NULL,
  `EstadoImplementacion` int(11) default NULL COMMENT '0 pendiente, 1 en proceso, 2 implementado, 3 cerrado',
  `Estado` int(11) default '1',
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla fag.recomendaciones: 3 rows
DELETE FROM `recomendaciones`;
/*!40000 ALTER TABLE `recomendaciones` DISABLE KEYS */;
INSERT INTO `recomendaciones` (`Id`, `IdObs`, `NumRec`, `Recomendacion`, `FechaImplementacion`, `IdResponsable`, `IdCoResp`, `EstadoImplementacion`, `Estado`) VALUES
	(1, 3, 'a.', 'El Directorio deberá disponer la contratación de un externo especializado e independiente para la realización de un diagnóstico de la actual situación de la Gerencia de Riesgos y la formulación de un plan de acción para el fortalecimiento de dicha gerencia. El diagnóstico y los planes de acción asociados -los cuales deberán contemplar como mínimo un análisis detallado de las necesidades de personal especializado y/o capacitaciones para dicha gerencia sobre la base de la sofisticación requerida para sus labores, considerando el tamaño y la complejidad de las operaciones y servicios de la Caja-, deberán ser alcanzados a esta Superintendencia previa presentación al Comité de Riesgos y al Directorio.', '2020-01-31', 2, '1,2', 0, 1),
	(2, 3, 'b.', 'El Comité de Riesgos deberá evaluar detenidamente el diagnóstico y los planes de acción presentados, debiendo adoptar las acciones efectivas sobre el particular, dando cuenta al Directorio de manera expeditiva. Dichas acciones deberán contemplar actividades detalladas y un cronograma para su implementación oportuna, cuyo cumplimiento será de responsabilidad directa del referido comité; sin embargo, tanto el Comité de Riesgos como el Directorio deberán propiciar su cumplimiento oportuno en las fechas previstas. Las actas respectivas, que contengan los referidos acuerdos y la documentación de sustento correspondiente, deberán ser remitidas a esta Superintendencia.', '2020-01-31', 1, '', 0, 1),
	(3, 3, 'c', 'La Gerencia de Riesgos deberá informar al Comité de Riesgos y al Directorio, de forma mensual, sobre la implementación de las medidas contempladas en los referidos planes de acción hasta su implantación efectiva. Copia de los informes presentados, así como de las actas respectivas deberán ser remitidas a esta Superintendencia, en forma mensual, hasta la implementación total de los referidos planes de acción.', '2020-01-31', 1, '1,2', 0, 1);
/*!40000 ALTER TABLE `recomendaciones` ENABLE KEYS */;


-- Volcando estructura para tabla fag.unidades
DROP TABLE IF EXISTS `unidades`;
CREATE TABLE IF NOT EXISTS `unidades` (
  `Id` int(11) NOT NULL auto_increment,
  `Unidad` varchar(50) collate utf8_unicode_ci default NULL,
  `Abreviatura` varchar(50) collate utf8_unicode_ci default NULL,
  `Control` int(11) default NULL COMMENT '0 no, 1 si',
  `Interno` int(11) default NULL COMMENT '0 no, 1 si',
  `Estado` int(11) default '1',
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla fag.unidades: 4 rows
DELETE FROM `unidades`;
/*!40000 ALTER TABLE `unidades` DISABLE KEYS */;
INSERT INTO `unidades` (`Id`, `Unidad`, `Abreviatura`, `Control`, `Interno`, `Estado`) VALUES
	(1, 'Gestión de Procesos de Negocios', 'GPN', 0, 1, 1),
	(2, 'Departamento de Contabilidad', 'CTB', 0, 1, 1),
	(3, 'Unidad de Auditoría Interna', 'UAI', 1, 1, 1),
	(4, 'Superintendencia de Banca, Seguros y AFP', 'SBS', 1, 0, 1);
/*!40000 ALTER TABLE `unidades` ENABLE KEYS */;


-- Volcando estructura para tabla fag.usuarios
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `Id` int(11) NOT NULL auto_increment,
  `Nombre` varchar(50) collate utf8_unicode_ci default NULL,
  `Usuario` varchar(50) collate utf8_unicode_ci default NULL,
  `Clave` varchar(50) collate utf8_unicode_ci default NULL,
  `IdCargo` int(11) default NULL,
  `Estado` int(11) default '1',
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla fag.usuarios: 2 rows
DELETE FROM `usuarios`;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`Id`, `Nombre`, `Usuario`, `Clave`, `IdCargo`, `Estado`) VALUES
	(1, 'Erick Giovanni Borra Amasifuen', 'ERBO', '123', 1, 1),
	(2, 'Marlith Rios', 'MARI', '123', 2, 1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;


-- Volcando estructura para procedimiento fag.b_delete
DROP PROCEDURE IF EXISTS `b_delete`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `b_delete`(IN `pTabla` vARCHAR(50), IN `pMsgOk` VARCHAR(500), IN `pMsgError` vARCHAR(500))
BEGIN

select 
Concat("
	declare ex int;
	set ex = (select count(*) from ", pTabla , " where Id=pId);
	
	if ex = 0 then
		begin
			update ", pTabla ," set Estado = 0 where Id=pId;
			
			select 
				'", pMsgOk , "' message,
				'1' Estado;
		end;
	else
		begin
			select 
			'", pMsgError ,"' message,
			'1' Estado;
		end;
	end if;
");
END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.b_devolver
DROP PROCEDURE IF EXISTS `b_devolver`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `b_devolver`(IN `pTabla` vARCHAR(50))
BEGIN
select 
Concat(
	"select ",
	group_concat(
	CAST(CONVERT(column_name USING utf8) AS binary)
	),
	" from ", pTabla,
	" where ", "Id=pId"
)
FROM information_schema.columns
WHERE TABLE_SCHEMA = DATABASE()
and table_schema = 'fag'
AND table_name=CAST(CONVERT(pTabla USING utf8) AS binary)
;
#CAST(CONVERT(pTabla USING utf8) AS binary);
END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.b_registrar
DROP PROCEDURE IF EXISTS `b_registrar`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `b_registrar`(IN `pTabla` vARCHAR(50), IN `pCriterioExiste` vARCHAR(50), IN `pMsgOk` vARCHAR(50), IN `pMsgError` vARCHAR(50))
    DETERMINISTIC
BEGIN

SELECT 
concat(
	"
	declare ex int;
	set ex = (select count(*) from ", pTabla, " where ", pCriterioExiste ,");
	if ex =0 then
		begin
			insert into ", pTabla , " (",
			group_concat(CAST(CONVERT(column_name USING utf8) AS binary)),
			") VALUES(", 
			group_concat("p",CAST(CONVERT(column_name USING utf8) AS binary)),
			");
			
			select 
			'",pMsgOk,"' message,
			last_insert_id() Id,
			'1' Estado;
		end;
	else
		begin
			select 
				'Error: ", pMsgError ,"' message,
				'0' Estado;
		end;
	end if;
	")
FROM information_schema.columns
WHERE TABLE_SCHEMA = DATABASE()
and table_schema = 'fag'
and column_name not in ("Id", "Estado")
AND table_name=CAST(CONVERT(pTabla USING utf8) AS binary);

END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.b_update
DROP PROCEDURE IF EXISTS `b_update`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `b_update`(IN `pTabla` VARCHAR(50), IN `pCriterio` VARCHAR(500), IN `pMsgOk` VARCHAR(500), IN `pMsgError` vARCHAR(500))
BEGIN

select 
Concat("
	declare ex int;
	set ex = (select count(*) from ", pTabla , " where ", pCriterio, ");
	
	if ex = 0 then
		begin
			update ", pTabla ,
			" set ",
				group_concat(CAST(CONVERT(column_name USING utf8) AS binary),"=p",column_name),
			" where Id=pId;
			
			select 
				'", pMsgOk , "' message,
				'1' Estado;
		end;
	else
		begin
			select 
			'", pMsgError ,"' message,
			'1' Estado;
		end;
	end if;
")
FROM information_schema.columns
WHERE TABLE_SCHEMA = DATABASE()
and table_schema = 'fag'
and column_name not in ("Id","Estado")
AND table_name=CAST(CONVERT(pTabla USING utf8) AS binary);
END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_devolver_data_tabla
DROP PROCEDURE IF EXISTS `sp_devolver_data_tabla`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_devolver_data_tabla`(IN `pTabla` vARCHAR(50), IN `pCampos` vARCHAR(50), IN `pCriterio` vARCHAR(50), IN `pOrden` vARCHAR(50))
BEGIN

SET @t1 =CONCAT("SELECT ", pCampos , " FROM ", pTabla ," where " , pCriterio , " order by " , pOrden);
    PREPARE stmt3 FROM @t1;
    EXECUTE stmt3;
    DEALLOCATE PREPARE stmt3;
END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_documentos_devolver
DROP PROCEDURE IF EXISTS `sp_documentos_devolver`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_documentos_devolver`(IN `pCriterio` vARCHAR(50))
BEGIN

SET @t1 =
CONCAT(
"select 
	d.Id,
	d.IdUnidad IdArea,
	u.Unidad,
	d.Numero,
	d.Asunto,	
	d.Glosa,
	fecha_b2n(d.Fecha) Fecha,
	d.Ruta
from documentos d
inner join unidades u on d.IdUnidad = u.Id
where d.Estado = 1") ;




    PREPARE stmt3 FROM @t1;
    EXECUTE stmt3;
    DEALLOCATE PREPARE stmt3;
END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_documento_delete
DROP PROCEDURE IF EXISTS `sp_documento_delete`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_documento_delete`(IN `pId` INT)
BEGIN
update documentos set Estado = 0 where id = pId;
		select
			"Documento eliminado" message,
			"1" Estado;
END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_documento_registrar
DROP PROCEDURE IF EXISTS `sp_documento_registrar`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_documento_registrar`(IN `pIdUnidad` INT, IN `pFecha` vARCHAR(50), IN `pNumDoc` vARCHAR(50), IN `pAsunto` vARCHAR(150), IN `pGlosa` vARCHAR(150), IN `pRuta` VARCHAR(255))
BEGIN

declare ex int;
set ex = (select count(*) from documentos d where d.Numero = pNumDoc and d.Estado = 1);

if ex =0 then
	begin
		insert into documentos(IdUnidad, Numero, Asunto, Glosa, Fecha, Ruta) values(pIdUnidad, pNumDoc, pAsunto, pGlosa, pFecha, pRuta);
		
		select 
			"Documento registrado" message,
			last_insert_id() Id,
			"1" Estado;
	end;
else
	begin
		select 
			"Error: Documento ya se encuentra registrado" message,
			"0" Estado;

	end;
end if;
END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_documento_update
DROP PROCEDURE IF EXISTS `sp_documento_update`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_documento_update`(IN `pId` INT, IN `pIdArea` INT, IN `pFecha` vARCHAR(50), IN `pNumeroDoc` vARCHAR(50), IN `pAsunto` VARCHAR(500), IN `pGlosa` vARCHAR(500))
BEGIN
declare ex int;

set ex = (select count(*) from documentos d where d.Numero = pNumeroDoc and id <> pId);

if ex = 0 then
	begin
		update documentos
		set 
			IdUnidad = pIdArea, 
			Numero = pNumeroDoc, 
			Asunto = pAsunto, 
			Glosa = pGlosa, 
			Fecha = pFecha
		where 
			id = pId;
			
		
		select 
			"Documento actualizado" message,
			"1" Estado;
	end;
else
	begin
		select 
			"Error: El numero de documento ya está asignado a otro registro" message,
			"1" Estado;
	end;
end if;
	

END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_observaciones_devolver
DROP PROCEDURE IF EXISTS `sp_observaciones_devolver`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_observaciones_devolver`(IN `pCriterio` vARCHAR(50))
BEGIN

SET @t1 =CONCAT(
"select 
o.Id,
o.IdDoc,
d.Numero Documento,
d.Ruta RutaDoc,
o.IdUnidad,
u.Unidad,
u.Abreviatura Abr,
o.Categoria,
o.NumObs,
o.Titulo,
o.Incidencia,
fecha_b2n(o.FechaPedido) FechaPedido,
fecha_b2n(o.FechaImplementacion) FechaImplementacion,
o.Glosa
from observaciones o 
inner join documentos d on o.IdDoc = d.Id
inner join unidades u on o.IdUnidad = u.Id
where o.Estado = 1 and o.EstadoImplementacion in (",pCriterio,")"
);
    PREPARE stmt3 FROM @t1;
    EXECUTE stmt3;
    DEALLOCATE PREPARE stmt3;
    
END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_observacion_delete
DROP PROCEDURE IF EXISTS `sp_observacion_delete`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_observacion_delete`(IN `pId` INT)
BEGIN
declare ex int;

set ex = (select count(*) from observaciones where id = pId);

if ex = 0 then
	begin
		select 
			"Error: No se encuentra la observación" message,
			"0" Estado;
	end;
else
	begin
		update observaciones set estado = 0 where id = pId;
		select 
			"Observacion eliminada" message,
			"1" Estado;
	end;
end if;
END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_observacion_devolver
DROP PROCEDURE IF EXISTS `sp_observacion_devolver`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_observacion_devolver`(IN `pId` INT)
BEGIN
select 
o.Id,
o.IdDoc,
o.NumObs,
d.Numero Documento,
o.IdUnidad,
u.Unidad,
u.Abreviatura Abr,
o.Categoria,
o.NumObs,
o.Titulo,
o.Incidencia,
fecha_b2n(o.FechaPedido) FechaPedido,
fecha_b2n(o.FechaImplementacion) FechaImplementacion,
o.Glosa
from observaciones o 
inner join documentos d on o.IdDoc = d.Id
inner join unidades u on o.IdUnidad = u.Id
where o.Id = pId;
END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_observacion_registrar
DROP PROCEDURE IF EXISTS `sp_observacion_registrar`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_observacion_registrar`(IN `pIdDoc` INT, IN `pIdUnidad` INT, IN `pCategoria` vARCHAR(500), IN `pNumObs` vARCHAR(50), IN `pTitulo` vARCHAR(500), IN `pIncidencia` teXT, IN `pFechaP` vARCHAR(50), IN `pFechaI` vARCHAR(50), IN `pGlosa` teXT)
BEGIN
declare ex int;

set ex = (select count(*) from observaciones where IdUnidad = pIdUnidad and Titulo = pTitulo and Estado=1);

if ex =0 then
	begin
		insert into observaciones (IdDoc, IdUnidad,Categoria,NumObs,Titulo,Incidencia,FechaPedido,FechaImplementacion,EstadoImplementacion, Glosa) 
		values(pIdDoc, pIdUnidad,pCategoria,pNumObs,pTitulo,pIncidencia,pFechaP,pFechaI,"0", pGlosa);
		
		select 
			"Observacion registrada" message,
			last_insert_id() Id,
			"1" Estado;
	end;
else
	begin
		select 
			"Error: Observación ya se encuentra registrado" message,
			"0" Estado;
	end;
end if;

END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_observacion_update
DROP PROCEDURE IF EXISTS `sp_observacion_update`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_observacion_update`(IN `pId` INT, IN `pIdDoc` INT, IN `pIdUnidad` INT, IN `pCategoria` vARCHAR(500), IN `pNumObs` vARCHAR(50), IN `pTitulo` vARCHAR(500), IN `pIncidencia` teXT, IN `pFechaP` vARCHAR(50), IN `pFechaI` vARCHAR(50), IN `pGlosa` teXT)
BEGIN
declare ex int;

set ex = (select count(*) from observaciones where IdUnidad = pIdUnidad and Titulo = pTitulo and Estado=1 and id <> pId);

if ex =0 then
	begin
		update observaciones set 
			IdDoc=pIdDoc, 
			IdUnidad=pIdUnidad,
			Categoria=pCategoria,
			NumObs=pNumObs,
			Titulo=pTitulo,
			Incidencia=pIncidencia,
			FechaPedido=pFechaP,
			FechaImplementacion=pFechaI,
			Glosa=pGlosa 
		where id = pId;
		
		select 
			"Observacion actualizada" message,
			"1" Estado;
	end;
else
	begin
		select 
			"Error: Observacion ya se encuentra registrada" message,
			"0" Estado;
	end;
end if;

END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_recomendaciones_devolver
DROP PROCEDURE IF EXISTS `sp_recomendaciones_devolver`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_recomendaciones_devolver`(IN `pIdObs` INT, IN `pCriterio` vARCHAR(50))
BEGIN
select 
	a.Id,
	a.IdObs,
	o.Titulo Observación,
	a.NumRec,
	a.Recomendacion,
	fecha_b2n(a.FechaImplementacion) FechaImplementacion,
	a.IdResponsable,
	u.Usuario Responsable,
	a.IdCoResp,
	(select group_concat(u2.Usuario) from usuarios u2 where FIND_IN_SET(u2.id, a.IdCoResp)) Corresponsables,
	a.EstadoImplementacion
from recomendaciones a 
inner join observaciones o on a.IdObs = o.Id
inner join usuarios u on a.IdResponsable = u.Id
where 
	a.IdObs = pIdObs and 
	a.Estado = 1 and 
	FIND_IN_SET(a.EstadoImplementacion, pCriterio)
	;

END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_recomendacion_delete
DROP PROCEDURE IF EXISTS `sp_recomendacion_delete`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_recomendacion_delete`(IN `pId` INT)
BEGIN

	declare ex int;
	set ex = (select count(*) from recomendaciones where Id=pId);

	if ex = 1 then
		begin
			update recomendaciones set Estado = 0 where Id=pId;
			
			select 
				'Recomendación eliminada' message,
				'1' Estado;
		end;
	else
		begin
			select 
			'Error: No se ha podido eliminar la recomendación' message,
			'1' Estado;
		end;
	end if;

END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_recomendacion_registrar
DROP PROCEDURE IF EXISTS `sp_recomendacion_registrar`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_recomendacion_registrar`(IN `pIdObs` INT, IN `pNumRec` vARCHAR(50), IN `pRecomendacion` teXT, IN `pFechaImplementacion` vARCHAR(50), IN `pIdResponsable` INT, IN `pIdCoResp` vARCHAR(50))
BEGIN

	declare ex int;
	set ex = (select count(*) from recomendaciones where IdObs = pIdObs and (NumRec = pNumRec or Recomendacion=pRecomendacion) and estado = 1);
	if ex =0 then
		begin
			insert into recomendaciones 
				(IdObs,NumRec,Recomendacion,FechaImplementacion,IdResponsable,IdCoResp,EstadoImplementacion) 
			VALUES
				(pIdObs,pNumRec,pRecomendacion,pFechaImplementacion,pIdResponsable,pIdCoResp,"0");
			
			select 
			'Recomendacion registrada' message,
			last_insert_id() Id,
			'1' Estado;
		end;
	else
		begin
			select 
				'Error: Recomendación ya se encuentra registrada' message,
				'0' Estado;
		end;
	end if;
	
END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_recomendacion_update
DROP PROCEDURE IF EXISTS `sp_recomendacion_update`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_recomendacion_update`(IN `pId` INT, IN `pIdObs` INT, IN `pNumRec` vARCHAR(50), IN `pRecomendacion` teXT, IN `pFechaImplementacion` vARCHAR(50), IN `pIdResponsable` INT, IN `pIdCoResp` vARCHAR(50))
BEGIN

	declare ex int;
	set ex = (select count(*) from recomendaciones where IdObs = pIdObs and (NumRec=pNumrec or Recomendacion = pRecomendacion) and Id<>pId);
	
	if ex = 0 then
		begin
			update recomendaciones set 
				IdObs=pIdObs,
				NumRec=pNumRec,
				Recomendacion=pRecomendacion,
				FechaImplementacion=pFechaImplementacion,
				IdResponsable=pIdResponsable,
				IdCoResp=pIdCoResp 
			where 
				Id=pId;
			
			select 
				'Recomendación actualizada' message,
				'1' Estado;
		end;
	else
		begin
			select 
			'Error: No se pudo actualizar la recomendación' message,
			'1' Estado;
		end;
	end if;

END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_usuarios_devolver
DROP PROCEDURE IF EXISTS `sp_usuarios_devolver`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_usuarios_devolver`()
BEGIN
select 
u.Id,
u.Nombre,
u.Usuario,
u.IdCargo,
c.Cargo,
un.Unidad
from Usuarios u
inner join cargos c on u.IdCargo = c.Id
inner join unidades un on c.IdUnidad = un.Id
where u.Estado = 1;
END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_usuarios_login
DROP PROCEDURE IF EXISTS `sp_usuarios_login`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_usuarios_login`(IN `pUsuario` vARCHAR(50), IN `pClave` vARCHAR(50))
BEGIN
declare ex int;
set ex = (select count(*) from usuarios u where u.Usuario = pUsuario and u.Clave = pClave and u.Estado = 1);

if ex = 1 then
	begin
		select 
			"Usuario correcto" Message,
			"1" Estado;
	end;
else
	begin
		set ex = (select count(*) from usuarios u where u.Usuario = pUsuario and u.Estado = 1);
		if ex = 0 then
			begin
				select
					u.Id,
					u.Usuario,
					c.Cargo
				from usuarios u
				inner join cargos c on u.Idcargo = c.Id 
				where u.Usuario = pUsuario and u.Clave = pClave and u.Estado =1;
				
			end;
		else
			begin
				select
					"Error: Contraseña incorrecta", Message,
					"-1" Estado;
			end;
		end if;
		
	end;
end if;

END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_usuario_delete
DROP PROCEDURE IF EXISTS `sp_usuario_delete`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_usuario_delete`(IN `pId` INT)
BEGIN
update usuarios set Estado = 0 where id = pId;
		select
			"Usuario eliminado" message,
			"1" Estado;
END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_usuario_registrar
DROP PROCEDURE IF EXISTS `sp_usuario_registrar`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_usuario_registrar`(IN `pNombre` vARCHAR(50), IN `pUsuario` vARCHAR(50), IN `pIdCargo` vARCHAR(50))
BEGIN
declare ex int;
set ex = (select count(*) from usuarios u where u.Usuario = pUsuario or u.Nombre = pNombre and u.Estado = 1);

if ex = 0 then
	begin
		insert into usuarios(Nombre, Usuario, IdCargo, Clave) values(pNombre, pUsuario, pIdCargo, "123");
		
		select
			"Usuario Registrado" message,
			"1" Estado;
	end;
else
	begin
		select
			"Error: Usuario ya está registrado" message,
			"0" Estado;
	end;
end if;
END//
DELIMITER ;


-- Volcando estructura para procedimiento fag.sp_usuario_update
DROP PROCEDURE IF EXISTS `sp_usuario_update`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_usuario_update`(IN `pId` INT, IN `pNombre` vARCHAR(50), IN `pUsuario` vARCHAR(50), IN `pIdCargo` INT)
BEGIN
declare ex int;

set ex = (select count(*) from usuarios u where (u.Usuario = pUsuario or u.Nombre = pNombre) and Id <> pId);

if ex = 0 then
	begin
		update usuarios set nombre = pNombre, Usuario = pUsuario, IdCargo =pIdCargo where id = pId;
		
		select 
			"Usuario actualizado" message,
			"1" Estado;
	end;
else
	begin
			select 
			"Error: El Usuario o nombre ya se encuentra asignado a otroa persona" message,
			"0" Estado;
	end;
end if;
END//
DELIMITER ;


-- Volcando estructura para función fag.fecha_b2n
DROP FUNCTION IF EXISTS `fecha_b2n`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` FUNCTION `fecha_b2n`(`pFecha` vARCHAR(50)) RETURNS varchar(10) CHARSET utf8
BEGIN
return (select 
	concat(
	substring(pFecha,9,2),"/",
	substring(pFecha,6,2),"/",
	substring(pFecha,1,4)
	));
END//
DELIMITER ;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
