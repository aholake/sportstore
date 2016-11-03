angular.module('cart', [])
    .factory('cart', function() {
        var cartData = [];
        return {
            addProduct: function(id, name, price) {
                var addedToExistingItem = false;
                for (var i = cartData.length - 1; i >= 0; i--) {
                    if (cartData[i].id == id) {
                        cartData[i].count++;
                        addedToExistingItem = true;
                        break;
                    }
                }

                if (!addedToExistingItem) {
                    cartData.push({
                        count: 1,
                        id: id,
                        name: name,
                        price: price
                    });
                }
            },
            removeProduct: function(id) {
                for (var i = cartData.length - 1; i >= 0; i--) {
                    if (cartData[i].id == id) {
                        cartData.splice(i, 1);
                        break;
                    }
                }
            },

            getProducts: function() {
                return cartData;
            }
        }
    })
    .directive("cartSummary", function(cart) {
        return {
            restrict: "E",
            templateUrl: '../components/cart/cartSummary.html',
            controller: function($scope) {
                var cartData = cart.getProducts;
                $scope.total = function() {
                    var total = 0;
                    angular.forEach(cartData, function(key, value) {
                        total += value.price;
                    });
                    return total;
                }

                $scope.itemCount = function() {
                    var count = 0;
                    angular.forEach(cartData, function(key, value) {
                        count += value.count;
                    });
                    return count;
                }
            }
        }
    })