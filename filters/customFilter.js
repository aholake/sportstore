angular.module("sportStoreFilter",[])
	.filter("unique", function() {
		return function(data, propertyName) {
			if(angular.isArray(data) && angular.isString(propertyName)) {
				var result = [];
				var keys = {};
				angular.forEach(data, function(item) {
					var val = item[propertyName];
					if(angular.isUndefined(keys[val])) {
						keys[val] = true;
						result.push(val);
					}
				});
				return result;
			} else {
				return data;
			}

		}
	})