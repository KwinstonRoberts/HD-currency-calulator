var app = angular.module('HomeDepotApp', [])

app.service('RateFinder', ['$http', function($http) {

  var getRates = {

    async: function(currency) {

      var promise = $http.get('https://api.fixer.io/latest?base=' + currency.toString()).then(function(res, status) {
        return res.data;
      });
      return promise;
    }
  };
  return getRates;

}]);

app.controller('converterCTRL', ['$scope', 'RateFinder', function($scope, RateFinder) {

      $scope.disclaimer =true;
      $scope.amountToConvert = 0;
      $scope.amountConverted = 0;

      $scope.currencyCodes = [{
        id: 1,
        name: "CAD"
      }, {
        id: 2,
        name: "USD"
      }, {
        id: 3,
        name: "EUR"
      }];

      $scope.amountCurrency = $scope.currencyCodes[0];
      $scope.convertedCurrency = $scope.currencyCodes[1];


      $scope.getRates = function() {
        RateFinder.async($scope.amountCurrency.name).then(function(d) {
            $scope.amountConverted = +($scope.amountToConvert * d.rates[$scope.convertedCurrency.name]).toFixed(2);
            });
        }
      }]);
