'use strict';

// input: num, num
// output: undefined

const pinger = (count, period) => {
  let counter = count;
  console.log('Ping');
  const interval = setInterval(() => {
    counter -= 1;
    if (counter > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};

// test data
pinger(5, 100); // makes 5 writes with 100 ms interval
// pinger(7, 150); // makes 7 writes with 1500 ms interval
