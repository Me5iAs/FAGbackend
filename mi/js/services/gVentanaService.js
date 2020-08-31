'use strict';

app.service('gVentanaService', ['$uibModal', function ($uibModal) {
        var configuracion = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: '../../partials/gMsgbox.tpl.html'
        };

        // var opciones = {
        //     Titulo      : 'Ingrese datos',
        //     Mensaje     : 'Ingrese los datos a continuación',
        //     botones     : '2' //1 = Aceptar, 2 SiNo 3 SiNoCancelar

        // }


        this.mostrar = function(MiVentana){
            //MiScope debe tener el $uibModalInstance
            // var MiInstancia;
            // MiInstancia = MiData;
            // MiInstancia.controller = function($scope, $uibModalInstance){
                // for(var x = 0; x<MiData.botones.length; x++){
                //     var TempFun = MiData["botones"][x]["Funcion"];
                //     MiData["botones"][x]["Funcion"] = function(){
                //         TempFun($uibModalInstance);
                //         // $uibModalInstance.close();
                //     }
                // }
                // angular.extend(Cerrar, $uibModalInstance);
                // $scope.Data = MiData;                
                // $scope.Data.CerrarVentana = function(){
                //     $uibModalInstance.close();
                // }
            // }
            // console.log(MiVentana.controller);
            return $uibModal.open(MiVentana).result;
        }
    }]);