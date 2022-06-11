const insertionSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    // 从第二个数开始往前比较
    const x = arr[i + 1];
    let j;
    for (j = i; j >= 0; j--) {
      // 如果比取出的数大，则往后移以为
      if (arr[j] > x) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    // 最后将取出的数插到合适位置
    arr[j + 1] = x;
  }
};

export default insertionSort;
