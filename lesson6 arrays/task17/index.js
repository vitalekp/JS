function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let newArr = [];
  let countNumbers = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (newArr.includes(array[i])) {
      continue;
    }
    newArr.push(array[i]);
    countNumbers++;
  }
  return countNumbers;
}

uniqueCount([1, 2, 3, 3]);
