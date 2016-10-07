angular.module('app')
  .controller('mainCtrl', function($scope, mainSrvc) {

    //return for email template
    $scope.company
    $scope.industrySnippet
    $scope.customerSnippet

    //information displayed to choose snippets
    $scope.industrySnippets = [];
    $scope.customerSnippets = [];
    $scope.industry //selected from industry options
    $scope.territory //selected from territory options
    $scope.itemsInIndustryArray = false //ng-show for industry snippets
    $scope.itemsInCustomerArray = false //ng-show for industry snippets


    //data from service
    $scope.companyData = mainSrvc.companyData;
    $scope.industryData = mainSrvc.industryData;

    $scope.changeCustomerSnippet = function(item) {
      $scope.customerSnippet = item.customerSnippet;
    };

    $scope.changeIndustrySnippet = function(item) {
      $scope.industrySnippet = item.industrySnippet;
    };


    $scope.filterCompanyData = function() {
      if($scope.customerSnippets.length > 0) {
        $scope.customerSnippets = [];
      }
      $scope.companyData.filter(function(obj) {
          if(obj.territory === $scope.territory) {
            $scope.customerSnippets.push(obj);
          }
        })
      if($scope.customerSnippets.length > 0) {
        $scope.itemsInCustomerArray = true;
      }
    };

    $scope.filterIndustryData = function() {
      if($scope.industrySnippets.length > 0) {
        $scope.industrySnippets = [];
        console.log($scope.industrySnippets);
      }
      $scope.industryData.filter(function(obj) {
          if(obj.industry === $scope.industry) {
            $scope.industrySnippets.push(obj);
            console.log($scope.industrySnippets);
          }
        });
    };


  }); //end mainCtrl
