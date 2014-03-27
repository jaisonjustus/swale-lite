'use strict';

angular.module('Swale')
.controller('StaticFrameController', 
  function($rootScope, $scope, Config, SocialLinks)	{

  var socialNetworks = {},
      configPromise = Config.get(),
      socialNetworks = {};

  configPromise.then(function(config)  {
    socialNetworks = config.social;
    
    for(var network in socialNetworks)  {
      if(socialNetworks[network].length > 0)  {
        socialNetworks[network] = SocialLinks.get(network, socialNetworks[network]);
      }else {
        delete socialNetworks[network];
      }
    }
    
    $scope.socialNetworkLinks = socialNetworks;
    $scope.links = config.links;
    $rootScope.config = config;
    $rootScope.config.author.email = md5($rootScope.config.author.email);
  });
    
});