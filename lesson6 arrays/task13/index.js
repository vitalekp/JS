function withdraw(clients, balances, client, amount) {
  const clientIndex = clients.indexOf(client);

  if (amount > balances[clientIndex]) {
    return -1;
  }

  balances[clientIndex] -= amount;
  return balances[clientIndex];
}


withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);