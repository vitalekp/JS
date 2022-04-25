'use strict';

export const mult = firstNum => secondNum => firstNum * secondNum;

export const twice = firstNum => mult(firstNum)(2);

export const triple = firstNum => mult(firstNum)(3);

// test data
const res = mult(10)(2);
console.log(res);

const res2 = twice(30);
console.log(res2);

const res3 = triple(2);
console.log(res3);
