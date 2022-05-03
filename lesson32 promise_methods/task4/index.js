const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

/*
 * создай промис и присвой переменной resultPromise
 * чтобы в консоль вывелась сумма всех чисел из трех промисов
 */

// input: obj(promise), obj(promise), obj(promise)...
// ouput: obj(promise)

// const resultPromise = (...promiseNumber) => {
//   return Promise.all(promiseNumber).then(num => console.log(num));
// };

const promiseNumbers = [promiseNumber1, promiseNumber2, promiseNumber3];

export const resultPromise = new Promise(resolve => {
  resolve(Promise.all(promiseNumbers));
});

resultPromise
  .then(numbersList => {
    console.log(numbersList);
    const sum = numbersList.reduce((acc, num) => acc + num, 0);
    return sum;
  })
  .then(result => {
    console.log(result); // 98
  });
