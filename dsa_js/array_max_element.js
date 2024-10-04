function findMaxElement(arr) {
    let maxElement = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement;
}
const list = [7, 12, 9, 4, 11]
console.log(findMaxElement(list));