'use strict';

angular.module('angularAppApp')
.directive('navbar', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'views/navbar.html'
  };
});
