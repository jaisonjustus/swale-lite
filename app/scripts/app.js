'use strict';

angular.module('Swale', ['ngAnimate', 'ngResource', 'ngRoute'])

  .config(function ($routeProvider) {
    $routeProvider
      
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })

      .when('/post/:id/:file', {
        templateUrl : 'views/post.html',
        controller : 'PostController'
      })

      .otherwise({
        redirectTo: '/'
      });

  });
