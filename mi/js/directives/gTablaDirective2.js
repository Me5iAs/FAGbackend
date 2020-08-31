app.directive('gTabla', ['$timeout','$filter', function($timeout,$filter) {
  // Runs during compile
  'use strict';
  return {
    restrict: 'E',    
    scope: false,    
    templateUrl: '../../partials/gTabla.tpl.html',
    link: function($scope, iElm, iAttrs, controller){

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