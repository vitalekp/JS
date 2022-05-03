// input: string
// output: obj(promise)

// algo
// 1 create func getUserrASAP(userId) +++
// 2 remap the 'server' array +++
// 3 call a function(promise) on each array element +++
// 4 return fastest promise +++

const getRandomNumber = (from, to) => from + Math.random() * (to - from);

const request = url =>
  new Promise(resolve => {
    const randomDelay = getRandomNumber(1000, 4000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });

const server = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];

export const getUserrASAP = userId => {
  const usersUrl = server.map(url => `${url}/${userId}`);

  const requests = usersUrl.map(serverUrl => request(serverUrl));

  return Promise.race(requests);
};

getUserrASAP('lviv').then(result => console.log(result));
