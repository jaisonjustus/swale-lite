'use strict'

angular.module('Swale')
.controller('HomeController', function($scope, $rootScope, Config, Posts)	{
	$scope.config = Config.get();
	$scope.config.author.email = md5($scope.config.author.email);
	$scope.posts = Posts.get();

	$rootScope.test = "yes";
});