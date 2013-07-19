'use strict'

angular.module('Swale')
.controller('HomeController', function($scope, $rootScope, Config, Posts)	{
	var socialNetworks = {};

	$scope.config = Config.get();
	$scope.config.author.email = md5($scope.config.author.email);
	$scope.posts = Posts.get();
	$scope.socials = {};
	
	var urls = {
		dribble : "http://dribble.com/",
		facebook : "http://facebook.com/",
		flickr : "http://flickr.com/",
		github : "http://github.com/",
		gplus : "http://gplus.com/",
		twitter : "http://twitter.com/",
		linkedin : "http://linkedin.com/",
		youtube : "http://youtube.com/"
	};

	socialNetworks = $scope.config.social;
	for(var network in socialNetworks)	{
		if(socialNetworks[network] !== "")	{
			$scope.socials[network] = urls[network] + socialNetworks[network];
		}
	}

	$rootScope.test = "yes";
});