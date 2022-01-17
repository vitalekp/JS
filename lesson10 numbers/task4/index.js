const getRandomNumbers = (length, from, to) => {
  if(to - from < 1) {
    return null;
  }
const min = Math.ceil(from);
const max = Math.floor(to);

const randomArr = [];
for(let i = 0; i < length; i++) {
  randomArr.push(Math.round(Math.random() * (max - min) + min));
}
  
  return randomArr;
};


// examples
// getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]

console.log(getRandomNumbers(5, 1.4, 2.22));

// examples
// getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]

console.log(getRandomNumbers(5, 1.4, 3.22));


  // const a = randomArr.reduce((acc, el) => {
  //   el = Math.random() * (to - from) + from;
  //   return acc + el;
  // }, [])