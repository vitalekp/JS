'use strict';

// algo
// 1 створити func getGreenwichTime(date), date - обєкт дати +++
// 2 вернути час в форматі 13:13 (початкова дата незмінна) +++
// 3 експортувати func

const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});
const getGreenwichTime = date => formatter.format(date);

// test data

const test = getGreenwichTime(new Date(2000, 5, 17));
const test2 = getGreenwichTime(new Date());

console.log(test2);
