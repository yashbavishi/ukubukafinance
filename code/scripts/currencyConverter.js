app.controller('currencyConverter', function($scope, $http, $window, $location, $anchorScroll) {
  $scope.form = {};
  $scope.masterform = {};
  $scope.currencies = [ {name: 'Rupee', value: "RUP"}, {name: 'BITCNY', value: 'BITCNY'}, {name: 'Bitcoin', value: 'BIT'}];
  $scope.returnPath = '';
  $scope.myVar = false;


$scope.gotoTop = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('top');

      // call $anchorScroll()
      $anchorScroll();
    };

$scope.getChart =  function(form) {
  angular.copy($scope.form, $scope.masterform);  
  $scope.myVar = true;
  var data = {
        "from": $scope.form.from,
        'to': $scope.form.to    
    };
  
  $http.post('ukubukafinance:6090/api/v1/data/fx', data
   
  ).then(function (response) {
    
    $scope.returnPath = response.data;
     
   });
   //$scope.getAllRecords(); 
   $scope.isDisabled = false;
   $scope.selectDefaults();
}

});
