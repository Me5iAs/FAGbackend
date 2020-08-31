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

-- Volcando estructura para tabla aquam.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `Id` int(11) NOT NULL auto_increment,
  `Nombre` varchar(50) collate utf8_unicode_ci default NULL,
  `RUC` varchar(11) collate utf8_unicode_ci default '1',
  `DNI` varchar(8) collate utf8_unicode_ci default '1',
  `Direccion` varchar(150) collate utf8_unicode_ci default NULL,
  `Referencia` varchar(150) collate utf8_unicode_ci default NULL,
  `Telefono` varchar(9) collate utf8_unicode_ci default NULL,
  `Latitud` varchar(50) collate utf8_unicode_ci default '0',
  `Longitud` varchar(50) collate utf8_unicode_ci default '0',
  `Estado` varchar(50) collate utf8_unicode_ci default '1' COMMENT '0 no 1 si',
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla aquam.clientes: 35 rows
DELETE FROM `clientes`;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` (`Id`, `Nombre`, `RUC`, `DNI`, `Direccion`, `Referencia`, `Telefono`, `Latitud`, `Longitud`, `Estado`) VALUES
	(1, 'Miriam del Aguila', '', '', 'Sta Julia Republica Mz A lote 1', 'Participacion', '000000', '0', '0', '1'),
	(2, 'Margarita Ramos', '', '', 'Las Palmeras Mz C Lote 3', '-', '000000', '0', '0', '1'),
	(3, 'Milagros Saavedra', '', '', '13 de enero S/N', 'Santa Clara', '000000', '0', '0', '1'),
	(4, 'Michel Gongora', '', '', 'Jorge Sabina Mz K', '-', '000000', '0', '0', '1'),
	(5, 'Otochilio Fonseca', '', '', 'Calle Pachacamac Mz A Lt 14', '-', '000000', '0', '0', '1'),
	(6, 'Veronica Gora', '', '', 'HH 9 de Marzo A1', 'CIN Km1', '000000', '0', '0', '1'),
	(7, 'Made Luz Ahuanari', '', '', '8 Octubre #8', 'Santa Clara', '000000', '0', '0', '1'),
	(8, 'Jacobeth Vicuña', '', '', 'Calle los Arenales Mz C Lt 32', '-', '000000', '0', '0', '1'),
	(9, 'Magaly Irarica', '', '', '24 Setiembre N° 4', 'Union Santo Tomas - Santa Clara', '000000', '0', '0', '1'),
	(10, 'Jazmin Sabino', '', '', 'Virgen de Loreto Km 3.5', 'Santo Tomás', '0000000', '0', '0', '1'),
	(11, 'Edmundo Mendez', '', '', '24 de Mayo ', 'Santa Clara', '000000', '0', '0', '1'),
	(12, 'Astrid Reátegui', '', '', 'Las Americas Mz A Lt 4', 'Santo Tomás', '000000', '0', '0', '1'),
	(13, 'Gustado Rengifo', '', '', 'Las Americas Mz A Lt 4', 'Santo Tomás', '000000', '0', '0', '1'),
	(14, 'Flor Melita Torres', '', '', 'Las Americas J13', 'Santo Tomas', '000000', '0', '0', '1'),
	(15, 'Laura Sinarahua', '', '', 'Mz B Lt 7', 'Santo Tomas', '000000', '0', '0', '1'),
	(16, 'Karen Rojas', '', '', '31 de Agosto # 8', 'Santo Tomas', '000000', '0', '0', '1'),
	(17, 'Ruth Napuche', '', '', 'Mz B lote 2', 'Santo Tomas', '000000', '0', '0', '1'),
	(18, 'Lady Gallardo', '', '', 'HH 30 de Marzo Mz A Lt9 ', 'Santo Tomas', '000000', '0', '0', '1'),
	(19, 'Maria', '', '', 'El triunfo', '-', '000000', '0', '0', '1'),
	(20, 'Chicama', '', '', '-', '-', '000000', '0', '0', '1'),
	(21, 'Kelly Manihuari', '', '', '27 de Marzo Mz 13 Lt 26', 'Prolongaacion Moore ', '000000', '0', '0', '1'),
	(22, 'Licar Yanashi', '', '', 'Calle Alemania Mz A Lt1', 'Terminal', '000000', '0', '0', '1'),
	(23, 'Dalila Servantes Ayala', '', '', 'Calle 8 B', 'Terminal', '000000', '0', '0', '1'),
	(24, 'Emerson Ivan MAruja Ruiz', '', '', 'Los Aguajes # 25', 'Secada', '000000', '0', '0', '1'),
	(25, 'Cruzita Alcantara Fuentes', '', '', '10 de Agosto con Aguaje', 'Secada', '000000', '0', '0', '1'),
	(26, 'Ysela Torres Silva', '', '', 'Liberacion # 250', 'Secada', '000000', '0', '0', '1'),
	(27, 'Debora Zuta Martinez', '', '', 'Pasaje Porvenir #37', 'Secada', '000000', '0', '0', '1'),
	(28, 'Lucia Campos', '', '', '-', '-', '000000', '0', '0', '1'),
	(29, 'Bladimir Ruiz Murrieta', '', '', '11 de Agosto Mz F Lt 6', 'Participacion', '000000', '0', '0', '1'),
	(30, 'Juan Andres', '', '', 'Perez Vela', 'aaaa', '2222222', '0', '0', '0'),
	(31, 'Juan Perez', '123213', '123123', 'Av. Direccion', 'Referen', '123123', '0', '0', '1'),
	(32, 'juana', '', '', 'asdads', '123123', '123123123', '0', '0', '1'),
	(33, 'sadasdasd', '', '', 'asdsad', 'asdads', '123213213', '0', '0', '1'),
	(34, 'Erick Giovanni Borra Amasifuente', '', '42092061', 'aaaaaa', 'cerca al grif', '965639114', '-3.770907131040538', '-73.26451028906826', '1'),
	(35, 'Juan Perezss', '12121212121', '42051041', 'Direccion de prueba', 'referencia de prueba', '26457812', '-3.7738577968010865', '-73.26679226358738', '1');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;


-- Volcando estructura para tabla aquam.consolidado
CREATE TABLE IF NOT EXISTS `consolidado` (
  `Id` int(11) NOT NULL auto_increment,
  `Fecha` date default NULL,
  `VentaBodega` decimal(10,2) default NULL,
  `VentaDelivery` decimal(10,2) default NULL,
  `OtrosIngresos` decimal(10,2) default NULL,
  `OtrosGastos` decimal(10,2) default NULL,
  `SaldoAnt` decimal(10,2) default NULL,
  `SaldoCierre` decimal(10,2) default NULL,
  `Estado` int(11) default '1',
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla aquam.consolidado: 10 rows
DELETE FROM `consolidado`;
/*!40000 ALTER TABLE `consolidado` DISABLE KEYS */;
INSERT INTO `consolidado` (`Id`, `Fecha`, `VentaBodega`, `VentaDelivery`, `OtrosIngresos`, `OtrosGastos`, `SaldoAnt`, `SaldoCierre`, `Estado`) VALUES
	(1, '2020-01-02', 100.00, NULL, NULL, NULL, 0.00, NULL, 0),
	(2, '2020-01-02', 100.00, 0.00, 0.00, 0.00, 0.00, 100.00, 1),
	(3, '2020-03-08', 100.00, 0.00, 0.00, 0.00, 0.00, 100.00, 0),
	(4, '2020-03-08', 100.00, 0.00, 0.00, 0.00, 0.00, 100.00, 0),
	(5, '2020-03-08', 100.00, 0.00, 0.00, 0.00, 0.00, 100.00, 0),
	(6, '2020-03-08', 100.00, 0.00, 0.00, 0.00, 0.00, 100.00, 0),
	(7, '2020-03-08', 100.00, 0.00, 0.00, 0.00, 0.00, 100.00, 0),
	(8, '2020-03-08', 100.00, 0.00, 0.00, 0.00, 0.00, 100.00, 0),
	(9, '2020-03-08', 100.00, 0.00, 0.00, 0.00, 0.00, 100.00, 0),
	(10, '2020-03-08', 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 1);
/*!40000 ALTER TABLE `consolidado` ENABLE KEYS */;


-- Volcando estructura para tabla aquam.constantes
CREATE TABLE IF NOT EXISTS `constantes` (
  `Id` int(11) NOT NULL,
  `Valor` varchar(50) collate utf8_unicode_ci default NULL,
  `Estado` int(11) default '1',
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla aquam.constantes: 14 rows
DELETE FROM `constantes`;
/*!40000 ALTER TABLE `constantes` DISABLE KEYS */;
INSERT INTO `constantes` (`Id`, `Valor`, `Estado`) VALUES
	(100, 'Ingresos', 1),
	(101, 'Venta de Surtidores', 1),
	(102, 'Garantías por Botellones', 1),
	(103, 'Pago de Cuentas por Cobrar', 1),
	(200, 'Gastos', 1),
	(201, 'Pago de Personal', 1),
	(202, 'Pago de Servicios', 1),
	(203, 'Combustible', 1),
	(204, 'Mantenimiento de vehiculo', 1),
	(205, 'Mantenimiento de Planta', 1),
	(206, 'Compra de insumos administrativo', 1),
	(207, 'Compra de insumos operativos', 1),
	(208, 'Gastos de marketing', 1),
	(209, 'Pago de Cuentas por Pagar', 1);
/*!40000 ALTER TABLE `constantes` ENABLE KEYS */;


-- Volcando estructura para tabla aquam.contratos
CREATE TABLE IF NOT EXISTS `contratos` (
  `Id` int(11) NOT NULL auto_increment,
  `IdCliente` int(11) default NULL,
  `IdUsuario` int(11) default NULL,
  `Num` varchar(50) collate utf8_unicode_ci default NULL,
  `FechaFirma` date default NULL,
  `Estado` int(11) default '1' COMMENT '0 no 1 si',
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla aquam.contratos: 1 rows
DELETE FROM `contratos`;
/*!40000 ALTER TABLE `contratos` DISABLE KEYS */;
INSERT INTO `contratos` (`Id`, `IdCliente`, `IdUsuario`, `Num`, `FechaFirma`, `Estado`) VALUES
	(1, 1, 2, '0006', '2020-03-09', 1);
/*!40000 ALTER TABLE `contratos` ENABLE KEYS */;


-- Volcando estructura para tabla aquam.garantias
CREATE TABLE IF NOT EXISTS `garantias` (
  `Id` int(11) NOT NULL auto_increment,
  `IdContrato` int(11) default NULL,
  `Recibo` int(11) default NULL,
  `IdUsuario` int(11) default NULL,
  `Fecha` date default NULL,
  `Garantia` decimal(10,2) default NULL,
  `Estado` int(11) default '1',
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla aquam.garantias: 1 rows
DELETE FROM `garantias`;
/*!40000 ALTER TABLE `garantias` DISABLE KEYS */;
INSERT INTO `garantias` (`Id`, `IdContrato`, `Recibo`, `IdUsuario`, `Fecha`, `Garantia`, `Estado`) VALUES
	(1, 1, 0, 3, '2020-01-02', 0.00, 1);
/*!40000 ALTER TABLE `garantias` ENABLE KEYS */;


-- Volcando estructura para tabla aquam.movimientos
CREATE TABLE IF NOT EXISTS `movimientos` (
  `Id` int(11) NOT NULL auto_increment,
  `Fecha` date default NULL,
  `IdUsuario` int(11) default '1',
  `IdCategoria` int(11) default NULL,
  `Glosa` varchar(50) collate utf8_unicode_ci default NULL,
  `Monto` decimal(10,2) default NULL,
  `Estado` int(11) default '1',
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla aquam.movimientos: 6 rows
DELETE FROM `movimientos`;
/*!40000 ALTER TABLE `movimientos` DISABLE KEYS */;
INSERT INTO `movimientos` (`Id`, `Fecha`, `IdUsuario`, `IdCategoria`, `Glosa`, `Monto`, `Estado`) VALUES
	(1, '2020-03-06', 2, 102, 'glosa', 100.00, 1),
	(2, '2020-03-02', 2, 206, 'glosa', 100.00, 1),
	(3, '2020-03-06', 2, 206, 'sadadas', 11.00, 1),
	(4, '2020-03-06', 2, 102, 'los pies', 123.00, 1),
	(5, '2020-03-07', 2, 103, 'aaaaaa', 1111.00, 1),
	(6, '2020-03-06', 2, 102, 'los pies', 123.00, 1);
/*!40000 ALTER TABLE `movimientos` ENABLE KEYS */;


-- Volcando estructura para tabla aquam.movimientos_botellones
CREATE TABLE IF NOT EXISTS `movimientos_botellones` (
  `Id` int(11) NOT NULL auto_increment,
  `IdCliente` int(11) default NULL,
  `IdUsuario` int(11) default NULL,
  `Fecha` date default NULL,
  `Glosa` varchar(500) collate utf8_unicode_ci default NULL,
  `Ant` int(11) default NULL,
  `Prestamo` int(11) default NULL,
  `Total` int(11) default NULL,
  `Estado` int(11) default '1',
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla aquam.movimientos_botellones: 1 rows
DELETE FROM `movimientos_botellones`;
/*!40000 ALTER TABLE `movimientos_botellones` DISABLE KEYS */;
INSERT INTO `movimientos_botellones` (`Id`, `IdCliente`, `IdUsuario`, `Fecha`, `Glosa`, `Ant`, `Prestamo`, `Total`, `Estado`) VALUES
	(1, 1, 3, '2020-01-02', 'glosa de prestamo e botelloes 1', 0, 11, 11, 1);
/*!40000 ALTER TABLE `movimientos_botellones` ENABLE KEYS */;


-- Volcando estructura para tabla aquam.pedidos
CREATE TABLE IF NOT EXISTS `pedidos` (
  `Id` int(11) NOT NULL auto_increment,
  `IdCliente` int(11) default NULL,
  `Precio` double default NULL,
  `BotVenta` int(11) default NULL,
  `BotNewPrest` int(11) default NULL,
  `BotOldPrest` int(11) default NULL,
  `BotPromo` int(11) default NULL,
  `Fecha` date default NULL,
  `EstadoPedido` int(11) default '0' COMMENT '0 registrado, 1 vendido, 2 vendido con cambios, 3 anulado',
  `IdUsuarioVenta` int(11) default NULL,
  `IdUsuarioPedido` int(11) default NULL,
  `EstadoPago` int(11) default NULL COMMENT '1 cancelado, 0 pendiente',
  `Glosa` varchar(500) collate utf8_unicode_ci default '',
  `Estado` int(11) default '1',
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla aquam.pedidos: 1 rows
DELETE FROM `pedidos`;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` (`Id`, `IdCliente`, `Precio`, `BotVenta`, `BotNewPrest`, `BotOldPrest`, `BotPromo`, `Fecha`, `EstadoPedido`, `IdUsuarioVenta`, `IdUsuarioPedido`, `EstadoPago`, `Glosa`, `Estado`) VALUES
	(1, 12, 2, 10, 0, 0, 1, '2020-05-31', 0, NULL, 2, 1, '', 1);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;


