function bubbleSort(array) {
    if (!array || array.length === 1) {
        return array;
    }
    var swaps;
    for (var i = 0; i < array.length - 1; i++) {
        swaps = 0;
        for (var j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j+1]) {
                array = swap(j, j+1, array);
                swaps++;
            }
        }
        if (swaps === 0) {
            return array;
        }
    }
    return array;
}

function swap(i, j, array)  {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
}

var x = bubbleSort([3, 2, 1]);
console.log(x);