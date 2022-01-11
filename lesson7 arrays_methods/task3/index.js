const flatArray = arr => 
  arr
    .slice()
    .reduce((acc, num) => acc.concat(num), [])
    .sort((a, b) => a - b);
  
console.log(flatArray([4, 2, [4, 5, 6], 1]));
