function findMinElement(arr) {
    let minElement = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
    }
    return minElement;
}
const list = [7, 12, 9, 4, 11];
console.log(findMinElement(list));