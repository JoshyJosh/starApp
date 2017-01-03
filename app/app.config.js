'use strict';

angular.
  module('starApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
      when('/', {
        template: '<sky-map></sky-map>'
      }).
      when('/front-page', {
        template: '<app-stringer></app-stringer>'
      }).
      when('/404', {
        template: '<page-404></page-404>'
      }).
        otherwise('/front-page');
    }
])
