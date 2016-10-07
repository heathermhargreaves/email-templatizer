angular.module('app')
  .controller('mainCtrl', function($scope, mainSrvc) {

    $scope.test = mainSrvc.name;


  }); //end mainCtrl
