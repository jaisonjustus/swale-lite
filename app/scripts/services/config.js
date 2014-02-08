'use strict'

angular.module('Swale').
  service('Config', function($http, $q)	{

    this.get = function() {
      var deferred = $q.defer(),
          url = 'swale.conf.json';
        
      $http.get(url).success(function(data) {
        deferred.resolve(data);
      });
    
      return deferred.promise;
    }
  
  }
);