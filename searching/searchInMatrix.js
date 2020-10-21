function searchInSortedMatrix(matrix, target) {
    let m = 0;
      let n = matrix[0].length - 1;
      while (m < matrix.length && n >= 0) {
          if (matrix[m][n] > target) n--;
          else if (matrix[m][n] < target) m++;
          else return [m, n];
      }
      return [-1 , -1];
  }
  
  // Do not edit the line below.
  exports.searchInSortedMatrix = searchInSortedMatrix;
  