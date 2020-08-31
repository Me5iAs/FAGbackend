app.directive('gTabla', ['$timeout','$filter', function($timeout,$filter) {
  // Runs during compile
  'use strict';
  return {
    restrict: 'E',    
    scope: false,    
    templateUrl: '../../partials/gTabla.tpl.html',
    link: function($scope, iElm, iAttrs, controller){

      //funcionalidad:
      // cambio
      // Sólo requiere tener un json con esta estructura en el ScopePadre:

      // API

      // Está dividido en 2 partes: la Data, y el Filtro
      // Data:
      //   Filaclick: cuando está declarado no funciona "opciones" ejecuta la funcion cuando se da click en la fila, devuelve un array con todos los datos de la fila, es opcional
      //   Opciones: Crea columnas complementarias a la data, ejecuta funcion al hacer click, y muestra descripcion, la funcion recibe como parámetro un array con todos los datos de la fila, es opcional.
      //   Columnas: Se definen los nombres de las columnas a utilizar, ES REQUERIDO
      //   Valores: se definen los valores, es un array multidimensional, deben tener las mismas columnas que "columnas" es REQUERIDO
      //   Paginacion: Permite configurar cuantas filas por página debe mostrarse (FilasPag por defecto 5), Cual es la página inicialmente seleccionada (Inicial por defecto 1), y la cantidad de "items" de paginación se mostrará (por defecto 3), es opcional toda la pagionacion o alguno de sus items.

      //   Filtro:
      //     Permite especificar si se usara filtro o no, es opcional y los posibles valores son true y false


      // $scope.gTabla = {
      //   Data: {
      //     FilaClick: function(data){alert("fila presionada")}, 
      //     Opciones: [
      //           {
      //             funcion : function(data){console.log(data);},
      //             Valor   : 'Op1',
      //             Icono   : 'glyphicon glyphicon-star',
      //             Descrip : 'Descripcion de opcion 1'
      //           },
      //           {
      //             funcion : function(data){console.log(data);},
      //             Valor   : 'Op2',
      //             Icono   : 'glyphicon glyphicon-user',
      //             Descrip : 'Descripcion de opcion 2'
      //           }
      //     ],
      //     Columnas: ['col1', 'col2', 'col3'],
      //     Valores: [
      //           ['val1.1', 'val1.2', 'val1.3'],
      //           ['val2.1', 'val2.2', 'val2.3'],
      //           ['val3.1', 'val3.2', 'val3.3'],
      //           ['val4.1', 'val4.2', 'val4.3'],
      //           ['val5.1', 'val5.2', 'val5.3'],
      //           ['val6.1', 'val6.2', 'val6.3'],
      //           ['val7.1', 'val7.2', 'val7.3'],
      //           ['val8.1', 'val8.2', 'val8.3'],
      //           ['val9.1', 'val9.2', 'val9.3'],
      //           ['val10.1', 'val10.2', 'val10.3'],
      //           ['val11.1', 'Giovanni', 'val11.3'],
      //           ['val12.1', 'val12.2', 'val12.3'],
      //           ['val13.1', 'val13.2', 'val13.3'],
      //           ['val14.1', 'val14.2', 'val14.3']
      //     ],
      //     Paginacion: {
      //       FilasPag : 5,
      //       Inicial: 1,
      //       Vistas: 3
      //     }
      //   },
      //   Filtro: true
      // }


      $scope.Data = $scope.gTabla.Data;
      if($scope.gTabla.Filtro==undefined){
        $scope.Filtro = {
          Mostrar:false,
          Filtrando : false
        }  
      }else{
        $scope.Filtro = {
          Mostrar:$scope.gTabla.Filtro,
          Filtrando : false
        }
      }

      $scope.FiltrarData = function(){
        $scope.Filtro.Filtrando = true;
        var d = [];
        var s = [];
        angular.copy($scope.Data.Valores, d);        
        s = $filter('filter')(d, $scope.txtFiltro);
        $scope.pag.TotalFilas = s.length;
        $scope.DataFil = s.splice(0, $scope.pag.filasPag);
      }

      $scope.Quitarfiltro = function(){
        $scope.Filtro.Filtrando = false;
        var d = [];
        angular.copy($scope.Data.Valores, d);
        $scope.DataFil = d.splice(0,$scope.pag.filasPag);
        $scope.pag.TotalFilas = $scope.Data.Valores.length;
        $scope.pag.filasPag =  $scope.Data.Paginacion.FilasPag || 5
        $scope.pag.Actual = $scope.Data.Paginacion.Inicial || 1;
        $scope.pag.Vista =  $scope.Data.Paginacion.Vistas || 3;
        $scope.txtFiltro = '';
      }

      //paginacion
      $scope.pag = {};
      $scope.pag.TotalFilas = $scope.Data.Valores.length;
      if ($scope.Data.Paginacion != undefined){
        $scope.pag.filasPag = $scope.Data.Paginacion.FilasPag || 5;
        $scope.pag.Actual = $scope.Data.Paginacion.Inicial || 1;
        $scope.pag.Vista = $scope.Data.Paginacion.Vistas || 3;
      }else{
        $scope.pag.filasPag = 5;
        $scope.pag.Actual = 1;
        $scope.pag.Vista = 3;
      }
      
      
      var d = [];
      angular.copy($scope.Data.Valores, d);
      var IniActual =(($scope.pag.Actual-1)*$scope.pag.filasPag);
      $scope.DataFil = d.splice(IniActual,$scope.pag.filasPag);

      $scope.pageChanged = function() {  
        if ($scope.Filtro.Filtrando == false){
          var dat = [];
          angular.copy($scope.Data.Valores, dat);        
          var IniActual =(($scope.pag.Actual-1)*$scope.pag.filasPag);
          $scope.DataFil = dat.splice(IniActual, $scope.pag.filasPag);  
        }else{
          var d = [];
          var s = [];
          angular.copy($scope.Data.Valores, d);        
          s = $filter('filter')(d, $scope.txtFiltro);
          $scope.pag.TotalFilas = s.length;
          var IniActual =(($scope.pag.Actual-1)*$scope.pag.filasPag);
          $scope.DataFil = s.splice(IniActual, $scope.pag.filasPag);
        }
      };      
      $scope.$watch('Data.Valores', function(){        
         var d = [];         
        angular.copy($scope.Data.Valores, d);
        var IniActual =(($scope.pag.Actual-1)*$scope.pag.filasPag);
        $scope.DataFil = d.splice(IniActual,$scope.pag.filasPag);

        $scope.pag = {};
        $scope.pag.TotalFilas = $scope.Data.Valores.length;
        if ($scope.Data.Paginacion != undefined){
          $scope.pag.filasPag = $scope.Data.Paginacion.FilasPag || 5;
          $scope.pag.Actual = $scope.Data.Paginacion.Inicial || 1;
          $scope.pag.Vista = $scope.Data.Paginacion.Vistas || 3;
        }else{
          $scope.pag.filasPag = 5;
          $scope.pag.Actual = 1;
          $scope.pag.Vista = 3;
        }
      });
    }
  };
}]);