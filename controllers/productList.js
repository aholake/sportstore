angular.module("sportStore")
	.constant("activeCategoryClass", "btn-primary")
	.constant("productListPageCount", 2)
	.controller("productListCtrl", function($scope, $filter, activeCategoryClass, productListPageCount, cart) {
		var selectedCategory = null;

		$scope.selectedPage = 1;
		$scope.pageSize = productListPageCount;

		$scope.selectCategory = function(newCategory) {
			selectedCategory = newCategory;
			$scope.selectedPage = 1;
		}

		$scope.categoryFilterFn = function(product) {
			return selectedCategory == null || product.category == selectedCategory;
		}

		$scope.getActiveClass = function(category) {
			return selectedCategory == category ? activeCategoryClass : "";
		}
		
		$scope.selectPage = function(newPage) {
			$scope.selectedPage = newPage;
		}

		$scope.getActivePageClass = function(page) {
			return $scope.selectedPage == page ? activeCategoryClass:"";
		}

		$scope.addToCart = function(item) {
			cart.addProduct(item.id, item.name, item.price);
		}
	})