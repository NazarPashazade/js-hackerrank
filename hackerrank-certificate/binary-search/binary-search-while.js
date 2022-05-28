let binarySearchWhile = function(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((end + start) / 2);

    while (start <= end) {
        if (arr[mid] == x) return true;

        if (arr[mid] > x) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return false;
};

const arr = [1, 3, 4, 5];
const result = binarySearchWhile(arr, 3);

console.log(result);