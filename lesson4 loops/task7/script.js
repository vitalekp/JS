let sum = 0;

for (let i = 0; i <= 1000; i += 1) {
  if (i % 2 === 1) {
    console.log('Found');
    sum += i;
  }
}

if (sum * 5 > 5000) {
  console.log('Bigger');
} else {
  console.log('Smaller or equal');
}
console.log(sum);
