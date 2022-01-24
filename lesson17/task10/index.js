function calculator(a, b) {
  switch (this.operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
}

/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */
const mult = {operation: '*'};
export const multiplier = calculator.bind(mult);

// console.log(multiplier(2, 3));

/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */

const sum = { operation: '+' };
export const summator = calculator.bind(sum);

// console.log(summator(2, 84));

/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */


export const twice = calculator.bind(mult, 2);

// console.log(twice(2));


// const min = { operation: '-' };
// const minus = calculator.bind(min);

// console.log(minus(10, 5));
