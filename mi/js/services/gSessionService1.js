'use strict';
app.factory('gSessionService', ['$http','$location', function($http,$location){
    var bLogin;

    return {
        //data tiene user, pass
        setLogin: function(v){
          bLogin = v;
        },
        getLogin: function(){
          return bLogin;
        },

        login: function(data){
            data.a ='set';
            var promesa = $http.post('backend/gSesion.php', data);            
            return promesa;         
        },        
        
        logged: function(){
            // var promesa = $http.post('backend/gSesion.php', {'a':'get'});
            // return promesa;
            // sessionStorage.removeItem('s1');
            // sessionStorage.removeItem('s2');
            // sessionStorage.removeItem('s3');
            // sessionStorage.removeItem('s4');
            // sessionStorage.removeItem('s5');

            if (sessionStorage.getItem('s1')){
                return true;
            }else{
                return false;
            }
        },

        datosSession: function(){
            return {
                Id          : sessionStorage.getItem('s1'),
                IdPersona   : sessionStorage.getItem('s2'),
                Nombre      : sessionStorage.getItem('s3'),
                Apellidos   : sessionStorage.getItem('s4'),
                Opciones    : sessionStorage.getItem('s5')
            }
            // sessionStorage.setItem('sId',msg.data.sId);
            // sessionStorage.setItem('sIdPersona', msg.data.sIdPersona);
            // sessionStorage.setItem('sUsuario', msg.data.sUsuario);
            // sessionStorage.setItem('sIdPerfil', msg.data.sIdPerfil);
        },

        menu: function(){
            var promesa = $http.post('backend/gSesion.php', {'a':'opc'});
            return promesa;
        },

        logout: function(){
            var promesa = $http.post('backend/gSesion.php', {'a':'del'});
            promesa.then(function(msg){
                sessionStorage.removeItem('s1');
                sessionStorage.removeItem('s2');
                sessionStorage.removeItem('s3');
                sessionStorage.removeItem('s4');
                sessionStorage.removeItem('s5');

                $location.path('/');
            })
        }
        
    };
}])
