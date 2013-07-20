'use strict'

angular.module('Swale')
.controller('PostController', function($scope, $routeParams, $q, $http, Config, Posts)	{

	$scope.article = {};

	$scope.article.author = Config.get().author.name;

	$scope.article.name = Posts.get()[$routeParams.id].name;
	$scope.article.date = Posts.get()[$routeParams.id].date;

	$q.all([$http.get('/posts/' + $routeParams.file + '.md')]).then(function(mdData)	{
		var selector = angular.element(document.querySelector('.article__content'));
		selector.append(new Showdown.converter().makeHtml(mdData[0].data));
	});
});