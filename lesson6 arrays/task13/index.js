function withdraw(clients, balances, client, amount) {
  let balance = -1;
  for(let i = 0; i < clients.length; i++) {
    if(clients[i] === client) {
      if(balances[i] - amount >= 0) {
        balance = balances[i] - amount;
      } 
    }
  }
  return balance;
}


withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 50);