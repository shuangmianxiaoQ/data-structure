export default class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  /** 插入值与父节点值交换，直到父节点小于等于这个插入值 */
  shiftUp(index) {
    if (index === 0) return;
    let parentIndex = (index - 1) >> 1;
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  /** 新堆顶与左右子节点交换，知道子节点大于这个新堆顶 */
  shiftDown(index) {
    let leftIndex = 2 * index + 1;
    let rightIndex = 2 * index + 2;
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }

  insert(value) {
    this.heap.push(value);
    // 将尾元素上移
    this.shiftUp(this.heap.length - 1);
  }

  pop() {
    // 数组尾元素替换堆顶，直接删除会破坏堆结构
    this.heap[0] = this.heap.pop();
    // 下移
    this.shiftDown(0);
  }

  peek() {
    return this.heap[0];
  }

  length() {
    return this.heap.length;
  }
}
