'use strict';

/**
 * @ngdoc function
 * @name iat381Assignment1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the iat381Assignment1App
 */
angular.module('myMedicalApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.medicines = [
      'Items 1',
      'Items 2',
      'Items 3'
    ];
  });
