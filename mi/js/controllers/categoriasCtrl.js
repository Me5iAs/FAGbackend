app.controller('categoriasCtrl', ['$scope', '$routeParams', 'gQueryService','$http','$uibModal', function($scope, $routeParams, gQueryService,$http,$uibModal){

$scope.Categorias =[];
    var promesa = gQueryService.sql({
      name:'sp_categorias_devolver'      
    });
  
    promesa.then(function(msg){
      if(msg.data!="null"){        
        for (var x = 0; x<msg.data.length; x++){
          $scope.Categorias.push({
            Id          :   msg.data[x].Id,
            Categoria   :   msg.data[x].Categoria
          });
        }
      }else{      
        $scope.Categorias  = [];
      }
    });

}])