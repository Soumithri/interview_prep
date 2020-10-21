function insertionSort(array) {
    if(!array || array.length===1) {
        return array;
    }
    var i, j , temp;
    for(i=1; i<array.length; i++) {
        j = i;
        while(j && array[j]<array[j-1]) {
            temp = array[j];
            array[j] = array[j-1];
            array[j-1] = temp;
            j--;
        }
    }
    return array;
  }
  
var ans = insertionSort([-3, 2, 1]);
console.log(ans);
  