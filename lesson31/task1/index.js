'use strict';

// input: string
// output: obj(promise)

// algo
// 1 створити проміс request +++
// 2 перевести проміс в стан rejected, якщо id === 'broken' +++
// 2.1 rejected з помилкою new Error('User not found')
// 3 якщо дані правильні, перевести проміс в стан 'fullfield', з данними у вигляді обєкту
// 3.1 id який приймає функція передати в обєкт, з ключем userId
// test

export const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });

  return request;
};

// test data

// requestUserData('broken')
//   .catch(error => console.log(error))
//   .then(data => console.log(data))
//   .finally(() => console.log(10000));
