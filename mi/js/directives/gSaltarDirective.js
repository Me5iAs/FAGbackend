/*
    Aplicacion 2.1

    Se tendrá 2 atributos para esta directiva
    g-Saltar  = que especificará que se debe realizar en caso de que se pulse enter pueden ser
        un número = saltar al siguiente gIndex tomando como referencia el gIndex del elemento actual
        una funcion= ejecutar la funcion
        vacio= saltar al siguiente elemento hermano que tenga el atributo gSaltar

    egIndex = sólo aplicable cuando el gSaltar es un numero, usa este dato como referencia para saber a que elemento saltar
*/
app.directive('gSaltar', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {                
                //si no se ha definido el elemento al cual saltar saltará al siguiente elemento gsaltar
                if (element.attr("g-Saltar")==''){
                    var siguiente = element.next("[g-Saltar]");
                    if(siguiente.length >0){
                        event.preventDefault();
                        siguiente.focus();
                    }
                    //si el elemento a saltar es un texto se asume una fncion que devuelve el número al cual saltar 
                }else if (isNaN(element.attr("g-Saltar"))== true){
                    event.preventDefault();
                    var datos = element.attr("g-Saltar");
                    datos = datos.split("(");
                    var funcion = datos[0];
                    var param = datos[1].substring(0,datos[1].length - 1);
                    var i = scope[funcion](param);

                    var siguiente = $("[gindex='"+i+"'");
                    if(siguiente.length >0){                        
                        event.preventDefault();
                        if (siguiente.prop("tagName") =="INPUT"){
                            siguiente.focus();
                        }else{
                            if (!siguiente.attr("disabled")){
                                var datos = siguiente.attr("ng-click");
                                var funcion, param;
                                datos = datos.split("(");
                                funcion = datos[0];
                                param = datos[1].substring(0,datos[1].length - 1);
                                scope[funcion](param);
                            }
                        }
                    }
                }else{
                    var i = parseInt(element.attr("gindex")) + 1;
                    var siguiente = $("[gindex='"+i+"'");
                    if(siguiente.length >0){                        
                        event.preventDefault();
                        if (siguiente.prop("tagName") =="INPUT"){
                            siguiente.focus();
                        }else if(siguiente.prop("tagName") =="SELECT"){
                            siguiente.focus();
                        }else{
                            if (!siguiente.attr("disabled")){
                                var datos = siguiente.attr("ng-click");
                                var funcion, param;
                                datos = datos.split("(");
                                funcion = datos[0];
                                param = datos[1].substring(0,datos[1].length - 1);                                
                                scope[funcion](param);
                            }
                        }
                    }
                }
            }
        });                
    };
});