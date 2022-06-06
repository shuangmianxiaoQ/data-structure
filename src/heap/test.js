import MinHeap from "./min-heap";

const heap = new MinHeap();

heap.insert(5);
heap.insert(7);
heap.insert(14);
heap.insert(8);
heap.insert(3);
heap.insert(9);
heap.insert(10);

heap.pop();
heap.pop();

console.log(heap);
console.log(heap.peek());
console.log(heap.length());
