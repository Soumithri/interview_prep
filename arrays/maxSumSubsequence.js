function maxSumIncreasingSubsequence(array) {
    const subsets = new Array(array.length);
      const sums = array.map(num => num);
      let totalMaxIndex = 0;
      for (let i=0; i<array.length; i++) {
          const currentNum = array[i];
          for (let j=0; j<i; j++) {
              let otherNum = array[j];
              if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
                  sums[i] = sums[j] + currentNum;
                  subsets[i] = j;
              }
          }
          if (sums[i] >= sums[totalMaxIndex]) totalMaxIndex = i;
      }
      return [sums[totalMaxIndex], buildSequence(array, subsets, totalMaxIndex)];
  }
  
  function buildSequence(array, subsets, currentIdx) {
      const seq = [];
      while (currentIdx !== undefined) {
          seq.unshift(array[currentIdx]);
          currentIdx = subsets[currentIdx];
      }
      return seq;
  }
  
  // Do not edit the line below.
  exports.maxSumIncreasingSubsequence = maxSumIncreasingSubsequence;
  