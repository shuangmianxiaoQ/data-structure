export const binarySearch = (arr, n) => {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (n === arr[mid]) {
      return mid;
    } else if (n < arr[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
};

export const binarySearch2 = (arr, n, l = 0, r = arr.length - 1) => {
  if (l > r) return -1;
  const mid = Math.floor((l + r) / 2);
  if (n === arr[mid]) return mid;
  if (n < arr[mid]) return binarySearch2(arr, n, l, mid - 1);
  if (n > arr[mid]) return binarySearch2(arr, n, mid + 1, r);
};
