'use strict';

// Register `toDoListDetail` component, along with its associated controller and template
angular.
  module('toDoListDetail').
  component('toDoListDetail', {
    templateUrl: 'to-do-list-detail/to-do-list-detail.template.html',
    controller: ['$routeParams', 'ToDoList',
      function ToDoListDetailController($routeParams, ToDoList) {
        var self = this;
        self.toDoList = ToDoList.get({toDoListId: $routeParams.toDoListId}, function(toDoList) {
          self.setImage(toDoList.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
