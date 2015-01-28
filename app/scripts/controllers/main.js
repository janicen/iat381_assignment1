'use strict';

angular.module('myMedicalApp')
  .controller('MainCtrl', function ($scope) {
    $scope.medicines = ['Aspirin', 'Corgard', 'Benylin'];
    $scope.addMedicine = function () {
      $scope.medicines.push($scope.medicine);
      $scope.medicine = '';
    };
    $scope.removeMedicine = function (index) {
      $scope.medicines.splice(index, 1);
    };
  });