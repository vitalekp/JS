'use strict';

const add2 = value => value + 2;
const square = value => value * value;
const half = value => value / 2;

export const compose =
  (...funcs) =>
  value => {
    return funcs.reduce((acc, func) => func(acc), value);
  };

// test data

const superFunc = compose(add2, square, half);
const res = superFunc(2); // 8

console.log(res);
