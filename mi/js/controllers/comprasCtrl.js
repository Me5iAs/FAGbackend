'use strict';

app.controller('comprasCtrl', ['$scope', 'gQueryService', '$location','$uibModal', function($scope, gQueryService, $location,$uibModal){


// pendientes
  // Estado Cargando
    $scope.CargandoPendientes = true;
    
  // matrices de resultados de publicaciones activas
    $scope.compras_pendientes_total = [];
    $scope.compras_pendientes = [];

  // paginacion pendientes
    $scope.PagPendientes = {
      Actual : 1,
      Tamano : 5,
      Cambiar: function(){
        $scope.compras_pendientes = [];
        var inicio = $scope.PagPendientes.Tamano*$scope.PagPendientes.Actual-$scope.PagPendientes.Tamano;
        var fin = $scope.PagPendientes.Tamano*$scope.PagPendientes.Actual-1;
        for(var i = 0; i<= $scope.compras_pendientes_total.length - 1; i++){
          if(i>=inicio && i<=fin){
            $scope.compras_pendientes.push($scope.compras_pendientes_total[i]);
          }
        }          
      }
    }

  // Cargar publicaciones activas
    $scope.CargarPendientes = function(){
      $scope.CargandoPendientes = true;      
      $scope.compras_pendientes_total = [];
      var promesa = gQueryService.sql({
        name:'sp_compras_devolver',
        datos: sessionStorage.getItem("gId") + "|" + 0
      });
    
      promesa.then(function(msg){
        $scope.CargandoPendientes = false;
        
        if(msg.data!="null"){
          $scope.compras_pendientes_total = msg.data;
          $scope.PagPendientes.Actual = 1;          
          $scope.PagPendientes.Cambiar();
        }else{      
          $scope.compras_pendientes_total  = [];
          $scope.PagPendientes.Cambiar();
        }
      });
    }
    $scope.CargarPendientes();

  // Mostrar Detalle

  // Calificar Venta
    $scope.Calificar = function(IdCompra,IdPub){
      $scope.items = {
        Idcompra: IdCompra,
        Idpublicacion: IdPub
      };
      
      var VentanaCalificar = $uibModal.open({
        animation: true,
        templateUrl: 'templates/tpl_calificar_compra.html',
        controller: 'calificarVentaCtrl',
        resolve: {
          items: function () {
            return $scope.items;
          }
        }  
      });

      VentanaCalificar.result.then(
        // ok
        function (resp){
          var promesa = gQueryService.sql({
            name:'fn_actualiza_compra_comprador',
            datos: IdCompra + "|" + resp.EstadoVenta + "|" + resp.Comentario + "|" + resp.Calificacion
          });
          
          promesa.then(function(msg){
            if(msg.data.resultado ==1){              
              for(var x = 0; x<=$scope.compras_pendientes_total.length-1; x++){
                if($scope.compras_pendientes_total[x].IdVenta == IdCompra){                  
                  $scope.compras_pendientes_total.splice(x,1);
                  $scope.PagPendientes.Cambiar();
                  return;
                }
              }
            }
          });
        }, 
        // cancelar
        function () {});
    };

  // info Usuario
    $scope.verInfoUsuario = function (IdUsuario) {

    //TraerInfo
      var promesa = gQueryService.sql({
        name:'sp_misdatos_devolver',
        datos: IdUsuario
      });
    
      promesa.then(function(msg){
        $scope.items = msg.data[0];
        var VentanaInfoUsuario = $uibModal.open({
          animation: true,
          templateUrl: 'templates/tpl_usuario_info.html',
          controller: 'UsuarioInfoCtrl',
          resolve: {
            items: function () {
              return $scope.items;
            }
          }  
        });

      VentanaInfoUsuario.result.then(
        // ok
        function (resp){}, 
        // cancelar
        function () {});

      });
    }


// Historial
  // Estado Cargando
    $scope.CargandoHistorial = true;
    
  // matrices de resultados de publicaciones activas
    $scope.compras_Historial_total = [];
    $scope.compras_Historial = [];

  // paginacion Historial
    $scope.PagHistorial = {
      Actual : 1,
      Tamano : 5,
      Cambiar: function(){
        $scope.compras_Historial = [];
        var inicio = $scope.PagHistorial.Tamano*$scope.PagHistorial.Actual-$scope.PagHistorial.Tamano;
        var fin = $scope.PagHistorial.Tamano*$scope.PagHistorial.Actual-1;
        for(var i = 0; i<= $scope.compras_Historial_total.length - 1; i++){
          if(i>=inicio && i<=fin){
            $scope.compras_Historial.push($scope.compras_Historial_total[i]);
          }
        }          
      }
    }

  // Cargar historial
    $scope.CargarHistorial = function(){
      $scope.CargandoHistorial = true;      
      $scope.compras_Historial_total = [];
      var promesa = gQueryService.sql({
        name:'sp_compras_devolver',
        datos: sessionStorage.getItem("gId") + "|" + 1
      });
    
      promesa.then(function(msg){
        $scope.CargandoHistorial = false;
        
        if(msg.data!="null"){
          $scope.compras_Historial_total = msg.data;
          $scope.PagHistorial.Actual = 1;          
          $scope.PagHistorial.Cambiar();
        }else{      
          $scope.compras_Historial_total  = [];
          $scope.PagHistorial.Cambiar();
        }
      });
    }
    $scope.CargarHistorial();

  // Mostrar Detalle

  // ver calificacion
    $scope.verCalificacion = function(IdCompra){
      $scope.items = {
        IdCompra: IdCompra,        
      };
      
      var VentanaCalificar = $uibModal.open({
        animation: true,
        templateUrl: 'templates/tpl_calificacion_ver.html',
        controller: 'calificCtrl',
        resolve: {
          items: function () {
            return $scope.items;
          }
        }  
      });

      VentanaCalificar.result.then(
        // ok
        function (resp){
          var promesa = gQueryService.sql({
            name:'fn_actualiza_compra_comprador',
            datos: IdCompra + "|" + resp.EstadoVenta + "|" + resp.Comentario + "|" + resp.Calificacion
          });
          
          promesa.then(function(msg){
            if(msg.data.resultado ==1){              
              for(var x = 0; x<=$scope.compras_pendientes_total.length-1; x++){
                if($scope.compras_pendientes_total[x].IdVenta == IdCompra){                  
                  $scope.compras_pendientes_total.splice(x,1);
                  $scope.PagPendientes.Cambiar();
                  return;
                }
              }
            }
          });
        }, 
        // cancelar
        function () {});
    };

  // info Usuario
    $scope.verInfoUsuario = function (IdUsuario) {

    //TraerInfo
      var promesa = gQueryService.sql({
        name:'sp_misdatos_devolver',
        datos: IdUsuario
      });
    
      promesa.then(function(msg){
        $scope.items = msg.data[0];
        var VentanaInfoUsuario = $uibModal.open({
          animation: true,
          templateUrl: 'templates/tpl_usuario_info.html',
          controller: 'UsuarioInfoCtrl',
          resolve: {
            items: function () {
              return $scope.items;
            }
          }  
        });

      VentanaInfoUsuario.result.then(
        // ok
        function (resp){}, 
        // cancelar
        function () {});

      });
    }


}])


