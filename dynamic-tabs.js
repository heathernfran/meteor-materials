'use strict';

if (Meteor.isClient) {
  var meteorMaterialsApp = angular.module('meteorMaterialsApp', ['ngMaterial', 'angular-meteor']);

  meteorMaterialsApp.controller('tabsController', ['$scope', function($scope, $watch){
    var tabs = [
      { title: "tab 0", content: "content for tab 0" },
      { title: "tab 1", content: "content for tab 1" },
      { title: "tab 2", content: "content for tab 2" },
      { title: "tab 3", content: "content for tab 3" },
      { title: "tab 4", content: "content for tab 4" },
      { title: "tab 5", content: "content for tab 5" }
    ],
    selected = null,
    previous = null;

    $scope.tabs = tabs;
    $scope.selectedIndex;
    $scope.$watch('selectedIndex', function(){
      previous = selected;
      selected = tabs[current];
    });
  }]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
