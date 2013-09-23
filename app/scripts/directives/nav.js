'use strict';

angular.module('yoAngularApp')
.directive('navbar', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'views/navbar.html'
  };
});
