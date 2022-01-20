import {reverseArray} from './reverse';

it('should check if the value is an array', () => {
  const checkIsArray = reverseArray('test');

  expect(checkIsArray).toEqual(null);
});

it('should check if the value is an array', () => {
  const checkIsArray2 = reverseArray(1);

  expect(checkIsArray2).toEqual(null);
});

it('should get reverse array', () => {
  const reverseArr = reverseArray([1, 2, 3]);

  expect(reverseArr).toEqual([3, 2, 1]);
});
