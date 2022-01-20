export const getMinSquaredNumber = num => {
  if (!Array.isArray(num) || num.length === 0) {
    return null;
  }

  const absNumbers = num.map(Math.abs);
  const minAbsNum = Math.min(...absNumbers);
  const squaredNum = Math.pow(minAbsNum, 2);

  return squaredNum;
}

console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20]));