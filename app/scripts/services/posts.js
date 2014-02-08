'use strict'

angular.module('Swale').
  service('Posts', function($http, $q)	{

    this.get = function() {
      var deferred = $q.defer(),
          url = '/posts/post.json';
        
      $http.get(url).success(function(data) {
        deferred.resolve(data);
      });
    
      return deferred.promise;
    }
  
  }
);