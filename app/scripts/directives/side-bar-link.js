'use strict'

angular.module('Swale')
.directive('sidebarlink', function()  {
  
  var _compile, _template, _eventBindings, _changeLinkSelection, _selectors,
      _preLink;
  
  _selectors = {
    'listLinkItem' : 'swale-header--list_link_item',
    'listItemSelected' : 'swale-header--list_item_selected'
  };
  
  _changeLinkSelection = function(element) {
    var linksListItems, ngItem;
    
    linksListItems = element.parent().parent().children();
    
    angular.forEach(linksListItems, function(item){
      ngItem = angular.element(item);
      
      if(ngItem.hasClass(_selectors.listItemSelected)) {
        ngItem.removeClass(_selectors.listItemSelected);  
      }
    });

    element.parent().addClass(_selectors.listItemSelected);
  };
  
  _eventBindings = function(element) {
    element.bind('click', function()  {
      _changeLinkSelection(element);
    });
  };
  
  _preLink = function(scope, element) {
    _eventBindings(element);
  };

  _compile = function(element)  {
    element.addClass(_selectors.listLinkItem);
    return { pre : _preLink };
  };
  
  _template = '<a href="#{{link.url}}">{{link.name | uppercase}}</a>';
  
  return {
    restrict : 'ECMA',
    replace: true,
    template : _template,
    scope : {
      link : '='
    },
    compile : _compile
  };
  
});