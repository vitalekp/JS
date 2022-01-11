function getSum(firstNum, lastNum) {
  let totalSum = 0;
  for (let i = firstNum; i <= lastNum; i += 1) {
    if (i % 2 === 0) {
      totalSum += i;
    }
  }
  return totalSum;
}
