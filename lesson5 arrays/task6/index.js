function getPrimes(num) {
  for (let i = 2; i <= num; i += 1) {
    if (primes(i)) {
      console.log(i);
    }
  }
}
function primes(num) {
  for (let j = 2; j < num; j += 1) {
    if (num % j === 0 && num > 1) {
      return false;
    }
  }

  return num;
}


getPrimes(50);

console.log(3 % 3);
