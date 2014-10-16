'use strict';

describe('Controller: CvCtrl', function () {

  // load the controller's module
  beforeEach(module('nicklewisApp'));

  var CvCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CvCtrl = $controller('CvCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
