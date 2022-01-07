'use strict';

function swap(numbers) {
  const [start, ...rest] = numbers;
  return [...rest, start];
}

function swapManual(numbers) {
  const newArr = numbers.slice();
  console.log(newArr);
  const endArr = newArr.shift();
  newArr.push(endArr);
  return newArr;
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
