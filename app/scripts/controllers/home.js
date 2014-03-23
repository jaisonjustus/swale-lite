'use strict';

angular.module('Swale')
.controller('HomeController', function($scope, Posts)	{
  
  var postsPromise = Posts.get();
  
  postsPromise.then(function(posts)  {
    $scope.posts = posts;
  });
});