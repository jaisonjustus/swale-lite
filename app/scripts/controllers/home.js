'use strict'

angular.module('Swale')
.controller('HomeController', function($scope, $rootScope, Config, Posts)	{
	$scope.config = Config.get();
	$scope.posts = Posts.get();

	$rootScope.test = "yes";
});