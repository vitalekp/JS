'use strict';

// const { reduce } = require("prettier");

function buildObject(keysList, valuesList) {
  return valuesList.reduce((acc, cur, i) => {
    acc[keysList[i]] = cur;
    return acc;
  }, {});
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);