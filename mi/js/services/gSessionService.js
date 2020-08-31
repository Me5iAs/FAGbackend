'use strict';
app.factory('gSessionService', ['$rootScope','$http', 'gQueryService', function($rootScope,$http,gQueryService){
  var c = 0;

  var getFacebookData = function(){
    var auth =  FB.getAuthResponse();    
    var promesa = $http.get('https://graph.facebook.com/v2.6/me?fields=id%2Cname%2Cbirthday%2Cemail&access_token='+auth.accessToken);
    promesa.then(
      function(msg){
        var response = msg.data;
        // console.log("login");
        $rootScope.FBLogged = true;
        $rootScope.FBUsuario = response.name;
        $rootScope.FBCodUser = response.id;
        $rootScope.FBEmail = response.email;
        $rootScope.FBEmail = auth.accessToken;
        sessionStorage.setItem('FBUsuario',response.name);
        sessionStorage.setItem('FBCodUser',response.id);
        sessionStorage.setItem('FBEmail',response.email);
        sessionStorage.setItem('accessToken',auth.accessToken);
        var promesa = gQueryService.sql({name:'fn_usuario_registrar', datos:response.id+"|"+ response.name+"|"+ response.email });
        promesa.then();  

        // $rootScope.$apply();
      }
    // var UserId = "123456xxxxxxx";
    // var vToken = "0987654321xxxx";
    // FB.api('/'+UserId+'/notifications?'+
    //                   'access_token=vToken&' +
    //                   'href=miweb.com/comprasId=123&' +
    //                   'template=hello world!'
    //       , 'post');

    )
  };

  var ErrorLogin = function(){
    console.log("error login");
      $rootScope.FBLogged =false;
      $rootScope.FBUsuario ='';
      $rootScope.FBCodUser ='';
      $rootScope.FBEmail ='';
      sessionStorage.removeItem('FBUsuario');
      sessionStorage.removeItem('FBCodUser');
      sessionStorage.removeItem('FBEmail');
      // $rootScope.$apply();   
  }

    return {
      
      Registrar:function(datos){

      },

      logueado: function(logged){
        if (window.FB){
          window.FB.getLoginStatus(function(response){
            if(response.status ==='connected'){
              getFacebookData();
            }else{
              ErrorLogin();
            }
          });
        }
      },

      logIn: function(){
        window.FB.getLoginStatus(function(data) {
          if (data.status !== 'connected') {
            window.FB.login(function(response) {
              if (response.status === 'connected'){
                getFacebookData();
              }else{
                 ErrorLogin();
              }                        
            }, {scope: 'public_profile,user_friends,email'});
          }else{
             getFacebookData();
          }
        })
      },

      logOut: function(){
         window.FB.logout(function(response){
          ErrorLogin();
          $rootScope.$apply();
         });
      }
    } 
      // Notificar: function(id){

      // var parametros = JSON.stringify(
      //   notif_ids: id,
      //   ref: "www.pachasyserrano.com",
      //   template: "hola prueba",
      // );
      // $http.post(url, parameter).
      // success(function(data, status, headers, config) {
      //   // this callback will be called asynchronously
      //   // when the response is available
      //   console.log(data);
      // }).
      // error(function(data, status, headers, config) {
      //   // called asynchronously if an error occurs
      //   // or server returns response with an error status.
      // });



      //   var promesa = $http.post('https://graph.facebook.com/v2.6/'+id+'/notifications?href=www.pachasyserrano.com&template=hola&access_token='+sessionStorage.getItem('accessToken'));
      //   // var promesa = $http.post('../../backend/notificacionFB.php', {user:id, message:"mensaje"});
      //   promesa.then(
      //     function(msg){
      //       console.log(msg.data);
      //     }
      //   )
      // },
      // Notificar: function(id){

        // var promesa = $http.post /{recipient_userid}/notifications?access_token= … &amp;template= … &amp;href= …
        // var promesa = $http.post('https://graph.facebook.com/v2.6/'+id+'/notifications?href=www.pachasyserrano.com&template=hola&access_token='+sessionStorage.getItem('accessToken'));        ;
        // var promesa = $http.post('../../backend/notificacionFB.php', {user:id, message:"mensaje"});
      //   promesa.then(
      //     function(msg){
      //       console.log(msg.data);
      //     }
      //   )
      // }

    // };
}])
