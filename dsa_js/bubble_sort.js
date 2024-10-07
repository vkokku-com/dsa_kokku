function bubble_sort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const list = [7, 12, 9, 4, 11];
console.log('Actual array:', list);
console.log('Sorted array:', bubble_sort(list));
console.log('Sorted array:', list);