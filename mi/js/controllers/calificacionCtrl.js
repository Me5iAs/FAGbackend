app.controller('calificacionCtrl', ['$scope', '$routeParams', 'gQueryService','$http','$uibModal', function($scope, $routeParams, gQueryService,$http,$uibModal){

  // variables
    $scope.Todos = [];
    $scope.Activos = [];

    $scope.Datos = {
      Usuario : "",      
      FbId : "",
      Positivos: 0,
      Negativos: 0,
      Neutrales: 0,
      Totales: 0,
      pPos:0,
      pNeg:0,
      pNeu:0, 
      Actual: "Todas"
    }

  // CargarArray
  $scope.CargarArray = function(tipo){
    $scope.Activos = [];
  
    for(var x = 0; x<= $scope.Todos.length-1; x++){
      if(tipo==0){
        $scope.Activos.push($scope.Todos[x]);
        $scope.Datos.Actual= "Todas";
      }else if(tipo==1 && $scope.Todos[x].Calificacion == "Positivo"){
        $scope.Activos.push($scope.Todos[x]);
        $scope.Datos.Actual= "Positivas";
      }else if(tipo==2 && $scope.Todos[x].Calificacion == "Neutral"){
        $scope.Activos.push($scope.Todos[x]);
        $scope.Datos.Actual= "Neutrales";
      }else if(tipo==3 && $scope.Todos[x].Calificacion == "Negativo"){
        $scope.Activos.push($scope.Todos[x]);
        $scope.Datos.Actual= "Negativas";
      }
    }
  }
  var ObtenerDatos = function(){  
    // obtener datos de calificacino
      var promesa = gQueryService.sql({
        name:'sp_usuario_reputacion_detalle',
        datos: $routeParams.IdUsuario
      });
    
      promesa.then(function(msg){
        if(msg.data!="null"){
          // llenar arrays
            for(var x =0; x <=msg.data.length-1; x++){

              // agregar a todos, pero sin incluir el nombre y el codigo, eso es aparte
                $scope.Datos.Totales = $scope.Datos.Totales+1;
                $scope.Todos.push(msg.data[x]);
              // llenar cantidades
                if(msg.data[x].Calificacion == "Negativo"){
                  $scope.Datos.Negativos = $scope.Datos.Negativos+1;
                  
                }else if(msg.data[x].Calificacion == "Neutral"){
                  $scope.Datos.Neutrales = $scope.Datos.Neutrales+1;

                }else if(msg.data[x].Calificacion == "Positivo"){
                 $scope.Datos.Positivos = $scope.Datos.Positivos+1;
                }
            }

          // llenar datos        
            $scope.Datos.Usuario= msg.data[0].Vendedor;            
            $scope.Datos.FbId= msg.data[0].VendedorFbCod;            
            $scope.Datos.pNeg= Math.round(($scope.Datos.Negativos/$scope.Datos.Totales)*100,0);
            $scope.Datos.pNeu= Math.round(($scope.Datos.Neutrales/$scope.Datos.Totales)*100,0);
            $scope.Datos.pPos= 100 - $scope.Datos.pNeg - $scope.Datos.pNeu;

            $scope.CargarArray(0);
          
        }else{      
          $scope.datos = {};
        }
      }); 
  }
  ObtenerDatos();
  
}])