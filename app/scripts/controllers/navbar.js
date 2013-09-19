'use strict';

angular.module('angularAppApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.items = [
      {
        name: 'Películas',
        link: '#/movies'
      },
      {
        name: 'Series',
        link: '#/tv-shows'
      },
      {
        name: 'Selection',
        link: '#/subscription_plans'
      }
    ];
  });
