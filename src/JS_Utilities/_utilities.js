
// -- Sorting Aglorithm
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
        if(key[array[leftIdx][sortBy]] > key[array[pivotIdx][sortBy]] && key[array[rightIdx][sortBy]] < key[array[pivotIdx][sortBy]]) {
        swap(leftIdx, rightIdx, array)
        }

        if(key[array[leftIdx][sortBy]] <= key[array[pivotIdx][sortBy]]) leftIdx++;
        if(key[array[rightIdx][sortBy]]>= key[array[pivotIdx][sortBy]]) rightIdx--;
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
    date = new Date();
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const z = num => num<10 ? `0${num}` : num
    const y = num => num.toString().slice(2)

    return `${z(day)}/${z(month)}/${y(year)} - ${z(hour)}:${z(minute)}`
}


