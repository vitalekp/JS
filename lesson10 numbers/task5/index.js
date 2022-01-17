'use strict';

const superRound = (num, prec) =>  [
    Math.floor(num * 10 ** prec) / 10 ** prec,
    Math.trunc(num * 10 ** prec) / 10 ** prec,
    Math.ceil(num * 10 ** prec) / 10 ** prec,
    Math.round(num * 10 ** prec) / 10 ** prec,
    +num.toFixed(prec),
  ];

// examples
// superRound(11.12556, 2); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
// superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]

console.log(superRound(6.123456, 5));

console.log(10 ** 5);
