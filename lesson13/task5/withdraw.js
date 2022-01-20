'use strict';

export const withdraw = (clients, balances, client, amount) => {
const indexClient = clients.indexOf(client);

  if(amount > balances[indexClient]) {
    return -1;
  } 

  return balances[indexClient] - amount;
}


console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));


//example 1:

//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)

//output
//37
//и массив balances должен быть [1400, 37, -6]



//example 2:

//input
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)

//output
//-1
//и массив balances должен быть [1400, 87, -6]