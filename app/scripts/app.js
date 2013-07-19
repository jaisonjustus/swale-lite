'use strict';

angular.module('Swale', [])

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

      .when('/post/:id/:file', {
        resolve : {
          'Kurippu' : function(Config)  {
            return Config.fetch();
          },

          'KurippuPosts' : function(Posts)  {
            return Posts.fetch();
          }
        },
        templateUrl : 'views/post.html',
        controller : 'PostController'
      })

      .otherwise({
        redirectTo: '/'
      });

  });
