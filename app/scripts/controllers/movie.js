'use strict';

angular.module('app')
.controller('MovieCtrl', ['$scope', '$routeParams', 'Restangular', function ($scope, $routeParams, Restangular) {
  console.log($routeParams.id.toString());
  Restangular.all('movies').one($routeParams.id).get().then(function(data) {
    console.log('> ', data);
    $scope.movie = data;
  });
}]);
