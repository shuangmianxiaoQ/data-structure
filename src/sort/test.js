import bubbleSort from "./bubble";
import selectionSort from "./selection";

const arr1 = [5, 1, 1, 2, 0, 0];
bubbleSort(arr1);
console.log(arr1, "bubbleSort");

const arr2 = [5, 1, 1, 2, 0, 0];
selectionSort(arr2);
console.log(arr2, "selectionSort");
