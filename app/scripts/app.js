'use strict';

angular.module('app', ['ngRoute', 'restangular'])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/frontpage.html',
        controller: 'FrontpageCtrl'
      })
      .when('/frontpage', {
        templateUrl: 'views/frontpage.html',
        controller: 'FrontpageCtrl'
      })
      .when('/movies/:id', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      RestangularProvider.setBaseUrl('https://uk-playground-api.wuaki.tv/');
      RestangularProvider.setRequestSuffix('.json');

  })
  .controller('AppCtrl', ['$scope', 'Restangular', function($scope, Restangular){
    Restangular.all("version").getList().then(function(data){
      $scope.api = data.api;
    });
  }]);