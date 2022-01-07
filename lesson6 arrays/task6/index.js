'use strict';

function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let arrSquare = [];
  for (let num of arr) {
    arrSquare.push(num * num);
  }
  return arrSquare;
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
