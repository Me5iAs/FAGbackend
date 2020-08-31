app.controller('resultadosCtrl', ['$scope', '$routeParams', 'gQueryService','$http','$uibModal', '$location', function($scope, $routeParams, gQueryService,$http,$uibModal, $location){

  $scope.Publicacion ={};
  $scope.MiPublicacion  = false;
  
  // $scope.MostrarPublicacion =false;

// Cargar Publicacion
 
  var promesa = gQueryService.sql({
    name:'sp_publicacion_devolver',
    datos: $routeParams.IdPub      
  });
  
  promesa.then(function(msg){
    if(msg.data!="null"){ 
      $scope.Publicacion = msg.data[0];   
      $scope.MostrarPublicacion =true;
      if($scope.Publicacion.IdUsuario == sessionStorage.getItem("gId")){
        $scope.MiPublicacion = true;
      }else{
        $scope.MiPublicacion = false;
      }
    }else{      
      $scope.MostrarPublicacion =false;
      $scope.Publicacion   = {};
    }
  });

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
        image: 'img/publicaciones/'+$routeParams.IdPub+'/'+x,
        text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
        id: currIndex++
      })
    }
  });

  $scope.fullS = function(a){
    alert("A");
    console.log(a);
  }

// Preguntas
  
  $scope.Preguntas =[];
  var promesa = gQueryService.sql({
    name:'sp_preguntas_devolver',
    datos: $routeParams.IdPub      
  });
  
  promesa.then(function(msg){
    if(msg.data!="null"){        
      for (var x = 0; x<msg.data.length; x++){
        $scope.Preguntas.push({
          IdPregunta  :   msg.data[x].Id,
          Pregunta    :   msg.data[x].Pregunta,
          Respuesta   :   msg.data[x].Respuesta
        });
      }
    }else{      
      $scope.Preguntas  = [];
    }
  });

// respuestas

  $scope.Responder = function(Id, Pregunta){
    $scope.items = {
      Id: Id,
      Pregunta: Pregunta
    };
    
    var VentanaRespuesta = $uibModal.open({
      animation: true,
      templateUrl: 'templates/tpl_responder.html',
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
            for (var x = 0; x<$scope.Preguntas.length; x++){
              if($scope.Preguntas[x].IdPregunta == resp.Id){
                // console.log(msg.data);
                $scope.Preguntas[x].Respuesta = resp.Respuesta;
              }
            }
          }
        });
      }, 
      // cancelar
      function () {});
  };

// borrar Pregunta
  $scope.Borrar = function(rId){
    var promesa = gQueryService.sql({
      name:'fn_pregunta_borrar',
      datos: rId
    });

    promesa.then(function(msg){
      if(msg.data.resultado ==1){              
        for (var x = 0; x<$scope.Preguntas.length; x++){
          if($scope.Preguntas[x].IdPregunta == rId){            
            $scope.Preguntas.splice(x,1);
          }
        }
      }
    });
  };

// Preguntar
  $scope.Preguntar = function(){
    if(sessionStorage.getItem("gUsuario")=="null" || sessionStorage.getItem("gUsuario")== null){
      alert("Inicia sesión para poder hacer preguntas");
      return;
    }
    
    if($scope.pregunta=="" || $scope.pregunta =="null" || $scope.pregunta ==undefined){
      alert("escriba la pregunta");
      return false;
    }

    var promesa = gQueryService.sql({
      name:'fn_pregunta_registrar',
      datos: $scope.pregunta+"|"+$routeParams.IdPub
    });
    
    promesa.then(function(msg){
      $scope.Preguntas.push({
        IdPregunta  :   msg.data.resultado,
        Pregunta    :   $scope.pregunta,
        Respuesta   :   ""
      });
      $scope.pregunta = "";
      alert("Pregunta registrada con éxito");
    });
  }

// Vendido
  $scope.Vendido = function(){
    var respu = confirm("Esta acción marcará su publicación como vendida y ya no se mostrará a los potenciales compradores. \n ¿desea continuar?");
    if(respu == false){
      return;
    }
    var promesa = gQueryService.sql({
      name:'fn_publicacion_vender',
      datos: $routeParams.IdPub
    });
    
    promesa.then(function(msg){
      alert("La publicacion ha sido marcada como vendida");
      location.href="#/home";
    });

  }

// Comprar
  $scope.Comprar = function(){
    if(sessionStorage.getItem("gUsuario")=="null" || sessionStorage.getItem("gUsuario")== null){
      alert("Inicia sesión para poder comprar");
      return;
    }
    var c = confirm("Esta acción registrará tu compra, por favor sólo continúa si realmente deseas comprar el producto \n \n ¿Desea Continuar?");
    if (c==false){
      return;
    }
    var promesa = gQueryService.sql({
      name:'fn_publicacion_comprar',
      datos: $routeParams.IdPub + "|" + sessionStorage.getItem("gId")
    });
    
    promesa.then(function(msg){
      cadena = $scope.Publicacion.Titulo.replace(/\//g,"_");
      $location.path("/comprar/" + $routeParams.IdPub + "/" +cadena);
    });

    
    // location.href="#/comprar/" + $routeParams.IdPub 

    // falta rgistrar compra (no desaparece, pero se registra quehay una compra y sume su contador)
  }


}]);


app.controller('respuestaCtrl', function ($scope, $uibModalInstance, items) {
  $scope.Pregunta = items.Pregunta;
  $scope.Id = items.Id;
  // console.log(items);
  $scope.Cancelar = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.Registrar = function(){    
    $uibModalInstance.close({Respuesta:$scope.Respuesta, Id:$scope.Id});
  };
});
