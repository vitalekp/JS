'use strict';

function getSum(arr) {
  let sumArr = 0;
  if (!Array.isArray(arr)) {
    return null;
  }

  for (let sum of arr) {
    sumArr += sum;
  }

  return sumArr;
}

// examples
getSum([1, 10, -10, 4]); // ==> 5
getSum([1]); // ==> 1
getSum([-8, 8]); // ==> 0
getSum(10, 12, 14); // ==> null
