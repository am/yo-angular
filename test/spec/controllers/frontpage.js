'use strict';

describe('Controller: FrontpageCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularApp'));

  var FrontpageCtrl,
      scope,
      httpBackend,
      Restangular;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _Restangular_) {
    httpBackend = _$httpBackend_;
    httpBackend.expectGET('https://uk-playground-api.wuaki.tv/lists.json?frontpage').respond('{"lists":[{"id": 23,"name": "Most Watched Seasons","short_name": "Top Seasons","position": null,"display_on_frontpage": false,"content_type": "Season","display_on_cycles": false,"subscription": false},{"id": 25,"name": "Recommended","short_name": "Recommended","position": 1,"display_on_frontpage": false,"content_type": "Movie","display_on_cycles": false,"subscription": true},{"id": 7,"name": "New Releases","short_name": "New Releases","position": 1,"display_on_frontpage": true,"content_type": "Movie","display_on_cycles": true,"subscription": false}]}');
    Restangular = _Restangular_;
    scope = $rootScope.$new();
    FrontpageCtrl = $controller('FrontpageCtrl', {
      $httpBackend: httpBackend,
      $scope: scope,
      Restangular: Restangular
    });
  }));

  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  // it('should get the lists from the API', function () {
  // });
});
