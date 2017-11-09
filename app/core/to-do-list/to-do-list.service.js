'use strict';

angular.
  module('core.to-do-list').
  factory('ToDoList', ['$resource',
    function($resource) {
      return $resource('to-do-lists/:toDoListId.json', {}, {
        query: {
          method: 'GET',
          params: {toDoListId: 'to-do-lists'},
          isArray: true
        }
      });
    }
  ]);
