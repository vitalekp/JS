let sum = 0;
for (let i = 0; i <= 1000; i += 1) {
  sum += i;
}

let wholePart = Math.trunc(sum / 1234);
let remainder = sum % 1234;
let result = Boolean(wholePart > remainder);
console.log(result); 

