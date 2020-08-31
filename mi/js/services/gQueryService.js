'use strict';
app.factory('gQueryService', ['$http', function($http){
    return {
        // data = {procedimiento, datos}
        sql: function(data){
            var promesa = $http.post('backend/gQuery.php', data);
            return promesa;
        },
        consulta: function(m){        
          m.fn_fin = m.fn_fin || function(){};
          m.fn_error = m.fn_error || function(){};
          var promesa = $http.post('backend/gQuery.php', {name: m.nombre, param:m.parametros});
          promesa.then(
            function(msg){
              if (msg.data){
                m.fn_fin(msg.data);
              }else{
                m.fn_error(msg);
              }
            }
          );
        },
        ejecutar: function(data){
          // data.parametros para el sql
          // data.condicion para ok
          // data.fn_si para funcion ok
          // data.fn_no para funcion no          
          var promesa = $http.post('backend/gQuery.php', data.parametros);
          promesa.then(
            function(msg){
              if (msg.data.resultado!= undefined){
                if(msg.data.resultado==data.condicion){
                  data.fn_si(msg.data);
                }else{
                  data.fn_no();
                }
              }else if(msg.data){
                data.fn_si(msg.data);                
              }
              
            }
          )
        }
        
    };
}])