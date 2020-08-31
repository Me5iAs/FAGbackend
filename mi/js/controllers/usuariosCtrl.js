'use strict';
app.controller('usuariosCtrl', ['$scope', 'gQueryService', '$location','$uibModal', '$http','gSessionService','$timeout', function($scope, gQueryService, $location,$uibModal,$http, gSessionService,$timeout){

  //iniciales
    $scope.LogIn = false;
    $scope.UsuarioLogueado = "";
    $scope.Dir = "";
    var c =0;

  // NSU: revocar permisos
    $scope.Revocar = function() {
      if(window.FB){
        window.FB.getLoginStatus(function(response){
          if(response.status ==='connected'){
            var UserId = response.authResponse.userID;
            
            FB.api('/me/permissions'
                  , 'DELETE', function(response){
                    location.reload();
                  });
          }
        });
      }

    };

  // SU: Registrar
    var Registrar = function(){
      if(window.FB){
        window.FB.getLoginStatus(function(response){
          if(response.status ==='connected'){
            var token =window.FB.getAccessToken();
            var promesa = $http.get('https://graph.facebook.com/v2.8/me?fields=id,name,first_name,last_name,gender,email&access_token='+token);
            promesa.then(function(msg){
              var promesa2 = gQueryService.sql({
                  name:'fn_usuario_registrar', 
                  datos:    msg.data.id + '|' + 
                            msg.data.name + '|' + 
                            msg.data.first_name + '|' + 
                            msg.data.last_name + '|' + 
                            msg.data.gender + '|' + 
                            msg.data.email
              });
              promesa2.then(
                function(msg2){
                  // console.log("registro realizado, inicia registro de session| id:" + msg2.data.resultado);
                  sessionStorage.setItem("gUsuario", msg.data.name);
                  sessionStorage.setItem("gId", msg2.data.resultado);
                  sessionStorage.setItem("fId", msg.data.id);
                  location.reload();
                  $scope.LogIn = true;          
                  $scope.UsuarioLogueado = sessionStorage.getItem("gUsuario");
                  $scope.Dir = "http://graph.facebook.com/"+sessionStorage.getItem("fId")+"/picture?type=small";          
                }
              );              
            })
          }
        })
      }else{        
          setTimeout(function(){Registrar()},1000);
      }      
    }

  // SU: Verificar session
    if(sessionStorage.getItem("reg")){
      sessionStorage.removeItem("reg");
      Registrar();
    }else{      
      if(!sessionStorage.getItem("gUsuario")){
        $scope.LogIn = false;
        $scope.UsuarioLogueado = "";
        $scope.Dir = "";  
      }else{
        $scope.LogIn = true;          
        $scope.UsuarioLogueado = sessionStorage.getItem("gUsuario");
        $scope.Dir = "http://graph.facebook.com/"+sessionStorage.getItem("fId")+"/picture?type=small";          
      }
    }

  // NSU: enviar notificaciones a FB
    $scope.Probar = function(){
      if(window.FB){
        window.FB.getLoginStatus(function(response){
          if(response.status ==='connected'){
            var UserId = response.authResponse.userID;
            var vToken = window.ai + "|" + window.cs;
            FB.api('/'+UserId+'/notifications?'+
                              'access_token='+vToken+'&' +
                              'href=tipo:preguntas-Id:123&' +
                              'template='+response.authResponse.name+', alguien ha realizado una pregunta sobre tu producto!'
                  , 'post', function(response){
                    console.log(response);
                  });
          }
        });
      }
      
    }

    // ingresar ?
    $scope.Ingresar = function(){
      if(window.FB){     
        window.FB.getLoginStatus(function(response){
          if(response.status ==='connected'){
            var promesa = gQueryService.sql({
              name    :   'sp_usuario', 
              datos   :   response.authResponse.userID
            });

            promesa.then(function(msg){
              sessionStorage.setItem("gUsuario", msg.data[0].Usuario);
              sessionStorage.setItem("gId", msg.data[0].Id);
              sessionStorage.setItem("fId", response.authResponse.userID);
              $scope.LogIn = true;
              $scope.UsuarioLogueado = msg.data[0].Usuario;
              $scope.Dir = "http://graph.facebook.com/"+sessionStorage.getItem("fId")+"/picture?type=small";
            });            
          }else{

            // location.href='https://www.facebook.com/v2.8/dialog/oauth?client_id=220550398321588&scope=email,public_profile&redirect_uri=http://localhost/log.php';
          }
        });
      }else{
        setTimeout(Ingresar,1000);
      }
    }

  //  SU: acceder
    $scope.Acceder = function(size){
      var VentanaLogIn = $uibModal.open({
        animation: true,
        templateUrl: 'templates/tpl_registrar.html',
        controller: 'loginCtrl',
        size: "size",
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      VentanaLogIn.result.then(
        // ok
        function (){         
          Registrar();
          // location.reload();
        }, 
        // cancelar
        function () {});
    };  

  // SU:CerrarSesión
    $scope.CerrarSesion = function(){
      sessionStorage.removeItem("gUsuario");
      sessionStorage.removeItem("gId");
      sessionStorage.removeItem("fId");
      $scope.LogIn = false;
      $scope.UsuarioLogueado = "";
      $scope.Dir = "";
      location.reload();
    }


  // Actualizar
    // Cargar Datos
      if($location.path()=='/mis_datos'){
        $scope.fId = sessionStorage.fId;
        var promesa = gQueryService.sql({
          name:'sp_misdatos_devolver',
          datos: sessionStorage.getItem("gId")
        });
        
        promesa.then(function(msg){
          if(msg.data!="null"){ 
            $scope.Datos = msg.data[0];           
            CargarReputacion();
          }else{      
            $scope.Datos= {};          
          }
        });
      }

      $scope.Actualizar = function(vCampo, vValor){
        var DatosAct = {
          campo : vCampo,
          valor : vValor
        }
        var VentanaActualizar = $uibModal.open({
          animation: true,
          templateUrl: 'templates/tpl_actualizar_usuario.html',
          controller: 'ActualizarUsuarioCtrl',        
          resolve: {
            items: function () {
              // return $scope.items;
              return DatosAct;
            }
          }
        });

        VentanaActualizar.result.then(
          // ok
          function (result){
            if(result.Campo == "Email"){
              $scope.Datos.Email = result.Dato;
            }
            if(result.Campo == "Telefono"){
              $scope.Datos.Telefono = result.Dato;
            }
            if(result.Campo == "Dirección"){
              $scope.Datos.Direccion = result.Dato;
            }

            // console.log(result);
            // $scope.LogIn = true;
            // $scope.UsuarioLogueado = sessionStorage.getItem("gUsuario");
            // location.reload();
          }, 
          // cancelar
          function () {});
      };  
  
  // Datos
    var CargarReputacion = function(){
       var promesa = gQueryService.sql({
          name:'sp_usuario_reputacion',
          datos: sessionStorage.getItem("gId")
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

            $scope.rating.Negativo = 100 - ($scope.rating.Positivo + $scope.rating.Neutro);
            console.log($scope.rating);

          }else{      
            $scope.Datos= {};          
          }
        });
    }

  // Ver Detalle de calificación
    $scope.VerDetalles = function(){
      location.href='/#/ver_calf/' + sessionStorage.getItem("gId");
    }

}]);

app.controller('loginCtrl', function ($scope, $uibModalInstance, items,gQueryService, gSessionService) {

  $scope.cargando = false;

  $scope.Cancelar = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.AccederConFB = function(){
    $scope.cargando = true;
    if(window.FB){     
      window.FB.getLoginStatus(function(response){
        if(response.status ==='connected'){         
          $uibModalInstance.close();
        }else{
          sessionStorage.setItem("LastPage", location.href);
          location.href='https://www.facebook.com/v2.8/dialog/oauth?client_id=220550398321588&scope=email,public_profile&redirect_uri=http://localhost/log.php';
        }
      });
    }else{
      setTimeout($scope.AccederConFB(),1000);
    }
  }
});


app.controller('ActualizarUsuarioCtrl', function ($scope, $uibModalInstance, items,gQueryService) {

  // console.log(items);
  if(items.campo != "Clave"){
    $scope.Clave = false;
  }else{
    $scope.Clave = true;
  }
  // console.log($scope.Clave);
  $scope.Campo = items.campo;
  $scope.Dato = items.valor;

  $scope.Actualizar = function(){
    if($scope.NuevoDato == "" || $scope.NuevoDato == "null" || $scope.NuevoDato == "undefined" || $scope.NuevoDato == undefined){
      alert("ingrese el nuevo dato a actualizar");
      return;
    }

    var promesa = gQueryService.sql({
      name:'fn_dato_usuario_actualizar', 
      datos:  $scope.Campo + "|" + 
              $scope.NuevoDato + "|" + 
              sessionStorage.getItem("gId")
    });

    promesa.then(function(msg){
      // console.log(msg.data);
      if (!msg.data.resultado || msg.data.resultado==0){
        alert("ha ocurrido un error al actualizar el dato");
      }else{
        $uibModalInstance.close({Campo: $scope.Campo, Dato: $scope.NuevoDato});
      }
    });
  }
  $scope.Cancelar = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.Registrar = function(){


  }
});

