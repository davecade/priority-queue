
// -- Quick Sort Aglorithm
export function quickSort(array, sortBy) {
    if(sortBy==='id') return;
    
    quickSortHelper(array, 0, array.length-1, sortBy)
    return array;
}

function swap(i, j, array) {
    let temp = array[j];
    array[j] = array[i]
    array[i] = temp
}

function quickSortHelper(array, startIdx, endIdx, sortBy) {
    let key = {}

    if(sortBy==='status') {
        key = {
            "new": 1,
            "in progress": 2,
            "resolved": 3
        }
    } else if(sortBy==='priority') {
        key = {
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
        let variableLeftIdx = null
        let variableRightIdx = null
        let variablePivotIdx = null

        if(sortBy==='lastUpdated'){       
            let dateLeftIdx = new Date(array[leftIdx][sortBy]).getTime()
            let dateRightIdx = new Date(array[rightIdx][sortBy]).getTime()
            let datePivotIdx = new Date(array[pivotIdx][sortBy]).getTime()
            variableLeftIdx = dateLeftIdx
            variableRightIdx = dateRightIdx
            variablePivotIdx = datePivotIdx
        } else {
            variableLeftIdx = key[array[leftIdx][sortBy]]
            variableRightIdx = key[array[rightIdx][sortBy]]
            variablePivotIdx = key[array[pivotIdx][sortBy]]
        }

        if(variableLeftIdx > variablePivotIdx && variableRightIdx < variablePivotIdx) {
        swap(leftIdx, rightIdx, array)
        }

        if(variableLeftIdx <= variablePivotIdx) leftIdx++;
        if(variableRightIdx>= variablePivotIdx) rightIdx--;
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


//-- Custom Date Format
export function dateTimeFormatter(date) {
    const day = new Date(date).getDate()
    const month = new Date(date).getMonth()
    const year = new Date(date).getFullYear()
    const hour = new Date(date).getHours()
    const minute = new Date(date).getMinutes()
    const z = num => num<10 ? `0${num}` : num
    const y = num => num.toString().slice(2)

    return `${z(day)}/${z(month)}/${y(year)} - ${z(hour)}:${z(minute)}`
}


