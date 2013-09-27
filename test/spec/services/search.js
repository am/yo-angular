'use strict';

describe('Service: search', function () {

  // load the service's module
  beforeEach(module('yoAngularApp'));

  // instantiate service
  var search;
  beforeEach(inject(function (_Search_) {
    search = _Search_;
  }));

  it('should do something', function () {
    expect(!!search).toBe(true);
  });
});
