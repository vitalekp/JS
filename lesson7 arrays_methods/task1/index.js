const getSpecialNumbers = (numbers) => 
    numbers.filter((num) => num % 3 === 0);

const arr = [1, 3, 6];
console.log(getSpecialNumbers(arr));

// const getSpecialNumbers = numbers => {

//   const result =  numbers.filter(num => {
//       if(num % 3 === 0) {
//         return true;
//       }
//       return false;
//     });

//     return result;
//   }
