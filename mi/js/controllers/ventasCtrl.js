'use strict';

app.controller('ventasCtrl', ['$scope', 'gQueryService', '$location','$uibModal', function($scope, gQueryService, $location,$uibModal){

// Activas
  // Estado Cargando
    $scope.CargandoAbiertas = true;
    $scope.CargandoDetalleAbiertas = false;
  
  // EstadoActual de activas
    $scope.AbiertasGeneral = true;
    $scope.AbiertasDetalle = false;
    $scope.IdPub = 0;
  
  // matrices de resultados de publicaciones activas
    $scope.publicaciones_activas_total = [];
    $scope.publicaciones_activas = [];

  // paginacion
    $scope.PagAbiertas = {
      Actual : 1,
      Tamano : 5,
      Cambiar: function(){
        $scope.publicaciones_activas = [];
        var inicio = $scope.PagAbiertas.Tamano*$scope.PagAbiertas.Actual-$scope.PagAbiertas.Tamano;
        var fin = $scope.PagAbiertas.Tamano*$scope.PagAbiertas.Actual-1;
        for(var i = 0; i<= $scope.publicaciones_activas_total.length - 1; i++){
          if(i>=inicio && i<=fin){
            $scope.publicaciones_activas.push($scope.publicaciones_activas_total[i]);
          }
        }          
      }
    }

  // Cargar publicaciones activas
    $scope.CargarAbierto = function(){
      $scope.CargandoAbiertas = true;
      $scope.CargandoDetalleAbiertas = false;
      $scope.publicaciones_activas_total = [];
      var promesa = gQueryService.sql({
        name:'sp_mispublicaciones_devolver',
        datos: sessionStorage.getItem("gId") + "|" + 1
      });
    
      promesa.then(function(msg){
        $scope.CargandoAbiertas = false;
        $scope.CargandoDetalleAbiertas = false;
        if(msg.data!="null"){
          $scope.publicaciones_activas_total = msg.data;
          $scope.PagAbiertas.Actual = 1;          
          $scope.PagAbiertas.Cambiar();
        }else{      
          $scope.publicaciones_activas_total  = [];
          $scope.PagAbiertas.Cambiar();
        }
      });
    }
    $scope.CargarAbierto();

  // Mostrar Detalle
    $scope.ActivasMostrarDetalle = function(Id){
      $scope.CargandoDetalleAbiertas = true;
      $scope.AbiertasGeneral = false;
    
      // Preguntas
        var promesa = gQueryService.sql({
          name:'sp_mispreguntas_pend_devolver',
          datos: sessionStorage.getItem("gId") + "|" + 1 + "|" + Id
        });
      
        promesa.then(function(msg){
          if(msg.data!="null"){
            $scope.Preguntas_abiertas = msg.data;
          }else{      
            $scope.Preguntas_abiertas  = [];
          }
          $scope.CargandoDetalleAbiertas = false;
        });

      // interesados
        var promesa = gQueryService.sql({
          name:'sp_ventas_pnd_devolver',
          datos: Id
        });
      
        promesa.then(function(msg){
          if(msg.data!="null"){
            $scope.ventas_abiertas = msg.data;
          }else{      
            $scope.ventas_abiertas  = [];
          }
        }); 

    }

    $scope.ActivasOcultarDetalle = function(){
      $scope.AbiertasGeneral = true;
      $scope.AbiertasDetalle = false;      
      $scope.CargarAbierto();
    }

  // respuestas
    // responder pregunta
      $scope.Responder = function(Id, Pregunta, IdPub){
          
          $scope.items = {
            Id: Id,
            Pregunta: Pregunta
          };
          
          var VentanaRespuesta = $uibModal.open({
            animation: true,
            templateUrl: 'templates/tpl_Responder.html',
            controller: 'respuestaCtrl',
            resolve: {
              items: function () {
                return $scope.items;
              }
            }  
          });

          VentanaRespuesta.result.then(
            // ok
            function (resp){
              var promesa = gQueryService.sql({
                name:'fn_respuesta_registrar',
                datos: resp.Id + "|" + resp.Respuesta
              });
              
              promesa.then(function(msg){
                if(msg.data.resultado ==1){              
                  for (var x = 0; x<$scope.Preguntas_abiertas.length; x++){
                    if($scope.Preguntas_abiertas[x].Id == resp.Id){
                      $scope.Preguntas_abiertas.splice(x,1);
                    }
                  }
                  for (var x = 0; x<$scope.publicaciones_activas.length; x++){
                    if($scope.publicaciones_activas[x].Id == IdPub){
                      $scope.publicaciones_activas[x].Preguntas_pend = $scope.publicaciones_activas[x].Preguntas_pend-1;
                      if($scope.publicaciones_activas[x].Preguntas_pend==0){
                        $scope.Preguntas_abiertas = [];
                      }
                    }
                  }
                }
              });
            }, 
            // cancelar
            function () {});
      };

    // borrar Pregunta
      $scope.Borrar = function(rId, IdPub){
        var c = confirm("Esta acción borrará la pregunta realizada por un potencial cliente \n \n ¿Desea continuar?");
        if(c ==false){
          return;
        } 
        var promesa = gQueryService.sql({
          name:'fn_pregunta_borrar',
          datos: rId
        });

        promesa.then(function(msg){
          if(msg.data.resultado ==1){              
            for (var x = 0; x<$scope.Preguntas_abiertas.length; x++){
              if($scope.Preguntas_abiertas[x].Id == rId){            
                $scope.Preguntas_abiertas.splice(x,1);
              }
            }
            for (var x = 0; x<$scope.publicaciones_activas.length; x++){
              if($scope.publicaciones_activas[x].Id == IdPub){
                $scope.publicaciones_activas[x].Preguntas_pend = $scope.publicaciones_activas[x].Preguntas_pend-1;
              }
            }
          }
        });
      };

  // Calificar Venta
    $scope.Calificar = function(IdCompra,IdPub){
      $scope.items = {
        Idcompra: IdCompra,
        Idpublicacion: IdPub
      };
      
      var VentanaCalificar = $uibModal.open({
        animation: true,
        templateUrl: 'templates/tpl_calificar_venta.html',
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
            name:'fn_actualizar_compra_vendedor',
            datos: IdCompra + "|" + resp.EstadoVenta + "|" + resp.Comentario + "|" + resp.Calificacion + "|" + resp.EstadoPub + "|" + IdPub
          });
          
          promesa.then(function(msg){
            if(msg.data.resultado ==1){              
              location.reload();
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

  // Detener Publicacion
    $scope.DetenerPublicacion = function(Id){
      var v = confirm("Esta opción detendrá la publicación, no se podrá responder comentarios pendientes y se marcará a todas las intensiones de compra como no concretadas. \n ¿Desea continuar?");
      if(v==false){
        return false;
      }
      
      $scope.publicaciones_activas_total
      $scope.PagAbiertas.Cambiar();

      var promesa = gQueryService.sql({
        name:'fn_publicacion_detener',
        datos: Id
      });
      
      promesa.then(function(msg){
        for(var x=0; x<=$scope.publicaciones_activas_total.length-1; x++){
          if($scope.publicaciones_activas_total[x].Id == Id){
            $scope.publicaciones_activas_total.splice(x, 1);
            $scope.PagAbiertas.Cambiar();
            return;
          }
        }
        // location.reload();
      });
    }


// Detenidas  
  $scope.publicaciones_detenidas = [];
  $scope.publicaciones_detenidas_total = [];
  // paginacion PagADetenidas
    $scope.PagDetenidas = {
      Actual : 1,
      Tamano : 5,
      Cambiar: function(){
        $scope.publicaciones_detenidas = [];
        var inicio = $scope.PagDetenidas.Tamano*$scope.PagDetenidas.Actual-$scope.PagDetenidas.Tamano;
        var fin = $scope.PagDetenidas.Tamano*$scope.PagDetenidas.Actual-1;
        for(var i = 0; i<= $scope.publicaciones_detenidas_total.length - 1; i++){
          if(i>=inicio && i<=fin){

            $scope.publicaciones_detenidas.push($scope.publicaciones_detenidas_total[i]);            
          }
        }          
      }
    }

  // Cargar publicaciones detenidas
    $scope.CargarDetenido = function(){
      $scope.CargandoDetenido = true;
      $scope.publicaciones_detenidas_total = [];
      var promesa = gQueryService.sql({
        name:'sp_mispublicaciones_devolver',
        datos: sessionStorage.getItem("gId") + "|" + 0
      });
    
      promesa.then(function(msg){
        $scope.CargandoDetenido = false;
        if(msg.data!="null"){
          $scope.publicaciones_detenidas_total = msg.data;
          $scope.PagDetenidas.Cambiar();
        }else{      
          $scope.publicaciones_detenidas_total  = [];
          $scope.PagDetenidas.Cambiar();
        }
      });
    }
    
  // Reactivar o cerrar Publicacion
    $scope.CambiarEstCerrado = function(Idpub, est){
      var promesa = gQueryService.sql({
        name:'fn_publicacion_CambiarEstado',
        datos: Idpub + "|" + est
      });
    
      promesa.then(function(msg){        
        for(var x=0; x<=$scope.publicaciones_detenidas_total.length-1; x++){
          if($scope.publicaciones_detenidas_total[x].Id == Idpub){
            $scope.publicaciones_detenidas_total.splice(x, 1);
            $scope.PagDetenidas.Cambiar();
            return;
          }
        }
        // $scope.CargarDetenido();
      });
    }


// Cerradas  
  $scope.publicaciones_cerradas = [];
  $scope.publicaciones_cerradas_total = [];
  // paginacion PagCerradas
    $scope.PagCerradas = {
      Actual : 1,
      Tamano : 5,
      Cambiar: function(){
        $scope.publicaciones_cerradas = [];
        var inicio = $scope.PagCerradas.Tamano*$scope.PagCerradas.Actual-$scope.PagCerradas.Tamano;
        var fin = $scope.PagCerradas.Tamano*$scope.PagCerradas.Actual-1;
        for(var i = 0; i<= $scope.publicaciones_cerradas_total.length - 1; i++){
          if(i>=inicio && i<=fin){

            $scope.publicaciones_cerradas.push($scope.publicaciones_cerradas_total[i]);            
          }
        }          
      }
    }

  // Cargar publicaciones cerradas
    $scope.CargandoCerradas = function(){
      $scope.CargarCerradas = true;
      $scope.publicaciones_cerradas_total = [];
      var promesa = gQueryService.sql({
        name:'sp_mispublicaciones_devolver',
        datos: sessionStorage.getItem("gId") + "|" + 2
      });
    
      promesa.then(function(msg){
        $scope.CargarCerradas = false;
        if(msg.data!="null"){
          $scope.publicaciones_cerradas_total = msg.data;
          $scope.PagCerradas.Cambiar();
        }else{      
          $scope.publicaciones_cerradas_total  = [];
          $scope.PagCerradas.Cambiar();
        }
      });
    }
  

}]);

app.controller('calificarVentaCtrl', function ($scope, $uibModalInstance, items) {
  $scope.Pregunta = items.Pregunta;
  $scope.Id = items.Id;
  // console.log(items);
  $scope.Cancelar = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.Registrar = function(){    
    $uibModalInstance.close({
      EstadoVenta   : $scope.EstadoCompraVendedor,
      Calificacion  : $scope.CalificaVendedor,
      Comentario    : $scope.comentarioVendedor,
      EstadoPub     : $scope.EstadoPublicacion
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