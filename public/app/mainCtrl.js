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
      $scope.companyData.filter(function(obj) {
          if(obj.territory === $scope.territory) {
            $scope.customerSnippets.push(obj)
            console.log($scope.customerSnippets);
          }
        })
    }

    $scope.filterIndustryData = function() {
      $scope.industryData.filter(function(obj) {
          if(obj.industry === $scope.industry) {
            $scope.industrySnippets.push(obj)
            console.log($scope.industrySnippets);
          }
        })
    }


  }); //end mainCtrl