app.controller('calificarVentaCtrl', function ($scope, $uibModalInstance, items) {
  $scope.Pregunta = items.Pregunta;
  $scope.Id = items.Id;
  // console.log(items);
  $scope.Cancelar = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.EstadoCompraComprador='';
  $scope.CalificaComprador='';
  $scope.comentarioComprador='';     

  $scope.Registrar = function(){    
    $uibModalInstance.close({
      EstadoVenta   : $scope.EstadoCompraComprador,
      Calificacion  : $scope.CalificaComprador,
      Comentario    : $scope.comentarioComprador,      
    });
  };
});

app.controller('UsuarioInfoCtrl', function ($scope, $uibModalInstance, items, gQueryService) {
  $scope.Datos = items;

  var promesa = gQueryService.sql({
    name:'sp_usuario_reputacion',
    datos: $scope.Datos.Id    
  });
      
  promesa.then(function(msg){
    if(msg.data!="null"){ 

      $scope.options = {
        chart: {
          type: 'pieChart',
          height: 300,
          x: function(d){return d.key;},
          y: function(d){return d.y;},
          showLabels: true,
          duration: 500,
          labelThreshold: 0.01,
          labelSunbeamLayout: true,
          legend: {
            margin: {
              top: 5,
              right: 30,
              bottom: 5,
              left: 0
            }
          }
        }
      };
      $scope.DataReputacion = [
        {
            key: msg.data[0].Key,
            y: msg.data[0].y                  
        },
        {
            key: msg.data[1].Key,
            y: msg.data[1].y
        },
        {
            key: msg.data[2].Key,
            y: msg.data[2].y
        }
      ];
      
      $scope.Total = parseInt(msg.data[0].y)+parseInt(msg.data[1].y)+parseInt(msg.data[2].y);
      $scope.rating ={
        Positivo: Math.round((parseInt(msg.data[0].y)/$scope.Total) * 100),
        Negativo: Math.round((parseInt(msg.data[1].y)/$scope.Total) * 100),
        Neutro  : Math.round((parseInt(msg.data[2].y)/$scope.Total) * 100)
      }

    }else{      
      $scope.Datos= {};          
    }
  });

  $scope.ok = function () {
    location.href='/#/ver_calf/' + $scope.Datos.Id ;
    $uibModalInstance.dismiss('cancel');
  };

  $scope.Cancelar = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

app.controller('calificCtrl', function ($scope, $uibModalInstance, items, gQueryService) {
  // console.log(items);

  var promesa = gQueryService.sql({
    name:'sp_compra_calificacion',
    datos: items.IdCompra
  });
      
  promesa.then(function(msg){
    if(msg.data!="null"){ 
      $scope.Datos = msg.data[0];
    }else{      
      $scope.Datos= {};
    }
  });

  $scope.Cancelar = function () {
    $uibModalInstance.dismiss('cancel');
  };
});