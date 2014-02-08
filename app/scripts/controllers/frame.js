'use strict'

angular.module('Swale')
.controller('StaticFrameController', function($rootScope, Config)	{

	var socialNetworks = {},
      configPromise = Config.get();

  configPromise.then(function(config)  {
  	$rootScope.config = config;
  	$rootScope.config.author.email = md5($rootScope.config.author.email);
  });
      
  // $scope.socials = {};
  // 
  // var urls = {
  //   dribble : "http://dribble.com/",
  //   facebook : "http://facebook.com/",
  //   flickr : "http://flickr.com/",
  //   github : "http://github.com/",
  //   gplus : "http://gplus.com/",
  //   twitter : "http://twitter.com/",
  //   linkedin : "http://linkedin.com/",
  //   youtube : "http://youtube.com/"
  // };
  // 
  // socialNetworks = $scope.config.social;
  // for(var network in socialNetworks)  {
  //   if(socialNetworks[network] !== "")  {
  //     $scope.socials[network] = urls[network] + socialNetworks[network];
  //   }
  // }
});