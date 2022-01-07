'use strict';

function getSpecialNumbers(from, to) {
  let specialNumbers = [];
  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) {
      specialNumbers.push(i);
    }
  }
  return specialNumbers;
}

// examples
getSpecialNumbers(1, 10); // ==> [3, 6, 9]
getSpecialNumbers(-10, 10); // ==> [-9, -6, -3, 0, 3, 6, 9]
getSpecialNumbers(1, 2); // ==> [ ]
