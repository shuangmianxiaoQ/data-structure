const merge = (left, right) => {
  const res = [];
  while (left.length && right.length) {
    // 比较两个数组头部，较小者推入数组
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  // 合并两个有序数组
  return res.concat(left, right);
};

const mergeSort = (arr) => {
  const len = arr.length;
  if (len === 1) return arr;
  const midIdx = len >> 1;
  const left = arr.slice(0, midIdx);
  const right = arr.slice(midIdx);
  // 递归拆分子数组，直到分成只有一个数的数组
  return merge(mergeSort(left), mergeSort(right));
};

export default mergeSort;
