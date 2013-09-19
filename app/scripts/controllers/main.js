'use strict';

angular.module('angularAppApp')
  .controller('MainCtrl', ['$scope', '$http', 'Restangular', function ($scope, $http, Restangular) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
      

      // $http({method: 'GET', url: 'https://qa-apiv2.wuaki.tv/version.json'}).
      //   success(function(data, status) {
      //     console.log(data.api);
      //     $scope.api = data.api;
      //   }).
      //   error(function(data, status) {
      //     console.log(data);
      // });
      $scope.api = Restangular.all("version.json").getList();
      console.log($scope.api);
    }]);
