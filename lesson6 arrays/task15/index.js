'use strict';

const includes = (arr, num) => {
  for (let include of arr) {
    if (include === num) {
      return true;
    }
  }
  return false;
};

// examples
includes([1, 4, 8, 3], 3); // ==> true
includes([1, 4, 8, 3], 5); // ==> false
