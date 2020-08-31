app.controller('comprarCtrl', ['$scope', '$routeParams', 'gQueryService','$http','$uibModal', function($scope, $routeParams, gQueryService,$http,$uibModal){

  $scope.Titulo = $routeParams.Titulo;

//carrusel
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  var promesa = $http.post('backend/gImagenes.php?id='+$routeParams.IdPub);
  promesa.then(function(msg){
    for(var x = 1; x<=msg.data; x++){
      slides.push({
        image: 'img/Publicaciones/'+$routeParams.IdPub+'/'+x,
        text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
        id: currIndex++
      })
    }
  });

  $scope.Preguntas =[];
  var promesa = gQueryService.sql({
    name:'sp_publicacion_devolver_vendedor',
    datos: $routeParams.IdPub
  });
  $scope.datos = {};
  promesa.then(function(msg){
    if(msg.data!="null"){
      $scope.datos = msg.data[0];
    }else{      
      $scope.datos = {};
    }
  });
}]);
