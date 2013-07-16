'use strict'

angular.module('Kurippu')
.service('Config', function($http)	{

	var _config = null;

	return	{
		fetch : function()	{
			return $http.get('kurippu.conf.json').success(function(data)	{
				_config = data;
			});
		},

		get : function()	{
			return _config;
		}
	}

});