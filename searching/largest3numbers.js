function findThreeLargestNumbers(array) {
    if (array.length < 3) {
          return "Array length < 3";
      }
      var result = [array[0], array[1], array[2]];
      result = bubbleSortArray(result);

      for(var i=3; i<array.length; i++) {
          for(var j=0; j<result.length; j++) {
              if(array[i] > result[j]) {
                  result[j] = array[i];
                  result = bubbleSortArray(result);
                  j = result.length;
              }
          }
      }
      return result;
  }
  
  function bubbleSortArray(arr) {
      var swaps, temp;
      for (var i=0; i<arr.length; i++) {
          swaps = 0
          for (var j=0; j<arr.length-i-1; j++) {
              if (arr[j] > arr[j+1]) {
                  temp = arr[j+1];
                  arr[j+1] = arr[j];
                  arr[j] = temp;
                  swaps++;
              }
          }
          if(swaps === 0) {
              return arr;
          }
      }
      return arr;
  }
  // Do not edit the line below.
  exports.findThreeLargestNumbers = findThreeLargestNumbers;
  