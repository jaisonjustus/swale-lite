'use strict'

angular.module('Swale')
.service('Posts', function($http)	{

	var _posts = null;

	return	{
		fetch : function()	{
			return $http.get('/posts/post.json').success(function(data)	{
				_posts = data;
			});
		},

		get : function()	{
			return _posts;
		}
	}

});