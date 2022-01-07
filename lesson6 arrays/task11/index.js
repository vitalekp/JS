function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let minNum = arr[0];
  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  console.log(minNum, maxNum);
  return Boolean(minNum + maxNum > 1000);
}

checker([1, 5, 10000]);
