
angular.module("sportStore")
	.constant("dataUrl", "http://localhost:2403/products")
	.controller("sportStoreCtrl", function($scope, $http, dataUrl) {
		$scope.data = {};

		$http.get(dataUrl)
			.success(function(response) {
				$scope.data.products = response;
			})
			.error(function(error){
				$scope.data.error = error;
			})

	});