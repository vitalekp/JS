const arrAverage = arr => 
  Array.isArray(arr) ? arr.reduce((a, b) => (a + b)) / arr.length : null;

// const arrAverage = arr => {
//   if(!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.reduce((acc, num) =>  acc + num, 0) / arr.length;
// }


console.log(arrAverage([1, 2, 3]));