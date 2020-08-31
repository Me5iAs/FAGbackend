'use strict';

app.controller('usuariosCtrl', ['$scope', 'gQueryService', '$location','$uibModal' 'gSessionService', function($scope, gQueryService, $location,$uibModal,gSessionService){

  // inicial
    $scope.LogIn = false;
    $scope.UsuarioLogueado = "";

  // verificar si está logueado
    if(sessionStorage.getItem("gUsuario")=="null" || sessionStorage.getItem("gUsuario")== null){
      $scope.LogIn = false;
    }else{
      $scope.LogIn = true;
      $scope.UsuarioLogueado = sessionStorage.getItem("gUsuario");
    }  

  // Cerrar Sesion
    $scope.CerrarSesion = function(){
      sessionStorage.removeItem("gUsuario");
      sessionStorage.removeItem("gId");
      $scope.LogIn = false;
      $scope.UsuarioLogueado = "";
      location.reload();
    }

  // Ingresar
    $scope.Ingresar = function(size){
      var VentanaLogIn = $uibModal.open({
        animation: true,
        templateUrl: 'templates/tpl_logIn.html',
        controller: 'loginCtrl',
        size: "sm",
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      VentanaLogIn.result.then(
        // ok
        function (){
          $scope.LogIn = true;
          $scope.UsuarioLogueado = sessionStorage.getItem("gUsuario");
          // location.href="/"
          // $location.path("/home");
          location.reload();          
        }, 
        // cancelar
        function () {});
    };

  // registrar
    $scope.Registrar = function(size){
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
          $scope.LogIn = true;
          $scope.UsuarioLogueado = sessionStorage.getItem("gUsuario");
          location.reload();
        }, 
        // cancelar
        function () {});
    };  

  // Actualizar
    // Cargar Datos
      var promesa = gQueryService.sql({
        name:'sp_misdatos_devolver',
        datos: sessionStorage.getItem("gId")
      });
      
      // var $scope.Datos = {};
      
      promesa.then(function(msg){
        if(msg.data!="null"){ 
          $scope.Datos = msg.data[0];           
        }else{      
          $scope.Datos= {};          
        }
      });

      // actualizar
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
            if(result.Campo == "Direccion"){
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
  
  // Ver Detalle de calificación
  $scope.VerDetalles = function(){
    location.href='/#/ver_calf/' + sessionStorage.getItem("gId");
  }
}])


app.controller('loginCtrl', function ($scope, $uibModalInstance, items,gQueryService, gSessionService) {

  $scope.Iniciar = function () {

    var promesa = gQueryService.sql({
      name:'sp_usuario_existe', 
      datos:  $scope.Usuario + "|" + $scope.Clave
    });

    promesa.then(function(msg){
      if(msg.data =="null"){
        alert("Usurio/Clave incorrectos");        
      }else{
        // console.log(msg.data);
        sessionStorage.setItem("gUsuario", msg.data[0].usuario);
        sessionStorage.setItem("gId", msg.data[0].id);
        $uibModalInstance.close();
      }
    });
  };

  $scope.Cancelar = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.RegistrarConFB = function(){
    gSessionService.logIn();
    
  }
  $scope.Registrar = function(){
    var promesa = gQueryService.sql({
      name:'fn_usuario_registrar', 
      datos:  $scope.Nombre + "|" + 
              $scope.Direccion + "|" + 
              $scope.Telefono + "|" +               
              $scope.Usuario + "|" + 
              $scope.Clave + "|" + 
              $scope.Email
    });

    promesa.then(function(msg){
      // console.log(msg.data);
      if (!msg.data.resultado || msg.data.resultado==0){
        alert("El usuario/nombre ya se encuentra registrado");
      }else{
        // console.log(msg.data);
        sessionStorage.setItem("gUsuario", $scope.Usuario);
        sessionStorage.setItem("gId", msg.data.resultado);
        $uibModalInstance.close();
      }
    });

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
        // console.log(msg.data); 

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


