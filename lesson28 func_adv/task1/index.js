'use strict';

// input: num
// output: object

const calc = initValue => {
  let result = initValue;
  const calculator = {
    add(value) {
      result += value;
      return this;
    },
    substract(value) {
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

const test = calc(10).add(5).result();
console.log(test);
