function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.slice();
}

cloneArr([1, 2, 3]);
