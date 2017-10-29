app.controller('currencyConverter', function($scope, $http, $window, $location, $anchorScroll) {
  $scope.form = {};
  $scope.masterform = {};
  $scope.currencies = [ {name: "Rupee", value: "RUP"}, {name: "BITCNY", value: "BITCNY"}, {name: "Bitcoin", value: "BIT"}];
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
        "to": $scope.form.to,
        "operations": [
          {
            "type": "ADD",
            "source": $scope.form.addSource,
            "target": $scope.form.addTarget
          },
          {
            "type": "SUM",
            "source": $scope.form.sumSource,
            "target": $scope.form.sumTarget
          },
          {
            "type": "INCLUDE",
            "source": $scope.form.includeSource
          },
          {
            "type": "AVG",
            "source": $scope.form.avgSource,
            "target": $scope.form.avgTarget
          },
          {
            "type": "MIN",
            "source": $scope.form.minSource,
            "target": $scope.form.maxTarget
          },
          {
            "type": "MAX",
            "source": $scope.form.maxSource,
            "target": $scope.form.maxTarget
          }
        ]  
    };

  $http.post('ukubukafinance:6090/api/v1/data/fx', data
   
  ).then(function (response) {
    
    $scope.returnPath = response.data;
     
   });
   $scope.isDisabled = false;
}

});
