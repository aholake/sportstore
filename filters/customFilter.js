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
	.filter("range", function($filter) {
		return function(data, page, size) {
			console.log(size);
			if(angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
				var startIndex = (page - 1) * size;
				if(data.length < startIndex) {
					return [];
				} else {
					return $filter("limitTo")(data, size, startIndex);
				}
			} else {
				return data;
			}
		}
	})
	.filter("pageCount", function() {
		return function(data, size) {
			if(angular.isArray(data) && angular.isNumber(size)) {
				var result = [];
				for(var i = 0; i < Math.ceil(data.length / size); i++) {
					result.push(i);
				}
				return result;
			} else {
				return data;
			}
		}
	})