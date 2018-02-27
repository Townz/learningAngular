var app = angular.module("calculatorCtrl", []);

app.controller("calculatorCtrl", calculatorCtrl);

function calculatorCtrl($scope){
  $scope.calculatedValue = 0;
}
