'use strict';

angular.module('app', ['ngRoute', 'restangular'])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/frontpage.html',
        controller: 'FrontpageCtrl'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      RestangularProvider.setBaseUrl('https://qa-apiv2.wuaki.tv/');
      RestangularProvider.setRequestSuffix('.json');

  });