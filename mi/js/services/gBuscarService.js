'use strict';

app.service('gBuscarService', ['$uibModal', 'gQueryService', '$timeout',
    //requiere gTabla
    function ($uibModal,gQueryService,$timeout) {

        // var configuracion = {
        //     backdrop: true,
        //     keyboard: true,
        //     modalFade: true,
        //     templateUrl: '../../partials/input.tpl.html'
        // };

        // var opciones = {
        //     BtnCerrar   : 'Cerrar',
        //     BtnAceptar  : 'Aceptar',
        //     Titulo      : 'Ingrese datos',
        //     Mensaje     : 'Ingrese los datos a continuación',
        //     estructura  : [{etiqueta: 'Etiqueta'}]
        // }

        // this.showModal = function(ConfUser, OpcUser){
        //     if(!ConfUser) ConfUser = {};
        //     ConfUser.backdrop = 'static';
        //     return this.show(ConfUser, OpcUser);

        // }

        this.mostrar = function(Opciones){
            var TempConf = {
                backdrop : 'static',
                keyboard: true,
                modalFade: true,
                templateUrl: '../../partials/gBuscar.tpl.html'
            }            
            
            TempConf.controller = function($scope, $uibModalInstance){
                 
                // var Opciones = {
                //     Titulo : 'Buscar algo',
                //     Mensaje: 'Mensaje de busqueda',
                //     Cancelar: function(){console.log('Cancelado')},
                //     ok: function(){console.log('ok')},
                //     procedimiento: 'sp_personas_devolver',
                //     columnas: ['Cod','Nombre','DNI']
                // } 
                $scope.gBuscar = Opciones;
                
                //cargar tabla
                $scope.gTabla = $scope.gBuscar;
                $scope.gTabla.Data.FilaClick = function(a){
                    $uibModalInstance.close();
                    $scope.gTabla.accion(a);
                }

                $scope.MostrarMensaje = false;
                $scope.$watch('gBuscar.Criterio', function(){        
                    $scope.MostrarMensaje = false;
                });

                $scope.Buscar = function(){
                    $scope.MostrarMensaje = false;
                    if($scope.gBuscar.Criterio == undefined || ''){
                        alert("Debe ingresar el criterio de búsqueda, si desea que se devuelva el total de los resultados utilice el comodín '%'");
                        return false;
                    }
                    var promesa = gQueryService.sql({name:$scope.gBuscar.procedimiento, datos:$scope.gBuscar.Criterio});
                        promesa.then(function(msg){                            
                            if(msg.data!="null"){
                                $scope.gTabla.Data.Valores = [];
                                for (var i = 0; i<msg.data.length; i++){
                                    var a = [];
                                    for (var j = 0; j<$scope.gTabla.Data.Columnas.length; j++){
                                        a[j] = msg.data[i][$scope.gTabla.Data.Columnas[j]];
                                    }
                                    $scope.gTabla.Data.Valores.push(a);
                                }
                             }else{
                                $scope.gTabla.Data.Valores = [];
                                $scope.MostrarMensaje = true;
                            }          
                        });
                }
                $scope.cerrar = function(){
                    $uibModalInstance.dismiss('cancel');
                }
                $scope.gBuscar.ok = function(resultado){                        
                    $uibModalInstance.close(resultado);
                };
                $scope.gBuscar.Cancelar = function(resultado){                    
                    $uibModalInstance.dismiss('cancel');
                };   
            }
            $timeout(function(){
                $("#gBuscarCriterio").focus();
            }, 500);
            return $uibModal.open(TempConf).result;

        }
    }]);