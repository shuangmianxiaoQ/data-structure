const bubbleSort = (arr) => {
  const len = arr.length;
  let noSwaps;
  for (let i = 0; i < len - 1; i++) {
    // flag for optimization
    noSwaps = true;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
};

export default bubbleSort;
