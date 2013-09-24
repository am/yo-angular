'use strict';

describe('Service: auth', function () {

  // load the service's module
  beforeEach(module('yoAngularApp'));

  // instantiate service
  var auth;
  beforeEach(inject(function (_Auth_) {
    auth = _Auth_;
  }));

  it('should exists', function () {
    expect(!!auth).toBe(true);
  });

  describe('Auth API', function () {

    it('should authenticate the user', function () {
      auth.setUserAuthenticated(true);
      expect(auth.getUserAuthenticated()).toBe(true);
    });

    it('should de-authenticate the user', function () {
      auth.setUserAuthenticated(false);
      expect(auth.getUserAuthenticated()).toBe(false);
    });
  });
});
