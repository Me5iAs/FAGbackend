'use strict';
/**
* PapiroApp Module
*
* Description
*/
var app = angular.module('miapp', [
'ngRoute',
'ngAnimate',
'ngSanitize',
'angularFileUpload',
'ui.bootstrap',
'angularFileUpload',
'nvd3'
  ]);

// configurar router
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.    
    when('/home',{templateUrl:'views/home.html', controller:'homeCtrl'}).
    when('/reg_pub',{templateUrl:'views/reg_publicacion.html', controller:'publicacionCtrl'}).
    when('/fin_pub',{templateUrl:'views/fin_publicacion.html', controller:'publicacionCtrl'}).
    when('/ver_pub/:IdPub',{templateUrl:'views/ver_publicacion.html', controller:'resultadosCtrl'}).
    when('/comprar/:IdPub/:Titulo',{templateUrl:'views/comprar.html', controller:'comprarCtrl'}).
    when('/mis_datos',{templateUrl:'views/datos.html', controller:'usuariosCtrl'}).
    when('/mis_ventas',{templateUrl:'views/mis_ventas.html', controller:'ventasCtrl'}).
    when('/mis_compras',{templateUrl:'views/mis_compras.html', controller:'comprasCtrl'}).
    when('/ver_cat',{templateUrl:'views/ver_categorias.html', controller:'categoriasCtrl'}).
    when('/log/:result',{templateUrl:'views/log.html', controller:'logCtrl'}).
    when('/ver_calf/:IdUsuario',{templateUrl:'views/ver_calif.html', controller:'calificacionCtrl'}).
    
    when('/help',{templateUrl:'views/ayuda.html'}).
    
    when('/help',{templateUrl:'views/ayuda.html'}).
    // when('/login_res',{templateUrl:'libs/resultado.html', controller:'tempCtrl'}).

    when('/temp',{templateUrl:'libs/temp.html', controller:'tempCtrl'}).
    // when('/search/:key?/:cat?/:Min?/:Max/:Estado',{templateUrl:'views/buscar.html', controller:'buscarCtrl'}).
    when('/search/:key?',{templateUrl:'views/buscar.html', controller:'buscarCtrl'}).
    // 
    // when('/login',{templateUrl:'views/login.html', controller:'loginCtrl'}).
    otherwise({redirectTo:'/home'});
}]);


  app.run(function($rootScope,$location){
    $rootScope.$on("$routeChangeStart",function(){
        var x = setTimeout('',100000); 
        for (var i = 0; i <= x; i++){
            clearTimeout(i);    
        }
        // var a =.EstadoSession();
        // console.log(a);
        if( 
            !sessionStorage.getItem("gUsuario") &&
            (
                $location.path()=="/reg_pub" ||
                $location.path()=="/fin_pub" ||
                $location.path()=="/mis_datos" ||
                $location.path()=="/comprar" ||
                $location.path()=="/mis_ventas" ||
                $location.path().indexOf("comprar/") > 0                 
            )

            ){

            $location.path("/home");
        // }else{
        //     if($location.path()=="/login"){
        //         $location.path("/home");    
        //     }
        }
    });
});