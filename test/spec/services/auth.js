'use strict';

describe('Service: auth', function () {

  // load the service's module
  beforeEach(module('yoAngularApp'));

  // instantiate service
  var auth;
  beforeEach(inject(function (_auth_) {
    auth = _auth_;
  }));

  // it('should do something', function () {
  //   console.log('>>>>>> ' + auth);
  //   expect(!!auth).toBe(true);
  // });

});
