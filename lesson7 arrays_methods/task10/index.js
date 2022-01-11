const sum = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.reduce((acc, num) => acc + num, 0);
};

console.log(sum([1, 2, -3]));
