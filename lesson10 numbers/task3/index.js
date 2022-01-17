const getTotalPrice = arr => {
  const totalSum = arr.reduce((acc, el) => acc += el, 0);

  return `$${Math.floor(totalSum * 100) / 100}`;
}

console.log(getTotalPrice([1, 2, 4.6543, 3.155]));