'use strict';

angular.module('app')
.directive('navbar', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'views/navbar.html'
  };
});
