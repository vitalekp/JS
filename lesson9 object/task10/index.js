'use strict';

// input: obj, obj
// output: boolean
function compareObjects(obj1, obj2) {
  const objKeys = Object.keys(obj1);

  if (objKeys.length !== Object.keys(obj2).length) {
    return false;
  }

  return objKeys.every(key => obj1[key] === obj2[key]);
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

compareObjects(obj1, obj2); // ==> false
compareObjects(obj1, obj3); // ==> false
const res = compareObjects(obj1, obj4); // ==> true
console.log(res);

// function compareObjects(obj1, obj2) {
//   if (!(Object.keys(obj1).length === Object.keys(obj2).length)) {
//     return false;
//   }

//   const key = Object.keys(obj1).join('');
//   const key2 = Object.keys(obj2).join('');
//   const value = Object.values(obj1).join('');
//   const value2 = Object.values(obj2).join('');

//   return key === key2 && value === value2;
// }
