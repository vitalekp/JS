const squareArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.map(num => num * num);
};

const firstNumArray = [1, 2, 5];
console.log(squareArray(firstNumArray));
