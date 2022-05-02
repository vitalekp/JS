// input: number
// output: obj(promise)

// algo
// 1 вивести в консоль через 500мс 'Initial value: (num)' +++
// 2 вивести в консоль через 500мс квадрат num 'Squared value: (num)'
// 3 вивести в консоль num * num 'Doubled value: (num)'
// 4 test

const asyncCalculator = num =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(`Initial value: ${num}`);
      resolve(num);
    }, 500);
  })
    .then(
      value =>
        new Promise(resolve => {
          setTimeout(() => {
            const result = value ** 2;
            console.log(`Squared value: ${result}`);
            resolve(result);
          }, 500);
        }),
    )
    .then(value => {
      const result = value * 2;
      console.log(`Doubled value: ${result}`);
      return result;
    });

// test data
// asyncCalculator(10)
//   .then(value => value * 2)
//   .then(value => console.log(value * 3));
