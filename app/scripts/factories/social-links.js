'use strict';

angular.module('Swale')
.factory('SocialLinks', [function() {
  
  var urls, lookup;
  
  urls = {
    dribble : "http://dribble.com/",
    facebook : "http://facebook.com/",
    flickr : "http://flickr.com/",
    github : "http://github.com/",
    gplus : "http://gplus.com/",
    twitter : "http://twitter.com/",
    linkedin : "http://linkedin.com/",
    youtube : "http://youtube.com/"
  };
  
  lookup = function(network, username)  {
    if(urls.hasOwnProperty(network))  {
      return [urls[network], username].join('');
    }
  };
  
  return {
    get : function(network, username) {
      return lookup(network, username);
    }
  }
  
}]);