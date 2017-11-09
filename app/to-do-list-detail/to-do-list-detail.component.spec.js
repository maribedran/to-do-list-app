'use strict';

describe('toDoListDetail', function() {

  // Load the module that contains the `toDoListDetail` component before each test
  beforeEach(module('toDoListDetail'));

  // Test the controller
  describe('ToDoListDetailController', function() {
    var $httpBackend, ctrl;
    var xyzToDoListData = {
      name: 'toDoList xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('to-do-lists/xyz.json').respond(xyzToDoListData);

      $routeParams.toDoListId = 'xyz';

      ctrl = $componentController('toDoListDetail');
    }));

    it('should fetch the toDoList details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.toDoList).toEqual({});

      $httpBackend.flush();
      expect(ctrl.toDoList).toEqual(xyzToDoListData);
    });

  });

});
