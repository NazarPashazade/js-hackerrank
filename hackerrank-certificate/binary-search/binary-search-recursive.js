let recursiveFunction = function(arr, x, start, end) {
    if (start > end) return false;

    const mid = Math.floor((end + start) / 2);

    if (arr[mid] == x) return true;

    if (arr[mid] < x) {
        return recursiveFunction(arr, x, mid + 1, end);
    } else {
        return recursiveFunction(arr, x, 0, mid - 1);
    }
};

const arr = [1, 3, 4, 5];
const result = recursiveFunction(arr, 1, 0, arr.length - 1);

console.log(result);