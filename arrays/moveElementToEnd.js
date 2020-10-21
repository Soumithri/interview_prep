// Given an array and toMove element in array
// Move all toMove elements in the array to the end in place
// NOTE: order does not matter for the result

// array = [2, 1, 4, 2, 4, 3, 2] toMove = 2
// Output = [1, 4, 4, 3, 2, 2 , 2]

function moveElementToEnd(array, toMove) {
    let left = 0;
      let right = array.length - 1;
      while (left < right) {
          while (array[left] !== toMove && left < right) left++;
          while (array[right] === toMove && left < right) right--;
          swap(array, left, right);
          left++;
          right--;
      }
      return array;
  }
  
  function swap(array, left, right) {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
  }