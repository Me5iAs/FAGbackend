app.controller('tempCtrl', ['$scope', '$routeParams', 'gQueryService','$http','$uibModal','$compile', function($scope, $routeParams, gQueryService,$http,$uibModal,$compile){

  // Generales
    var apretado = false;
    var posicion = {};
    var contenedor = {}
    var redimensionar = false;
    var RedX = "";
    var RedY = "";
    var tipoRed = "";
    var dat = {};

  // Define contenedor
    contenedor.MinY = $("#contenedor").offset().top;
    contenedor.MinX = $("#contenedor").offset().left;
  
  // mover cuadrado
    $("#contenedor").delegate(".cuadrado table", "mouseover", function(e){
        $(this).css("cursor", "move");
    });
    
    $("#contenedor").delegate(".cuadrado table", "mousedown", function(e){
      $(this).css("cursor","move");
      apretado = true;      
      posicion.Mx = e.screenX;
      posicion.My = e.screenY;
      posicion.Ex = $(this).parent("div").offset().left;
      posicion.Ey = $(this).parent("div").offset().top;    
    });

    $("#contenedor").delegate(".cuadrado table", "mouseup", function(){    
      apretado = false;
      _self =$(this).parent("div");
      var y = Math.round(_self.offset().top);
      y = Math.round(y/10)*10;
      var x = Math.round(_self.offset().left);
      x = Math.round(x/10)*10;
      _self.offset({top:y, left:x});
      _self.css("cursor","default");
    });

    $("#contenedor").delegate(".cuadrado table", "mousemove", function(e){        
      if(apretado == true){
        var xx = posicion.Ex + (e.screenX - posicion.Mx);
        var yy = posicion.Ey + (e.screenY-posicion.My);
        // console.log(xx +" | "+ yy);
        _self =$(this).parent("div");
        if(xx > $("#contenedor").offset().left + $("#contenedor").outerWidth()-_self.outerWidth()) xx = $("#contenedor").offset().left + $("#contenedor").outerWidth()-_self.outerWidth();
        if(xx < contenedor.MinX) xx = contenedor.MinX;
        if(yy > $("#contenedor").offset().top + $("#contenedor").outerHeight()-_self.outerHeight()) yy = $("#contenedor").offset().top + $("#contenedor").outerHeight()-_self.outerHeight();
        if(yy < contenedor.MinY) yy = contenedor.MinY;

        _self.offset({top:yy, left:xx});       
      }
    });

  // Redimensionar cuadrado
    $("#contenedor").delegate(".cuadrado", "mouseover", function(e){
      dat = {
        MargenI : $(this).offset().left,
        MargenD : $(this).offset().left + $(this).outerWidth(),
        MargenS : $(this).offset().top + 95,
        MargenIn : $(this).offset().top + $(this).outerHeight() +80
      }
      
      if(e.screenX > dat.MargenI-10 && e.screenX < dat.MargenI + 10){
        $(this).css("cursor", "e-resize");
      }else if(e.screenX > dat.MargenD-10 && e.screenX < dat.MargenD + 10){
        $(this).css("cursor", "e-resize");
      }else if(e.screenY > dat.MargenS-10 && e.screenY < dat.MargenS + 10){
        $(this).css("cursor", "n-resize");
      }else if(e.screenY > dat.MargenIn-10 && e.screenY < dat.MargenIn + 10){        
        $(this).css("cursor", "n-resize");
      }else{
        $(this).css("cursor", "move");
      }
    }); 
     $("#contenedor").delegate(".cuadrado", "mousedown", function(e){

      dat = {
        MargenI : $(this).offset().left,
        MargenD : $(this).offset().left + $(this).outerWidth(),
        MargenS : $(this).offset().top + 95,
        MargenIn : $(this).offset().top + $(this).outerHeight() +80
      }
      RedX = e.screenX;
      RedY = e.screenY;
      if(e.screenX > dat.MargenI-10 && e.screenX < dat.MargenI + 10){        
        tipoRed = "i";
        redimensionar = true;
      }else if(e.screenX > dat.MargenD-10 && e.screenX < dat.MargenD + 10){
        tipoRed = "d";
        redimensionar = true;
      }else if(e.screenY > dat.MargenS-10 && e.screenY < dat.MargenS + 10){
        tipoRed = "s";
        redimensionar = true;
      }else if(e.screenY > dat.MargenIn-10 && e.screenY < dat.MargenIn + 10){        
        tipoRed = "n";
        redimensionar = true;
      }else{
        tipoRed = "";
        redimensionar = false;
      }
    });

    $("#contenedor").delegate(".cuadrado", "mousemove", function(e){
      _self = $(this);
      // console.log("tipo: " + tipoRed + " | " + dat.MargenI  + " | " +  e.screenX);
      if(redimensionar == false){
        return;
      }
      if(tipoRed =="i"){
        
        cantidad = (RedX - e.screenX);
        console.log(cantidad);        
        _self.outerWidth(_self.outerWidth() + cantidad);
        _self.offset({top:dat.MargenS - 95, left: dat.MargenI - cantidad});        
      }
      
    $("#contenedor").delegate(".cuadrado","mouseup",function(){
      tipoRed = "";
      redimensionar = false;
    })  
    });

  // movimiento "rombo"
    $("#contenedor").delegate(".rombo", "mousedown", function(e){    
      $(this).css("cursor","move");
      apretado = true;      
      posicion.Mx = e.screenX;
      posicion.My = e.screenY;
      posicion.Ex = $(this).offset().left;
      posicion.Ey = $(this).offset().top;    
    });

    $("#contenedor").delegate(".rombo", "mouseup", function(){    
      apretado = false;
      var y = Math.round($(this).offset().top);
      y = Math.round(y/10)*10;
      var x = Math.round($(this).offset().left);
      x = Math.round(x/10)*10;
      $(this).offset({top:y, left:x});
      $(this).css("cursor","default");
    })

    $("#contenedor").delegate(".rombo", "mousemove", function(e){        
      if(apretado == true){
        var xx = posicion.Ex + (e.screenX - posicion.Mx);
        var yy = posicion.Ey + (e.screenY-posicion.My);
        // console.log(xx +" | "+ yy);
        if(xx > $("#contenedor").offset().left + $("#contenedor").outerWidth()-$(this).outerWidth()) xx = $("#contenedor").offset().left + $("#contenedor").outerWidth()-$(this).outerWidth();
        if(xx < contenedor.MinX) xx = contenedor.MinX;
        if(yy > $("#contenedor").offset().top + $("#contenedor").outerHeight()-$(this).outerHeight()) yy = $("#contenedor").offset().top + $("#contenedor").outerHeight()-$(this).outerHeight();
        if(yy < contenedor.MinY) yy = contenedor.MinY;

        $(this).offset({top:yy, left:xx});
        // console.log(e.screenX);  
      }
      
      // console.log(e.screenX);
      // console.log(e.screenY);
    });

  // Agregar texto
  $("#contenedor").delegate(".cuadrado", "dblclick", function(e){    
    var _self = $(this);
      var VentanaActualizarTextoCuadrado = $uibModal.open({
        animation: true,
        templateUrl: 'templates/tpl_ActualizarTextoCuadrado.html',
        controller: 'CambiarTextoCuadradoCtrl',
        size: "sm",
        resolve: {
          items: function () {
            return _self.find("td").html();
          }
        }
      });

      VentanaActualizarTextoCuadrado.result.then(
        // ok
        function(a){
          _self.find("td").html(a)          
        }, 
        // cancelar
        function () {});

  })
  $("#contenedor").delegate(".cuadrado", "focusout", function(){
    $(this).removeAttr("contentEditable");
  });
  // Crear Cuadrado
  $scope.NuevoCuadrado = function(){
    alert("A");
    var el = angular.element('<div eg-cuadrado style="width:100px; height:100px; border:1px solid"></div>');
    $("#contenedor").append(el);
    $compile(el);    
  };
  $scope.NuevoCirculo = function(){
    $("#contenedor").append("<div class='circulo'></div>")
  };
  // crear rombo
  $scope.NuevoRombo = function(){
    $("#contenedor").append("<div class='rombo'></div>")
  };


}]);

app.controller('CambiarTextoCuadradoCtrl', function ($scope, $uibModalInstance, items) {
  $scope.texto = items;
  setInterval(function(){
    $("input")[0].focus();
  },300);
  $scope.Cancelar = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.Registrar = function(){
    $uibModalInstance.close($scope.texto);
  }
});
