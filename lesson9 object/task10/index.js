function compareObjects(obj1, obj2) {
  if (!(Object.keys(obj1).length === Object.keys(obj2).length)) {
    return false;
  }

  const key = Object.keys(obj1).join('');
  const key2 = Object.keys(obj2).join('');
  const value = Object.values(obj1).join('');
  const value2 = Object.values(obj2).join('');

  return key === key2 && value === value2;
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
//   const key = Object.keys(obj1);
//   const key2 = Object.keys(obj2);
//   const value = Object.values(obj1);
//   const value2 = Object.values(obj2);
//   let checkKey = true;
//   let checkValue = true;

//   for (let char of key) {
//     if (key2.includes(char)) {
//       continue;
//     }
//     return false;
//   }

//   for (let char of value) {
//     if (value2.includes(char)) {
//       continue;
//     }
//     return false;
//   }
//   return checkKey && checkValue;
// }