-- Volcando estructura para tabla aquam.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `Id` int(11) NOT NULL auto_increment,
  `Usuario` varchar(50) collate utf8_unicode_ci default NULL,
  `Clave` varchar(50) collate utf8_unicode_ci default NULL,
  `Tipo` varchar(50) collate utf8_unicode_ci default NULL,
  `Nombre` varchar(500) collate utf8_unicode_ci default NULL,
  `Perfil` longblob,
  `Estado` int(11) default '1',
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla aquam.usuarios: 3 rows
DELETE FROM `usuarios`;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`Id`, `Usuario`, `Clave`, `Tipo`, `Nombre`, `Perfil`, `Estado`) VALUES
	(1, 'Junior', '05222334', 'admin', 'Ana Maria', NULL, 1),
	(2, 'Giovanni', '1123', 'root', 'Erick Giovanni', NULL, 1),
	(3, 'Vendedor1', '123', 'venta', 'Cristhian', NULL, 1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;


-- Volcando estructura para tabla aquam.ventas
CREATE TABLE IF NOT EXISTS `ventas` (
  `Id` int(11) NOT NULL auto_increment,
  `IdCliente` int(11) default NULL,
  `Fecha` date default NULL,
  `Tipo` int(11) default '1' COMMENT '0 Residencial, 1 Deposito',
  `PrecioVenta` decimal(10,2) default NULL,
  `BotVendidos` int(11) default NULL,
  `BotNewPrest` int(11) default NULL,
  `BotOldPrest` int(11) default NULL,
  `Promocion` int(11) default NULL COMMENT '1 si (1 gratis), 0 no, nada gratis',
  `Cancelado` int(11) default NULL COMMENT '1 si, 0 no',
  `Estado` int(11) default '1',
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla aquam.ventas: 4 rows
DELETE FROM `ventas`;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
INSERT INTO `ventas` (`Id`, `IdCliente`, `Fecha`, `Tipo`, `PrecioVenta`, `BotVendidos`, `BotNewPrest`, `BotOldPrest`, `Promocion`, `Cancelado`, `Estado`) VALUES
	(1, 1, '2020-01-04', 1, 2.00, 10, 0, 0, 1, 1, 1),
	(2, 2, '2020-01-06', 1, 2.00, 10, 0, 0, 1, 1, 1),
	(3, 3, '2020-01-06', 1, 2.00, 10, 0, 0, 1, 1, 1),
	(4, 5, '2020-01-06', 1, 2.00, 20, 0, 0, 2, 1, 1);
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;


-- Volcando estructura para vista aquam.v_movimientos
-- Creando tabla temporal para superar errores de dependencia de VIEW
CREATE TABLE `v_movimientos` 
) ENGINE=MyISAM;


-- Volcando estructura para procedimiento aquam.sp_bodegas_devolver
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_bodegas_devolver`()
BEGIN
select cl.* from clientes cl inner join contratos c on cl.Id = c.IdCliente and cl.Estado = 1 and c.Estado = 1 order by nombre;
END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_clientes_devolver
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_clientes_devolver`()
BEGIN
select * from clientes c where c.Estado = 1 order by c.Nombre;
END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_cliente_delete
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_cliente_delete`(IN `pId` INT)
BEGIN
update clientes set Estado = 0 where id = pId;
select 
	"El cliente ha sido eliminado" message,
	"1" Estado;
END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_cliente_registrar
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_cliente_registrar`(IN `pNombre` vARCHAR(50), IN `pRUC` vARCHAR(11), IN `pDNI` VARCHAR(15), IN `pDireccion` vARCHAR(50), IN `pReferencia` vARCHAR(50), IN `pTelefono` vARCHAR(50), IN `pLat` vARCHAR(50), IN `pLng` vARCHAR(50))
BEGIN

declare ex int;
#verificamos si existe el cliente
set ex = (select count(*) from clientes 
			where 
				(nombre = pNombre 
					or (RUC = pRUC AND ruc <> "")
					or (DNI =pDNI and DNI <>"") 		
				) 
			and Estado = 1);

if ex =0 then
	begin
		insert into clientes (nombre, DNI, RUC, direccion, referencia, telefono, latitud, longitud) values
		(pNombre, pDNI, pRUC, pDireccion, pReferencia, pTelefono, pLat, pLng);
		
		select 
			"Cliente registrado con éxito" message,
			last_insert_id() Id,
			"1" Estado;
	end;
else
	begin
		select 
			"Cliente duplicado, verifique que el nombre, el DNI o el RUC no se encuentre registrado e inténtelo nuevamente" message,
			"0" Estado;
	end;
end if;
#insert into Nombre, RUC, Direccion, Refrencia, Telefono
END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_cliente_update
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_cliente_update`(IN `pId` INT, IN `pNombre` vARCHAR(50), IN `pRUC` vARCHAR(50), IN `pDNI` vARCHAR(50), IN `pDireccion` vARCHAR(50), IN `pReferencia` vARCHAR(50), IN `pTelefono` vARCHAR(50), IN `pLatitud` vARCHAR(50), IN `pLongitud` vARCHAR(50))
BEGIN

declare ex int;
declare exc int;
#verificamos si existe el cliente
set ex = (
		select count(*) from clientes 
		where 
			(nombre = pNombre 
				OR (RUC = pRUC AND ruc <> "")
				or (DNI =pDNI and DNI <>"") 		
			) 
			and Estado = 1 and Id <> pId);

if ex =0 then
	begin
		update clientes set 
		Nombre = pNombre,
		RUC = pRUC,
		DNI = pDNI,
		Direccion = pDireccion,
		Referencia = pReferencia,
		Telefono = pTelefono,
		Latitud = pLatitud,
		Longitud = pLongitud
		where id = pId;
	
		select 
		"Cliente actualizado con éxito" message,
		"1" Estado;
	end;
else
	begin
		select 
			"Cliente no puede ser actualziadoverifique que el nombre, el DNI o el RUC no se encuentre registrado e inténtelo nuevamente" message,
			"0" Estado;
	end;
end if;


END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_consolidar
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_consolidar`(IN `pFecha` daTE)
BEGIN
declare pSaldoAnt decimal(10,2);
declare pSaldoCierre decimal(10,2);
declare pVentaBodega decimal(10,2);
declare pVentaDelivery decimal(10,2);
declare pOtrosIngresos decimal(10,2);
declare pOtrosGastos decimal(10,2);

#deshabilitar el consolidado anterior
update consolidado c set c.Estado = 0 where c.Fecha = pFecha;

#obtener inormacion
set pSaldoAnt = (select ifnull(sum(SaldoCierre),0) from consolidado where estado=1 and fecha = date_sub(pFecha, INTERVAL 1 day));
set pVentaBodega = (select ifnull(sum(botVendidos*precioventa),0) from ventas where fecha = pFecha and cancelado=1 and activo = 1 and tipo = 1);
set pVentaDelivery  = (select ifnull(sum(botVendidos*precioventa),0) from ventas where fecha = pFecha and cancelado=1 and activo = 1 and tipo = 0);
set pOtrosIngresos = (select ifnull(sum(monto),0) from movimientos where fecha = pFecha and Estado = 1 and left(IdCategoria,1)="1");
set pOtrosGastos = (select ifnull(sum(monto),0) from movimientos where fecha = pFecha and Estado = 1 and left(IdCategoria,1)="2");
set pSaldoCierre = pSaldoAnt + pVentaBodega + pVentaDelivery + pOtrosIngresos - pOtrosGastos;

insert into consolidado 
(Fecha, VentaBodega, VentaDelivery, OtrosIngresos, OtrosGastos, SaldoAnt, SaldoCierre) values 
(pFecha, pVentaBodega, pVentaDelivery, pOtrosIngresos, pOtrosGastos, pSaldoAnt, pSaldoCierre);

END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_contrato_devolver
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_contrato_devolver`(IN `pIdCliente` INT)
BEGIN

select 
	c.Id,
	fecha_b2n(c.FechaFirma) "Fecha",
	c.Num Numero,
	u.Id IdVendedor,
	u.Usuario Vendedor,
	cl.Id IdCliente,
	cl.Nombre Cliente,
	ifnull((select sum(g.Garantia) from garantias g where g.IdContrato = c.Id and g.Estado = 1),0) "Garantia",
#	ifnull((select fecha_b2n(max(g.Fecha)) from garantias g where g.IdContrato = c.Id and g.Estado = 1),"") Fecha_Garantia,
	ifnull((select total from movimientos_botellones m where m.IdCliente = c.IdCliente and m.Estado = 1 order by Id desc limit 1),0) "Botellones"
from contratos c
inner join usuarios u on c.IdUsuario = u.Id
inner join clientes cl on c.IdCliente = cl.Id
where c.IdCliente = pIdCliente;

END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_contrato_registrar
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_contrato_registrar`(IN `pFecha` varCHAR(10), IN `pNumero_contrato` vARCHAR(50), IN `pIdUsuario` INT, IN `pIdCliente` INT, IN `pNum_recibo` vARCHAR(50), IN `pTotalGarantia` VARCHAR(50), IN `pTotalBotellones` vARCHAR(50), IN `pGlosaBotellones` vARCHAR(500))
BEGIN
declare pIdContrato int;
declare existe int;

set existe = (select count(*) from contratos c where c.IdCliente = pIdCliente and c.Estado = 1);
if existe =0 then
	begin
		#registrar contrato
		insert into contratos (IdCliente,IdUsuario,Num,FechaFirma) values(pIdCliente,pIdUsuario, pNumero_contrato, pFecha);
		set pIdContrato = (SELECT LAST_INSERT_ID());
		
		#rgistrar garantia
		if pTotalGarantia <> "" then
			insert into garantias (IdContrato, Recibo, IdUsuario, Fecha, Garantia) values(pIdContrato, pNum_recibo,pIdUsuario, pFecha, pTotalGarantia);
		end if; 
	
		#registrar boellones
		insert into movimientos_botellones(IdCliente, IdUsuario, Fecha, Glosa, Ant, Prestamo, Total) values(pIdCliente, pIdUsuario, pFecha, pGlosaBotellones, "0", pTotalBotellones,pTotalBotellones);
		
		select
			"Contrato registrado con éxito" message,
			"1" Estado;
	end;
else
	begin
			select
			"Cliente ya tiene un contrato vigente" message,
			"0" Estado;
	end;
end if;


END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_garantias_devolver
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_garantias_devolver`(IN `pIdContrato` INT)
BEGIN
 select 
 a.Id, a.IdContrato, a.Recibo, a.IdUsuario, u.Usuario, fecha_b2n(a.Fecha) Fecha, a.Garantia

  from garantias a 
  inner join usuarios u on a.IdUsuario = u.Id
  where a.IdContrato = pIdContrato and a.Estado = 1
  order by a.Fecha desc;
END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_mov_botellones_devolver
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_mov_botellones_devolver`(IN `pIdCliente` INT)
BEGIN
	select 
	concat(
	fecha_b2n(c.Fecha), " ", u.Usuario) Fecha,
	c.Glosa,
	c.Prestamo,
	c.Total
	from movimientos_botellones c
	inner join usuarios u on c.IdUsuario = u.Id
	where c.Estado = 1 and c.IdCliente = pIdCliente;

END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_mov_cat_devolver
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_mov_cat_devolver`(IN `pIngreso` INT)
BEGIN
if pIngreso = 0 then
	begin
		select Id,Valor Categoria, left(Id,1) Filtro from constantes where left(Id,1) in (2) and right(Id,1) not in (0) and Estado = 1 order by Filtro, Categoria;
	end;
elseif pIngreso = 1 then
	begin
		select Id,Valor Categoria, left(Id,1) Filtro from constantes where left(Id,1) in (1) and right(Id,1) not in (0) and Estado = 1 order by Filtro, Categoria;
	end;
else
	begin
		select Id,Valor Categoria, left(Id,1) Filtro from constantes where left(Id,1) in (1,2) and right(Id,1) not in (0) and Estado = 1 order by Filtro, Categoria;
	end;
end if;

END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_mov_delete
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_mov_delete`(IN `pId` INT)
BEGIN
update movimientos a set a.Estado = 0 where a.id= pId;
select 
		"Movimiento eliminado" Message,
		"1" Estado;
END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_mov_devolver
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_mov_devolver`()
BEGIN
select 
i.Id,
fecha_b2n(i.Fecha) Fecha,
u.Usuario,
c.Valor Categoria,
c.Id IdCat,
i.Glosa,
(select co.Valor from constantes co where co.Id = concat(left(c.Id,1),"00") and co.Estado =1) Tipo,
i.Monto
from movimientos i 
inner join usuarios u on i.IdUsuario = u.Id
inner join constantes c on c.Id = i.IdCategoria
where i.Fecha >date(DATE_SUB(NOW(),INTERVAL 6 MONTH))
and i.Estado = 1
and c.Estado = 1
order by i.Fecha desc
;
END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_mov_registrar
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_mov_registrar`(IN `pFecha` vARCHAR(10), IN `pIdCat` INT, IN `pGlosa` vARCHAR(500), IN `pMonto` deCIMAL(10,2), IN `pIdUsu` INT)
BEGIN
insert into movimientos (Fecha, IdUsuario, IdCategoria, Glosa, Monto) values (pFecha, pIdUsu, pIdCat, pGlosa, pMonto);

select 
	"Movimiento registrado" Message,
	"1" Estado;

END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_pedidos_devolver
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_pedidos_devolver`()
BEGIN
select 
p.Id,
p.IdCliente,
c.Nombre Cliente,
p.Precio,
p.BotVenta,
p.BotNewPrest,
p.BotOldPrest,
p.BotPromo,
fecha_b2n(p.Fecha) Fecha
from pedidos p
inner join clientes c on p.IdCliente = c.Id
where p.EstadoPedido = 0 and p.Estado = 1;
END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_pedido_registrar
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_pedido_registrar`(IN `pIdCliente` INT, IN `pPrecio` dOUBLE, IN `pEstadoPago` INT, IN `pBotVenta` INT, IN `pBotNewPrest` INT, IN `pBotOldPrest` INT, IN `pBotPromo` INT, IN `pFecha` vARCHAR(50), IN `pIdUsuarioPedido` INT)
BEGIN
declare ex int;
set ex = (select count(*) from pedidos where IdCliente = pIdCliente and fecha = pFecha and EstadoPedido =0 and Estado = 1);

if ex =0 then
	begin
		insert into 
		pedidos(IdCliente, Precio, BotVenta, BotNewPrest, BotOldPrest, BotPromo, Fecha, IdUsuarioPedido, EstadoPago) 
		values(pIdCliente, pPrecio, pBotVenta, pBotNewPrest, pBotOldPrest, pBotPromo, pFecha, pIdUsuarioPedido, pEstadoPago);
		
		select 
			"Pedido Registrado con éxito" message,
			last_insert_id() Id,
			"0" Estado;
	end;
else
	begin
		select 
			"Error: El pedido ya está registrado" message,
			last_insert_id() Id,
			"0" Estado;
	end;
end if;
     
END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_rep_mov_devolver
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_rep_mov_devolver`(IN `pDesde` varCHAR(10), IN `pHasta` VARCHAR(10))
BEGIN

if pDesde ="" then
	begin
		select 
			fecha_b2n(v.Fecha) Fecha,
			"Ingresos" AS "Tipo",
			case when v.Tipo = 0 then _utf8"Residencial" else _utf8"Deposito" end AS "Categoria",
			concat(cl.Nombre,_utf8" - ", cl.Direccion) AS "Detalle",
			v.PrecioVenta * v.BotVendidos AS "Total",
			case when v.Cancelado = 1 then _utf8"Efectivo" else _utf8"Crédito" end AS "Pago" 
		from ventas v  
		join clientes cl on v.IdCliente = cl.Id 
		where v.Estado = 1 
		and fecha between date_sub(date(now()), interval 1 MONTH) and date(now())
		
		union 
	
		select 
			fecha_b2n(m.Fecha) AS "Fecha",
			case when left(c.Id,1) = "1" then "Ingresos" else "Gastos" end AS "Tipo",
			c.Valor AS "Categoria",
			m.Glosa AS "Detalle",
			m.Monto AS "Total",
			"Efectivo" AS "Pago" 
			from 
			movimientos m 
		  join constantes c on m.IdCategoria = c.Id 
		  where m.Estado = 1 
		  and fecha between date_sub(date(now()), interval 1 MONTH) and date(now())
		  order by fecha desc;
	end;
else

	begin
		select 
			fecha_b2n(v.Fecha) Fecha,
			"Ingresos" AS "Tipo",
			case when v.Tipo = 0 then _utf8"Residencial" else _utf8"Deposito" end AS "Categoria",
			concat(cl.Nombre,_utf8" - ", cl.Direccion) AS "Detalle",
			v.PrecioVenta * v.BotVendidos AS "Total",
			case when v.Cancelado = 1 then _utf8"Efectivo" else _utf8"Crédito" end AS "Pago" 
		from ventas v  
		join clientes cl on v.IdCliente = cl.Id 
		where v.Activo = 1
		and fecha between pDesde and pHasta
		
		union 
	
		select 
			fecha_b2n(m.Fecha) AS "Fecha",
			case when left(c.Id,1) = "1" then "Ingresos" else "Gastos" end AS "Tipo",
			c.Valor AS "Categoria",
			m.Glosa AS "Detalle",
			m.Monto AS "Total",
			"Efectivo" AS "Pago" 
			from 
			movimientos m 
		  join constantes c on m.IdCategoria = c.Id 
		  where m.Estado = 1 
		  and fecha between pDesde and pHasta
		  order by fecha desc;
	end;
end if;

END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_totalclientes_devolver
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_totalclientes_devolver`()
BEGIN
select 
c.Id,
c.Nombre,
c.RUC,
c.DNI,
c.Direccion,
c.Referencia,
c.Telefono
 from clientes c where c.Estado = 1;
END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_usuarios_login
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_usuarios_login`(IN `pUsuario` vARCHAR(50), IN `pClave` vARCHAR(50))
BEGIN

#existe el usuario?
declare existe int;

#si existe el usuario y la clave es correcta
set existe = (select count(*) from usuarios u where usuario = pUsuario and u.Clave = pClave and u.Estado = 1);

if existe <> 0 then
	begin
	select
		Id, 
		Usuario, 
		Tipo,
		Perfil,
		"Acceso exitoso" Message,
		"1" Estado
		from usuarios where usuario = pUsuario and Clave = pClave and Estado = 1 limit 1;
	end;
else 
	begin
		set existe = (select count(*) from usuarios u where usuario = pUsuario and u.Estado = 1);
		if existe =0 then
			begin
				select 
					"Usuario no registrado" Message,
					"0" Estado; 
			end;
		else
			begin
				select 
					"Clave incorrecta" Message,
					"-1" Estado;
			end;
		end if;
	end;
end if;

END//
DELIMITER ;


-- Volcando estructura para procedimiento aquam.sp_ventas_registrar
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ventas_registrar`(IN `pIdCliente` INT, IN `pTipo` INT, IN `pPrecioVenta` deCIMAL(10,2), IN `pCancelado` INT, IN `pBotVenta` INT, IN `pBotNewPrest` INT, IN `pBotOldPrest` INT, IN `pPromocion` INT, IN `pFecha` vARCHAR(10))
BEGIN

insert into ventas (
							IdCliente, Fecha, Tipo, PrecioVenta, BotVendidos, BotNewPrest, BotOldPrest, Promocion, Cancelado) values(
							pIdCliente, pFecha, pTipo, pPrecioVenta, pBotVenta, pBotNewPrest, pBotOldPrest, pPromocion, pCancelado);
select 
	last_insert_id() IdVenta,
	pIdCliente IdCliente,
	"Registro realizado con éxito" Message,
	"1" Estado;
		
END//
DELIMITER ;


-- Volcando estructura para función aquam.fecha_b2n
DELIMITER //
CREATE DEFINER=`root`@`localhost` FUNCTION `fecha_b2n`(`pFecha` vARCHAR(10)) RETURNS varchar(10) CHARSET utf8
BEGIN
return (select 
	concat(
	substring(pFecha,9,2),"/",
	substring(pFecha,6,2),"/",
	substring(pFecha,1,4)
	));
END//
DELIMITER ;


-- Volcando estructura para vista aquam.v_movimientos
-- Eliminando tabla temporal y crear estructura final de VIEW
DROP TABLE IF EXISTS `v_movimientos`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_movimientos` AS select `v`.`Fecha` AS `Fecha`,_utf8'Ingresos' AS `Tipo`,(case when (`v`.`Tipo` = 0) then _utf8'Residencial' else _utf8'Deposito' end) AS `Categoria`,concat(`cl`.`Nombre`,_utf8' - ',`cl`.`Direccion`) AS `Detalle`,(`v`.`PrecioVenta` * `v`.`BotVendidos`) AS `Total`,(case when (`v`.`Cancelado` = 1) then _utf8'Efectivo' else _utf8'Crédito' end) AS `Pago` from (`ventas` `v` join `clientes` `cl` on((`v`.`IdCliente` = `cl`.`Id`))) where (`v`.`Activo` = 1) union select `fecha_b2n`(`m`.`Fecha`) AS `Fecha`,(case when (left(`c`.`Id`,1) = _utf8'1') then _utf8'Ingresos' else _utf8'Gastos' end) AS `Tipo`,`c`.`Valor` AS `Categoria`,`m`.`Glosa` AS `Detalle`,`m`.`Monto` AS `Total`,_utf8'Efectivo' AS `Pago` from (`movimientos` `m` join `constantes` `c` on((`m`.`IdCategoria` = `c`.`Id`))) where (`m`.`Estado` = 1) order by `fecha` desc;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
