// input: number
// output: obj(promise)

// algo
// 1 створити функцію delay(time) +++
// (time) - час, через який функція зарезолвить проміс
// 2 delay має вернути promise
// 3 test

export const delay = time =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(console.log('Done'));
    }, time);
  });

// test data
// delay(3000);
// delay(1000);
