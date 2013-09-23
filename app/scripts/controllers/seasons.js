'use strict';

angular.module('yoAngularApp')
.controller('TvshowsCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
  Restangular.all('seasons').getList().then(function(data){
    $scope.seasons = data.seasons;
  });
}]);