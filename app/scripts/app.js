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
    
      .when('/arts', {
        templateUrl : 'views/arts.html',
        controller : 'ArtsController'
      })

      .otherwise({
        redirectTo : '/articles'
      });

  });
