'use strict';

describe('Filter: shortTitle', function () {

  // load the filter's module
  beforeEach(module('yoAngularApp'));

  // initialize a new instance of the filter before each test
  var shortTitle,
      mockText = 'This is a long text that exceeds the length defined by the filter.';
  
  beforeEach(inject(function ($filter) {
    shortTitle = $filter('shortTitle');
  }));

  it('should return a string with a max length of 30 characters', function () {
    expect(shortTitle(mockText).length).toBe(30 + 1);
  });

  it('should return a string followed by a "…" sign', function () {
    var filtered = shortTitle(mockText);
    expect(filtered.charAt(filtered.length-1)).toBe('…');
  });
});
