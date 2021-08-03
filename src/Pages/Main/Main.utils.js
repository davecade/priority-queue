function quickSort(array, sortBy) {
    quickSortHelper(array, 0, array.length-1, sortBy)
    return array;
}

function swap(i, j, array) {
    let temp = array[j];
    array[j] = array[i]
    array[i] = temp
}

function quickSortHelper(array, startIdx, endIdx, sortBy) {
    let legend = {}

    if(sortBy==='status') {
        legend = {
            "new": 1,
            "in progress": 2,
            "resolved": 3
        }
    } else if(sortBy==='priority') {
        legend = {
            "high": 1,
            "medium": 2,
            "low": 3
        }
    }

    if(startIdx >= endIdx) return;
    const pivotIdx = startIdx;
    let leftIdx = startIdx+1;
    let rightIdx = endIdx

    while(rightIdx >= leftIdx) {
        if(legend[array[leftIdx][sortBy]] > legend[array[pivotIdx][sortBy]] && legend[array[rightIdx][sortBy]] < legend[array[pivotIdx][sortBy]]) {
        swap(leftIdx, rightIdx, array)
        }

        if(legend[array[leftIdx][sortBy]] <= legend[array[pivotIdx][sortBy]]) leftIdx++;
        if(legend[array[rightIdx][sortBy]]>= legend[array[pivotIdx][sortBy]]) rightIdx--;
    }
    swap(pivotIdx, rightIdx, array);
    const leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
    if(leftSubarrayIsSmaller) {
        quickSortHelper(array, startIdx, rightIdx-1, sortBy);
        quickSortHelper(array, rightIdx + 1, endIdx, sortBy);

    } else {
        quickSortHelper(array, rightIdx+1, endIdx, sortBy);
        quickSortHelper(array, startIdx, rightIdx-1, sortBy);
    }

}

export default quickSort;