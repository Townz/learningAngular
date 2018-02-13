var clockApp = angular.module("clockApp", []);
clockApp.controller("ClockCtrl", ClockCtrl);

function ClockCtrl($scope) {
  $scope.currentTime = new Date().toTimeString();
  $scope.updateTime = function() {
    $scope.userName;
    $scope.currentTime = new Date().toTimeString();
  }
}
