import { binarySearch, binarySearch2 } from "./binary";

const arr = [1, 2, 3, 4, 5, 6, 7];

// console.log('非递归')
// console.log(binarySearch(arr, 3));
// console.log(binarySearch(arr, 7));
// console.log(binarySearch(arr, 10));

console.log("递归");
console.log(binarySearch2(arr, 3));
console.log(binarySearch2(arr, 7));
console.log(binarySearch2(arr, 10));
