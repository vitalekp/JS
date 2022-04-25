'use strict';

// input: num
// output: object

export const calc = initValue => {
  let result = initValue;
  const calculator = {
    add(value) {
      result += value;
      return this;
    },
    subtract(value) {
      result -= value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    result() {
      return result;
    },
  };

  return calculator;
};

// test data

const test = calc(3).add(2).mult(4).subtract(5).div(3).result();
console.log(test);
