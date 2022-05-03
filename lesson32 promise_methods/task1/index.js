// input: obj(promise), obj(promise)...
// output: obj(promise)

// algo
// 1 create func asyncSum() +++
// 2 calculate the sum of all promises +++
// 3 discard all values that are not converted to a number +++
// 4 reject a promise with an error 'Can't calculate\'
// if at least one rejected promise is received as input
// 5 return promise +++

export const asyncSum = (...asyncSum) => {
  return Promise.all(asyncSum).then(numbers =>
    numbers.filter(num => !isNaN(num)).reduce((acc, num) => acc + Number(num), 0),
  );
};
