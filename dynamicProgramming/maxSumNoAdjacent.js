// DP solution
function maxSubsetSumNoAdjacent(array) {
	if(!array.length) {
		return 0;
	}
	if(array.length === 1) {
		return array[0];
	}
  var result = new Array(array.length).fill(0);
	result[0] = array[0];
	result[1] = Math.max(array[0], array[1]);
	for(var i=2; i<array.length; i++) {
		result[i] = Math.max(result[i-2] + array[i], result[i-1]);
	}
	return result[result.length-1];
}

// recursion with memoization

// function maxSubsetSumNoAdjacent(array) {
// 	var cache = new Map();
// 	return maxSum(array, array.length-1, cache);
// }

// function maxSum(array, i, cache) {
// 	if(i<0) {
// 		return 0;
// 	}
// 	if(cache.has(i)) {
// 		return cache[i];
// 	}
// 	var result;
// 	result = Math.max(maxSum(array, i-2, cache) + array[i],
// 									 maxSum(array, i-1, cache));
// 	return result;
// }

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
