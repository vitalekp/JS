function findDivCount(a, b, n) {
  let countDiv = 0;
  for (let i = a; i <= b; i += 1) {
    if (i % n === 0) {
      countDiv += 1;
    }
  }
  return countDiv;
}
