'use strict'

angular.module('Swale')
.controller('PostController', function($scope, $rootScope, $routeParams, $q, $http)	{
	
	console.log($rootScope.test);

	$q.all([$http.get('/posts/' + $routeParams.file + '.md')]).then(function(mdData)	{
		var selector = angular.element(document.querySelector('.post__content'));
		selector.append(new Showdown.converter().makeHtml(mdData[0].data));
	});
});