'use strict';

app.service('gMsgboxService', ['$uibModal',
    function ($uibModal) {

        var configuracion = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: '../../partials/gMsgbox.tpl.html'
        };

        var opciones = {
            Titulo      : 'Ingrese datos',
            Mensaje     : 'Ingrese los datos a continuación',
            botones     : '2' //1 = Aceptar, 2 SiNo 3 SiNoCancelar

        }

        this.showModal = function(ConfUser, OpcUser){
            if(!ConfUser) ConfUser = {};
            ConfUser.backdrop = 'static';
            return this.show(ConfUser, OpcUser);

        }

        this.show = function(ConfUser, OpcUser){
            var TempConf = {};
            var TempOpc = {};
            angular.extend(TempConf, configuracion, ConfUser);
            angular.extend(TempOpc, opciones, OpcUser);

            if (!TempConf.controller){
                TempConf.controller = function($scope, $uibModalInstance){

                    $scope.opciones = TempOpc;
                    $scope.opciones.FnSi = function(resultado){                        
                        $scope.opciones.si(resultado);
                        $uibModalInstance.close(resultado);
                    };
                    $scope.opciones.aceptar = $scope.opciones.aceptar || function(){};
                                        
                    $scope.opciones.FnAceptar = function(resultado){
                        if($scope.opciones.aceptar) $scope.opciones.aceptar(resultado);
                        $uibModalInstance.close(resultado);
                    };

                    $scope.opciones.FnNo = function(resultado){
                        $scope.opciones.no(resultado);
                        $uibModalInstance.dismiss('cancel');

                    };
                }
            }

            return $uibModal.open(TempConf).result;
        }
    }]);