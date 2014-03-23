'use strict';

angular.module('Swale', ['ngAnimate', 'ngResource', 'ngRoute'])

  .config(function ($routeProvider) {
    $routeProvider
      
      .when('/', {
        redirectTo : '/articles'
      })
      
      .when('/articles', {
        templateUrl : 'views/home.html',
        controller : 'HomeController'
      })

      .when('/article/:id/:file', {
        templateUrl : 'views/post.html',
        controller : 'PostController'
      })

      .otherwise({
        redirectTo : '/articles'
      });

  });
