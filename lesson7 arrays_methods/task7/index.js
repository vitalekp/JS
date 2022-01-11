const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.map(evenNum => (evenNum % 2 === 0) ? evenNum + delta : evenNum);
}

const arrNum = [1, 2, 3, 4];
console.log(increaseEvenEl(arrNum, 10));