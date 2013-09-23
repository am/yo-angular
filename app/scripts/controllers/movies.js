'use strict';

angular.module('yoAngularApp')
.controller('MoviesCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
  Restangular.all('movies').getList().then(function(data){
    $scope.movies = data.movies;
  });
}]);
