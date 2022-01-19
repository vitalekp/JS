// simple assertions

it('My first test', () => {
  expect(17).toEqual(17);
});


it('My second test', () => {
  expect(18).toEqual(17);
});

const getEvenNumbers = num => num.filter(el => el % 2 === 0);
it('should get even numbers only', () => {
  const test = getEvenNumbers([1, 2, 3, 4, 5]);
  expect(test).toEqual([2, 4]);
});


