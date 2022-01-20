import {getMinSquaredNumber} from './getMinSquaredNumber.js';

it('should get min squared number of array', () => {
  const result = getMinSquaredNumber([]);
  const result2 = getMinSquaredNumber('test');
  const result3 = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(null);
  expect(result2).toEqual(null);
  expect(result3).toEqual(4);
});
