const calc = (expr) => {
  const [a, operator, b] = expr.split(' ');
  let result;

  switch (operator) {
    case '+':
      result = +a + +b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  }
  
  return `${expr} = ${result}`;
};

console.log(calc('1 - 5748'));
