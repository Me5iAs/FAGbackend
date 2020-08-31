'use strict';

app.controller('publicacionCtrl', ['$scope', 'gQueryService','FileUploader', function($scope,gQueryService,FileUploader){
  $scope.EnProceso = false;
  // Cargar Categorias
    $scope.Categorias =[];
    var promesa = gQueryService.sql({
      name:'sp_categorias_devolver'      
    });
  
    promesa.then(function(msg){
      if(msg.data!="null"){        
        for (var x = 0; x<msg.data.length; x++){
          $scope.Categorias.push({
            Id          :   msg.data[x].Id,
            Categoria   :   msg.data[x].Categoria
          });
        }
      }else{      
        $scope.Categorias  = [];
      }
    });

  $scope.Publicacion = {};    
  $scope.Publicacion.Id = 0;
  $scope.IdResultado = 0;

  var uploader = $scope.uploader = new FileUploader({
    url: 'backend/upload.php?id=' + $scope.IdResultado
  });

  uploader.filters.push({
    name: 'imageFilter',
    fn: function(item /*{File|FileLikeObject}*/, options) {
      var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
      return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
    }
  });

  uploader.onBeforeUploadItem = function(item) {
    item.url= 'backend/upload.php?id='+ $scope.IdResultado;
  };

  uploader.onCompleteAll = function() {    
    location.href="#/fin_pub";
  };

  $scope.RegistrarPublicacion = function(){
    // validar
      if($scope.Titulo == "" || $scope.Titulo  == undefined){
        alert("Ingrese el título de la publicación")
        $("#titulo").focus();
        return;
      }

      if($scope.Moneda == "" || $scope.Moneda  == undefined){
        alert("seleccione la moneda")
        $("#moneda").focus();
        return;
      }
      
      if($scope.Monto == "" || $scope.Monto  == undefined){
        alert("Ingrese el precio")
        $("#monto").focus();
        return;
      }

      if($scope.EstadoProducto == "" || $scope.EstadoProducto  == undefined){
        alert("seleccione la Estado del Producto")
        $("#EstadoProducto").focus();
        return;
      }

      if($scope.IdCategoria == "" || $scope.IdCategoria  == undefined){
        alert("seleccione la categoria")
        $("#moneda").focus();
        return;
      }
      
      if($("#descripcion").html() == "" || $("#descripcion").html()  == undefined){
        alert("Ingrese la Descripción");
        $("#descripcion").focus();
        return;
      }

    var datos=  $scope.Titulo+ "|" + 
              $scope.Monto+ "|" + 
              $scope.Moneda+ "|" + 
              $scope.EstadoProducto+ "|" + 
              $("#descripcion").html()+ "|" +  
              sessionStorage.getItem("gId")+ "|" +  
              $scope.IdCategoria;
  
    // Registrar
    var promesa = gQueryService.sql({
      name:'fn_publicacion_registrar',
      datos:  datos
    });

    $scope.EnProceso = true;
    promesa.then(function(msg){
      if(msg.data!="null" && msg.data.resultado!="0"){ 
        $scope.IdResultado = msg.data.resultado;
        uploader.uploadAll();
      }else{      
        alert("no se ha podido registrar la publcación, es posible que ya tenga una publicación igual registrada, por favor compruebelo e inténtelo de nuevo \n Si desea modificar su publicación puede hacerlo desde la sección 'Mi Cuenta' del menú de Usuario");
        return false;
      }
    });
  }
   

}]);

app.directive('ngThumb', ['$window', function($window) {
    var helper = {
        support: !!($window.FileReader && $window.CanvasRenderingContext2D),
        isFile: function(item) {
            return angular.isObject(item) && item instanceof $window.File;
        },
        isImage: function(file) {
            var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    };

    return {
        restrict: 'A',
        template: '<canvas/>',
        link: function(scope, element, attributes) {
            if (!helper.support) return;

            var params = scope.$eval(attributes.ngThumb);

            if (!helper.isFile(params.file)) return;
            if (!helper.isImage(params.file)) return;

            var canvas = element.find('canvas');
            var reader = new FileReader();

            reader.onload = onLoadFile;
            reader.readAsDataURL(params.file);

            function onLoadFile(event) {
                var img = new Image();
                img.onload = onLoadImage;
                img.src = event.target.result;
            }

            function onLoadImage() {
                var width = params.width || this.width / this.height * params.height;
                var height = params.height || this.height / this.width * params.width;
                canvas.attr({ width: width, height: height });
                canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
            }
        }
    };
}]);
