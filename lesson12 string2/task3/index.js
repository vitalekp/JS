const cleanTransactionsList = arr => arr
    .filter(el => !isNaN(el))
    .map(el => {
      el.toString().trim();
      el = +el;
      return `$${el.toFixed(2)}`
    });


console.log(cleanTransactionsList([1.15, '  1.3', ' 1 dollar']));


// const cleanTransactionsList = arr => {
//   return arr
//     .filter(el => !isNaN(el))
//     .map(el => {
//       el.toString().trim();
//       return `$${Math.round(el * 100) / 100}`;
//     });
// }
