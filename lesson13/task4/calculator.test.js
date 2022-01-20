import {calc} from './calculator';

it('should get result of expression', () => {
  const resPlus = calc('1 + 2');
  const resMin = calc('1 - 2');
  const resMultpl = calc('2 * 2');
  const resDivision = calc('6 / 2');
  const resGetArr = calc([1, 2]);

  expect(resPlus).toEqual('1 + 2 = 3');
  expect(resMin).toEqual('1 - 2 = -1');
  expect(resMultpl).toEqual('2 * 2 = 4');
  expect(resDivision).toEqual('6 / 2 = 3');
  expect(resGetArr).toEqual(null);
});
