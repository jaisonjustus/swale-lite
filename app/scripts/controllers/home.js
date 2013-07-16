'use strict'

angular.module('Kurippu')
.controller('HomeController', function($scope, Config, Posts)	{
	$scope.config = Config.get();
	$scope.posts = Posts.get();
});