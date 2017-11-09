'use strict';

// Register `toDoListList` component, along with its associated controller and template
angular.
  module('toDoListList').
  component('toDoListList', {
    templateUrl: 'to-do-list-list/to-do-list-list.template.html',
    controller: ['ToDoList',
      function ToDoListListController(ToDoList) {
        this.toDoLists = ToDoList.query({});
        this.orderProp = 'age';
      }
    ]
  });
