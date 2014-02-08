'use strict'

angular.module('Swale')
.controller('PostController', function($scope, $rootScope, $routeParams, $q, $http, Posts, Config)	{
  
  var postsPromise = Posts.get(),
      url = '';

  postsPromise.then(function(posts) {
  	$scope.article = {};
  	$scope.article.name = posts[$routeParams.id].name;
  	$scope.article.date = posts[$routeParams.id].date;
    
    url = '/posts/' + $routeParams.file + '.md';
    
  	$q.all([$http.get(url)]).then(
      function(mdData)	{
        var selector = null,
            markdownData = '',
            images = [],
            temp = 0,
            imgObj = {};
          
    		selector = angular.element(
          document.querySelector('.swale-article--content')
        );
      
    		selector.append(new Showdown.converter().makeHtml(mdData[0].data));
        
        images = selector.find('img');
        angular.forEach(images, function(image) {
          imgObj = angular.element(image);
          temp = imgObj.attr('src').split('/');
          imgObj.attr('src', $rootScope.config.CDN.images + temp[temp.length - 1]);
        });
  	});
  });
  
});