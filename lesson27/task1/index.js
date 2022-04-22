'use strict';

// getLocalStorage

// localStorage.clear();
// localStorage.setItem('name', 'Tom');

// localStorage.setItem('name', JSON.stringify({ name: 'Tom' }));
// localStorage.setItem('work', JSON.stringify('builder'));
// localStorage.setItem('age', JSON.stringify(17));
// localStorage.setItem('a', 'Ter');

// const res = JSON.parse(localStorage.getItem('names'));
// console.log(res);

const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

// test data

const test = getLocalStorageData();
console.log(test);
