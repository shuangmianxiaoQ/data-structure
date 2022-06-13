const partition = (arr, l, r) => {
  const pivot = arr[r];
  let pIndex = l;
  for (let i = l; i < r; i++) {
    if (arr[i] < pivot) {
      // 小于基准值交换左右指针位置，并移动左指针
      [arr[pIndex], arr[i]] = [arr[i], arr[pIndex]];
      pIndex++;
    }
  }
  // 交换左指针与基准值
  [arr[pIndex], arr[r]] = [arr[r], arr[pIndex]];
  return pIndex;
};

const quickSort = (arr, l = 0, r = arr.length - 1) => {
  if (l < r) {
    const pIndex = partition(arr, l, r);
    quickSort(arr, l, pIndex - 1);
    quickSort(arr, pIndex + 1, r);
  }
};

export default quickSort;
