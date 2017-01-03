'use strict';

angular.
  module('appStringer').
  component('appStringer', {
    templateUrl: 'app-stringer/app-stringer.template.html',
    //template:'<div><p>This is a good time for some {{$ctrl.foo}}!</p></div>',

    controller: ['$http', function AppStringerController($http){
      var self = this;
      self.foo = "angular";

      $http.get('constelations/constelations.json').then(function(response){
        self.stars = response.data;
      });
    }]
  });
