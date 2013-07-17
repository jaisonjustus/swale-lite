'use strict'

angular.module('Swale')
.service('Config', function($http)	{

	var _config = null;

	return	{
		fetch : function()	{
			return $http.get('swale.conf.json').success(function(data)	{
				_config = data;
			});
		},

		get : function()	{
			return _config;
		}
	}

});