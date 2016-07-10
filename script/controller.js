
var app = angular.module ("myApp.controller", []);


app.controller("MarkerAnimationCtrl", function ($http, $scope) {
	var ENDPOINT = "./data/places.json"; //donde queremos que nos lea		
	$http.get(ENDPOINT).then(function(response) {
		var item = response.data;//data ya viene definido, es para que la respuesta me de los datos
		$scope.places = response.data;

	});
		$scope.query = {};
		$scope.setQuery = function(parameter) {
		  if ($scope.query[parameter]) {
		      delete $scope.query[parameter]
		  } else {
		      $scope.query[parameter] = true;
		  }
		};

});

app.controller("indexController", function () {

});

