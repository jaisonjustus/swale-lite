'use strict'

angular.module('Swale')
.controller('PostController', function($scope, $routeParams, $q, $http, Posts)	{
  
  var postsPromise = Posts.get();

  postsPromise.then(function(posts) {
  	$scope.article = {};
  	$scope.article.name = posts[$routeParams.id].name;
  	$scope.article.date = posts[$routeParams.id].date;
    
  	$q.all([$http.get('/posts/' + $routeParams.file + '.md')]).then(function(mdData)	{
  		var selector = angular.element(document.querySelector('.article__content'));
  		selector.append(new Showdown.converter().makeHtml(mdData[0].data));
  	});
    
  });
});