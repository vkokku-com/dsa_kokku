function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minValIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minValIndex]) {
                minValIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minValIndex];
        arr[minValIndex] = temp;
    }
    return arr;
}

const list = [7, 12, 9, 4, 11];
console.log('Actual array:', list);
console.log('Sorted array:', selectionSort(list));
console.log('Sorted array:', list);