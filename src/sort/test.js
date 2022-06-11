import bubbleSort from "./bubble";
import insertionSort from "./insertion";
import mergeSort from "./merge";
import selectionSort from "./selection";

const arr1 = [5, 1, 1, 2, 0, 0];
bubbleSort(arr1);
console.log(arr1, "bubbleSort");

const arr2 = [5, 1, 1, 2, 0, 0];
selectionSort(arr2);
console.log(arr2, "selectionSort");

const arr3 = [5, 1, 1, 2, 0, 0];
insertionSort(arr3);
console.log(arr3, "insertionSort");

const arr4 = [5, 1, 1, 2, 0, 0];
console.log(mergeSort(arr4), "mergeSort");
