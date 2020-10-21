function longestPeak(array) {
    let longestPeakLength = 0;
      let i = 0;
      let j = 0;
      let k = 0;
  
      while (i<array.length-1 || j<array.length-1 || k<array.length-1) {
          while (array[k] < array[k+1] && (k < array.length-1)) k++;
          j = k;
          while(array[j] > array[j+1] && (j < array.length-1)) j++;
          if (i < k && k < j) {
              longestPeakLength = Math.max(longestPeakLength, j-i+1);
          }
          if (i<array.length-1 || j<array.length-1 || k<array.length-1) {
              k++;
              i = k;
              j = k;
          } else {
              break;
          }
      }
      return longestPeakLength;
  }
  
  // Do not edit the line below.
  exports.longestPeak = longestPeak;
  