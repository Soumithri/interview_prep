// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array) {
	return _productSum(array, 1);
}

function _productSum(array, count) {
	var total = 0;
	if (array.length < 1) {
		return null;
	}
	for(var i=0; i<array.length; i++) {
		if(Array.isArray(array[i])) {
			total += _productSum(array[i], count+1);
		} else {
			total += array[i];
		}
	}
	return total * count;
}

// Do not edit the line below.
exports.productSum = productSum;