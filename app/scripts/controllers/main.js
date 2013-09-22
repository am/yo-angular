'use strict';

angular.module('angularAppApp')
  .controller('MainCtrl', ['$scope', '$http', 'Restangular', function ($scope, $http, Restangular) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
      
      $scope.api = Restangular.all("version.json").getList();
      console.log($scope.api);
    }]);
