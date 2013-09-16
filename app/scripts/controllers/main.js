'use strict';

angular.module('sayHelloProtractorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.sayHello = function() {
      $scope.message = "Hello!";
    }
  });
