'use strict';

// input: Date, Date
// out: string

// algo
// 1 знайти різницю мілісек в датах
// 2 створити змінні для визчачення в мілісек - дня, год, хв, сек
// 3 обчислити різницю в днях, год, хв, сек
// 4 вивести рядок

export const getDiff = (startDate, endDate) => {
  const diffTime = Math.abs(startDate - endDate);

  const days = 1000 * 60 * 60 * 24;
  const hours = days / 24;
  const minutes = hours / 60;
  const seconds = minutes / 60;

  const dayDiff = Math.trunc(diffTime / days);
  const hourDiff = Math.trunc((diffTime % days) / hours);
  const minuteDiff = Math.trunc((diffTime % hours) / minutes);
  const secondDiff = Math.trunc((diffTime % minutes) / seconds);

  return `${dayDiff}d ${hourDiff}h ${minuteDiff}m ${secondDiff}s`;
};

// test data

const test = getDiff(new Date(), new Date(2000, 10));
const test2 = getDiff(new Date(), new Date(2021, 4, 19));

console.log(test);
console.log(test2);
