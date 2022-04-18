'use strict';
// algo
// 1 створити масив з днями тижня +++
// 2 створити func dayOfWeek (date, days) +++
// 3 взяти з date число(номер дня) і помістити в перемінну day +++
// 4 добавити day + days +++
// 5 вивести масив з індексом [day + days]

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
};

// test data

console.log(dayOfWeek(new Date(), 10));
console.log(dayOfWeek(new Date(), 30));
console.log(dayOfWeek(new Date(2020, 5, 1), 20));
