app.controller('buscarCtrl', ['$scope', '$routeParams', 'gQueryService','$http','$uibModal', function($scope, $routeParams, gQueryService,$http,$uibModal){
  // manejar parametros
    $scope.Filtro = {};
    $scope.verFiltro = false;
    var General = $routeParams.key;
    General = General.split("&");
    
    for(var x =0; x<General.length; x++){
      // Cat=0&Est=0&Min=0&Max=0&Key=algo&Ord=1
      // Ord=1menos precio, ord=2 max precio
      if(General[x].split("=")[0]=="Cat"){$scope.Filtro.Cat = General[x].split("=")[1];}
      if(General[x].split("=")[0]=="Est"){$scope.Filtro.Est = General[x].split("=")[1];}
      if(General[x].split("=")[0]=="Min"){$scope.Filtro.Min = General[x].split("=")[1];}
      if(General[x].split("=")[0]=="Max"){$scope.Filtro.Max = General[x].split("=")[1];}
      if(General[x].split("=")[0]=="Key"){$scope.Filtro.Key = General[x].split("=")[1];}
      if(General[x].split("=")[0]=="Ord"){$scope.Filtro.Ord = General[x].split("=")[1];}
      if(General[x].split("=")[0]=="Pag"){$scope.Filtro.Pag = General[x].split("=")[1];}
    }

  // Cargar Resultados
    var promesa = gQueryService.sql({
      name:'sp_resultado_devolver',
      datos:  $scope.Filtro.Cat + "|" +
              $scope.Filtro.Est + "|" +
              $scope.Filtro.Min + "|" +
              $scope.Filtro.Max + "|" +
              $scope.Filtro.Key + "|" +
              $scope.Filtro.Ord + "|" +
              $scope.Filtro.Pag
    });
    $scope.Resultado =[];  
    promesa.then(function(msg){
      if(msg.data!="null"){ 
        $scope.Resultado = msg.data;        
        // cargar categorias
          $scope.Categorias = []
          for(var x = 0; x<$scope.Resultado.length; x++){            
            if(BuscarEnArray($scope.Categorias, "Id", $scope.Resultado[x].IdCategoria)==false){
              $scope.Categorias.push({
                Id: $scope.Resultado[x].IdCategoria, 
                Categoria: $scope.Resultado[x].Categoria, 
                Cantidad:1})
            }else{
              SumarEnArray($scope.Categorias, "Id", $scope.Resultado[x].IdCategoria)
            }
          }          

        // cargar Estado
          $scope.Estado = []
          for(var x = 0; x<$scope.Resultado.length; x++){       
            if(BuscarEnArray($scope.Estado, "Id", $scope.Resultado[x].IdEstado)==false){
              $scope.Estado.push({
                Id: $scope.Resultado[x].IdEstado, 
                Estado: $scope.Resultado[x].Estado, 
                Cantidad:1})
            }else{
              
              SumarEnArray($scope.Estado, "Id", $scope.Resultado[x].IdEstado)
            }
          }
          // console.log($scope.Estado);
      
        // Cargar rangos
          $scope.Rango = []
          var Min;
          var Max;
          // console.log($scope.Resultado);
          // if tienes seleccionado un rango
          if($scope.Filtro.Max==0){

            if($scope.Filtro.Ord==1){
              Min = $scope.Resultado[0].PrecioSoles;
              Max = $scope.Resultado[$scope.Resultado.length-1].PrecioSoles;
            }else{
              Max = $scope.Resultado[0].PrecioSoles;
              Min = $scope.Resultado[$scope.Resultado.length-1].PrecioSoles;
            }          
            var a = 1;
            
            a = Max.substring(0,1);
            a++;
            for(v = 0 ; v<Max.toString().length-1; v++){
              a = a + "0";
            }
            
            if(a/3 == Math.round(a/3)){
              var rango = a/3;

              var Rango1Min = 1;
              var Rango1Max = rango; 

              var Rango2Min = rango+1;
              var Rango2Max = rango*2;

              var Rango3Min = Rango2Max+1;
              var Rango3Max = rango*3; 
          
              $scope.Rango =[
                {Rango: "S/ " + Rango1Min + " a S/ " + Rango1Max, Cantidad: 0, Min:Rango1Min, Max:Rango1Max},
                {Rango: "S/ " + Rango2Min + " a S/ " + Rango2Max, Cantidad: 0, Min:Rango2Min, Max:Rango2Max},
                {Rango: "S/ " + Rango3Min + " a S/ " + Rango3Max, Cantidad: 0, Min:Rango3Min, Max:Rango3Max},
              ]     
            }else{
              var rango = a/4;
         

              var Rango1Min = 1;
              var Rango1Max = rango; 

              var Rango2Min = rango+1;
              var Rango2Max = rango*2;

              var Rango3Min = Rango2Max+1;
              var Rango3Max = rango*3; 

              var Rango4Min = Rango3Max+1;
              var Rango4Max = rango*4; 
          
              $scope.Rango =[
                {Rango: "S/ " + Rango1Min + " a S/ " + Rango1Max, Cantidad: 0, Min:Rango1Min, Max:Rango1Max},
                {Rango: "S/ " + Rango2Min + " a S/ " + Rango2Max, Cantidad: 0, Min:Rango2Min, Max:Rango2Max},
                {Rango: "S/ " + Rango3Min + " a S/ " + Rango3Max, Cantidad: 0, Min:Rango3Min, Max:Rango3Max},
                {Rango: "S/ " + Rango4Min + " a S/ " + Rango4Max, Cantidad: 0, Min:Rango4Min, Max:Rango4Max}
              ];
              console.log($scope.Rango);
            }
            
            for(var x = 0; x<$scope.Resultado.length; x++){
                IncluirArray($scope.Rango, $scope.Resultado[x].PrecioSoles)
            }
          }else{
            $scope.Rango =[
              {Rango: "S/ " + $scope.Filtro.Min + " a S/ " + $scope.Filtro.Max, 
              Cantidad: $scope.Resultado.length, Min:$scope.Filtro.Min, Max:$scope.Filtro.Max}
            ] 
          }

          // console.log("min: " + Min + " | max: " + Max);
          // console.log($scope.Resultado);

      }else{      
        var x = setTimeout('',100000); 
        for (var i = 0; i <= x; i++){
            clearTimeout(i);    
        };

        $scope.Resultado = [];
        ContadorY = 0;
        DireccionY = 0;
        MargenInicial = 80;
        ContadorX = 0;
        DireccionX = 0;
        MargenInicialX = 0;
        MargenInicialY = 80;

        // setTimeout(MoverArriba,10);
        // setTimeout(MoverCostado,10);
      }
    });

  // movimiento del gatopulpo
  $("#sinr").mousemove(function(e){
    mitadX = window.screen.width/2;
    mitadY = window.screen.height/2;
    distanciaX= e.screenX-mitadX;
    distanciaY= e.screenY-mitadY;
    $("#avatar").css("margin-left",  MargenInicialX - (0.05 * distanciaX) + "px");
    $("#avatar").css("margin-top", MargenInicialY - (0.05 * distanciaY) + "px");
  })

  var MoverArriba = function(){
      ContadorY=ContadorY+1;
      if(DireccionY == 0){
        MargenInicial = MargenInicial + 0.1;
        $("#avatar").css("margin-top", MargenInicial + "px");
        if(ContadorY==100){
          DireccionY = 1;
          ContadorY = 0;
        }
      }else{         
        MargenInicial=MargenInicial-0.1;
        $("#avatar").css("margin-top", MargenInicial+"px");
        if(ContadorY==100){          
          DireccionY = 0;
          ContadorY = 0;
        }
      }      
      setTimeout(MoverArriba,10);
  };

  var MoverCostado = function(){
      ContadorX=ContadorX+1;
      if(DireccionX == 0){
        MargenInicialX = MargenInicialX + 0.1;
        $("#avatar").css("margin-left", MargenInicialX + "px");
        if(ContadorX==200){
          DireccionX = 1;
          ContadorX = 0;
        }
      }else{         
        MargenInicialX=MargenInicialX-0.1;
        $("#avatar").css("margin-left", MargenInicialX+"px");
        if(ContadorX==200){
          DireccionX = 0;
          ContadorX = 0;
        }
      }
      setTimeout(MoverCostado,10);
  };
      
  // Funciones de Apoyo
    var BuscarEnArray = function(array, campo, valor){
      for(var x = 0; x<array.length; x++){
        if(array[x][campo]==valor){
          return true;
        }
      }
      return false;
    }
    var SumarEnArray = function(array, campo, valor){
      for(var x = 0; x<array.length; x++){
        if(array[x][campo]==valor){
          array[x]["Cantidad"] = array[x]["Cantidad"]+1;
        }
      }
    }
    var IncluirArray = function(array,valor){
      for(var x = 0; x<array.length; x++){
        if(valor >= array[x].Min && valor <= array[x].Max){
          array[x]["Cantidad"] = array[x]["Cantidad"]+1;
        }
      }
    }

}]);