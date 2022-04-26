'use strict';

// input: obj (new Date(2020, 0, 7, 17, 17, 17))
// out: obj (with methods)

// algo
// 1 створити функцію shmoment +++
// 2 добавити метод add и substract (можна викликати в ланцюжку в будь якій комбінації) +++
// 2.1 до цих методів добавити можливість працювати з роками, днями, год і т.д. +++
// 3 добавити метод result, який повертає дату після змін +++

// const shmoment = date => {
//   const newFullDate = new Date(date);

//   const editDate = {
//     add(type, value) {
//       if (type === 'years') {
//         newFullDate.setFullYear(newFullDate.getFullYear() + value);
//       }
//       if (type === 'months') {
//         newFullDate.setMonth(newFullDate.getMonth() + value);
//       }
//       if (type === 'days') {
//         newFullDate.setDate(newFullDate.getDate() + value);
//       }
//       if (type === 'hours') {
//         newFullDate.setHours(newFullDate.getHours() + value);
//       }
//       if (type === 'minutes') {
//         newFullDate.setMinutes(newFullDate.getMinutes() + value);
//       }
//       if (type === 'seconds') {
//         newFullDate.setSeconds(newFullDate.getSeconds() + value);
//       }
//       if (type === 'milliseconds') {
//         newFullDate.setMilliseconds(newFullDate.getMilliseconds() + value);
//       }
//       return this;
//     },
//     subtract(type, value) {
//       if (type === 'years') {
//         newFullDate.setFullYear(newFullDate.getFullYear() - value);
//       }
//       if (type === 'months') {
//         newFullDate.setMonth(newFullDate.getMonth() - value);
//       }
//       if (type === 'days') {
//         newFullDate.setDate(newFullDate.getDate() - value);
//       }
//       if (type === 'hours') {
//         newFullDate.setHours(newFullDate.getHours() - value);
//       }
//       if (type === 'minutes') {
//         newFullDate.setMinutes(newFullDate.getMinutes() - value);
//       }
//       if (type === 'seconds') {
//         newFullDate.setSeconds(newFullDate.getSeconds() - value);
//       }
//       if (type === 'milliseconds') {
//         newFullDate.setMilliseconds(newFullDate.getMilliseconds() - value);
//       }
//       return this;
//     },
//     result() {
//       return newFullDate;
//     },
//   };

//   return editDate;
// };

const getDateValue = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};
const setDateValue = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

export const shmoment = date => {
  const newFullDate = new Date(date);

  const editDate = {
    add(type, value) {
      newFullDate[setDateValue[type]](newFullDate[getDateValue[type]]() + value);
      return this;
    },
    subtract(type, value) {
      newFullDate[setDateValue[type]](newFullDate[getDateValue[type]]() - value);
      return this;
    },
    result() {
      return newFullDate;
    },
  };

  return editDate;
};
//  newFullDate.setFullYear(newFullDate.getFullYear() - value);
// test data

const date = new Date(2020, 0, 7, 17, 17, 17);
const test = shmoment(new Date(date))
  .add('years', 200)
  .subtract('years', 100)
  .subtract('years', 100)
  .subtract('months', 2)
  .subtract('minutes', 2)
  .add('minutes', 120)
  .result();

// const dateInFuture = new Date(date).setDate(day + days);

console.log(test);
