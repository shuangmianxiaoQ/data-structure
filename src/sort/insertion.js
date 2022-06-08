const insertionSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    const x = arr[i + 1];
    let j;
    for (j = i; j >= 0; j--) {
      if (arr[j] > x) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = x;
  }
};

export default insertionSort;
