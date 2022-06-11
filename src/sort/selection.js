const selectionSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    // 假设第一个元素为最小值
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      // 遍历后面的元素，如果小于假设的最小值，则将该元素设为新的最小值
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 如果是最小值就是自己，就不用交换了
    if (i !== minIndex) {
      // 将交换假设的最小值与新的最小值
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
};

export default selectionSort;
