import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('should get squared numbers', () => {
  const result = getSquaredArray([1, 2, 3]);

  expect(result).toEqual([1, 4, 9]);
});

it('should get odd numbers only', () => {
  const result = getOddNumbers([1, 2, 3, 4]);

  expect(result).toEqual([1, 3]);
});

it('should get sum of numbers', () => {
  const result = getSum(10, 110);

  expect(result).toEqual(120);
});
