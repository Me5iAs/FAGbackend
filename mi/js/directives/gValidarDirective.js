// ngValidar 2.0 (version 1 con jquery) 
app.directive('gValidar', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            //tipo de validacion
            // console.log(element);
            var TipoVal = element.attr("g-Validar");
            var letra = event.which;
            if(
                parseInt(letra)==8 || 
                parseInt(letra)==37 || 
                parseInt(letra)==38 || 
                parseInt(letra)==39 || 
                parseInt(letra)==40 ||
                parseInt(letra)==46 || 
                parseInt(letra)==9
                ){
                // GO BABE!            
            }else if (TipoVal == "entero" && !(parseInt(letra)>=48 &&  letra <=57)){
              // if((v < 48 || v > 57) && (v<37|| v > 40) && v!= 8 && v!=46 && v!=13 && v!=36 && v!= 35) {
                event.preventDefault();
            }else if (TipoVal=="decimal"){
                if(
                    (letra > 47 && letra < 58) || 
                    (letra > 95 && letra < 105) || 
                    letra ==110 ||
                    letra ==190
                    ){
                    
                    ma = $(element).val().split(".");                          
                    if (ma.length==2){
                        if(letra ==110 || letra ==190){
                            event.preventDefault(); 
                        }else{
                            if (ma[1].length==2){
                                event.preventDefault(); 
                            }
                        }
                    }                 
                }else{
                    event.preventDefault(); 
                }
            }else if (TipoVal=="alfanumerico"){
                if (
                    (letra <48 || letra >57) && 
                    (letra <65  || letra> 90 ) && 
                    (letra <97  || letra> 122 ) &&                          
                    (letra !=32) && 
                    (letra < 130 || letra > 154) &&
                    (letra < 160 || letra > 165) &&
                    (letra < 224 || letra > 237) &&
                    (letra != 241) &&
                    (letra != 209) &&
                    (letra != 243) &&
                    (letra != 211) &&
                    (letra != 250) &&
                    (letra != 218) &&
                    (letra != 193) &&
                    (letra != 201) &&
                    (letra != 205) &&
                    (letra !=180) 
                    ){ 
                    element.preventDefault(); 
                }
            }else if (TipoVal=="telefono"){ 
                if ((letra <47 || letra >57) && (letra !=42 && letra !=35 && letra !=40 && letra !=41 && letra!=45 )){ element.preventDefault(); }
            }else if (TipoVal=="email"){ 
                if ((!(letra >=97 && letra <= 122)) && (!(letra>=48 &&  letra <=57)) && letra != 64 && letra !=46 && letra !=45 && letra !=95){ element.preventDefault(); }
            }
        });

        element.bind("keyup",function (event){            
            if ($(element).attr("max") != undefined){
                var valactual = $(element).val();                
                if (parseInt(valactual) > parseInt($(element).attr("max"))){
                    var nvalor = valactual.substring(valactual.length-1,0);                    
                    event.preventDefault();
                    $(element).val(nvalor);
                    
                }                
            }
        })
    };
});