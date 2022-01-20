import { withdraw } from "./withdraw";

it('should return balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
});

it('should check if the balance of money is biggest than the amount', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 88);

  expect(result).toEqual(-1);
});