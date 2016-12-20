'use-strict';

angular.
  module('skyMap').
  component('skyMap', {
    templateUrl: 'sky-map/sky-map.template.html',
    controller: function SkyMapController($scope) {
      // Option 1
      /*this.skymapUrl = "http://www.astrobot.eu/skymapserver/skymap?" +
                       "type=png&amp;size=500&amp;colorset=0&amp;lang=en&amp;" +
                       "lon=15.97&amp;lat=45.8&amp;" +
                       "city=Zagreb&amp;" +
                       "timezone=CET&amp;deco=16399&amp;id=4d6174";*/

     // Option 2
     $scope.skymapUrl = "http://www.astrobot.eu/skymapserver/skymap?" +
                      //image properties
                      "type=png&size=580&colorset=0&lang=en" +
                      //location
                      "&lon=-73.94&lat=40.67&city=New+York+City" +
                      // Time
                      /* Gotten by Math.abs(new Date("2015/10/20"))*/
                      "&time=1445292000000" +
                      // Deco?
                      "&deco=16399"
    }
  })
