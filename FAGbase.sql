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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla fag.documentos: 3 rows
DELETE FROM `documentos`;
/*!40000 ALTER TABLE `documentos` DISABLE KEYS */;
INSERT INTO `documentos` (`Id`, `IdUnidad`, `Numero`, `Asunto`, `Glosa`, `Fecha`, `Ruta`, `Estado`) VALUES
	(1, 3, 'numero', 'asunto', 'glosa', '2020-01-01', 'Factura Electronica - 023 - Distribuidora Amazónic', 1),
	(2, 3, 'asdasd', 'asdasd', 'asdasd', '2020-05-14', 'Proyecto Final - Actualización MOF PPS.docx', 1),
	(3, 4, 'sddsdd', 'aaaa', 'ssss', '2020-05-14', 'Proyecto Final - Actualización MOF PPS.docx', 0);
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
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla fag.observaciones: 2 rows
DELETE FROM `observaciones`;
/*!40000 ALTER TABLE `observaciones` DISABLE KEYS */;
INSERT INTO `observaciones` (`Id`, `IdDoc`, `IdUnidad`, `Categoria`, `NumObs`, `Titulo`, `Incidencia`, `FechaPedido`, `FechaImplementacion`, `EstadoImplementacion`, `Glosa`, `Estado`) VALUES
	(1, 1, 3, 'categoria', 'numero', '1', 'incidencia', '2020-05-13', '2020-05-29', 0, 'glosa', 1),
	(2, 1, 4, 'categ', 'numero2', 'titulo2', 'inc', '2020-05-01', '2020-05-30', 0, 'glosa', 0);
/*!40000 ALTER TABLE `observaciones` ENABLE KEYS */;


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
d.Numero NumeroObs,
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
