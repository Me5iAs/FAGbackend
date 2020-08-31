'use strict';

app.controller('homeCtrl', ['$scope', 'gQueryService', '$location', function($scope,gQueryService, $location){

  // Cargar Categorias
    $scope.criterio = "";
    $scope.Categorias =[];
    var promesa = gQueryService.sql({
      name:'sp_categorias_devolver'      
    });

    promesa.then(function(msg){      
      if(msg.data!="null"){        
        for (var x = 0; x<msg.data.length; x++){
          $scope.Categorias.push({
            Id          :   msg.data[x].Id,
            Categoria   :   msg.data[x].Categoria,
            Descripcion :   msg.data[x].Descripcion
          });
        }
      }else{      
        $scope.Categorias  = [];
      }
    });

  
  // Encontrar
    $scope.Encontrar = function(a){   
      var x = setTimeout('',100000); 
      for (var i = 0; i <= x; i++){
          clearTimeout(i);    
      }         
      location.href="#/search/Cat=0&Est=0&Min=0&Max=0&Key="+a+"&Ord=1";
    }
       



}])