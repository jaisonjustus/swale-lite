'use strict';

angular.module('Kurippu', [])

  .config(function ($routeProvider) {
    $routeProvider
      
      .when('/', {
        templateUrl: 'views/home.html',
        resolve : {
          'Kurippu' : function(Config)  {
            return Config.fetch();
          },

          'KurippuPosts' : function(Posts)  {
            return Posts.fetch();
          }
        },
        controller: 'HomeController'
      })

      .when('/post/:file', {
        templateUrl : 'views/post.html',
        controller : 'PostController'
      })

      .otherwise({
        redirectTo: '/'
      });

  });
