'use strict';

describe('toDoListList', function() {

  // Load the module that contains the `toDoListList` component before each test
  beforeEach(module('toDoListList'));

  // Test the controller
  describe('ToDoListListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('to-do-lists/to-do-lists.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('toDoListList');
    }));

    it('should create a `toDoLists` property with 2 toDoLists fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.toDoLists).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.toDoLists).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
