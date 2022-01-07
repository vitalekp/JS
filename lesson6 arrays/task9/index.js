function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let reverseArr = [];

  for (let num of arr) {
    reverseArr.unshift(num);
  }
  return reverseArr;
}

reverseArray([1, 2, 3, 4]);
