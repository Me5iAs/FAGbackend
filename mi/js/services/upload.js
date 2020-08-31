app.service('upload', ["$http", "$q", function ($http, $q) 
  {
    this.uploadFile = function(file, name){
      var deferred = $q.defer();
      var formData = new FormData();
      var dirServer = "../../backend/server.php";
      formData.append("name", name);
      formData.append("file", file);
      return $http.post(dirServer, formData, {headers: {"Content-type": undefined},transformRequest: angular.identity})
      .success(function(res){deferred.resolve(res);})
      .error(function(msg, code){deferred.reject(msg);})
      return deferred.promise;
    }
  }  
])