const getFiniteNumbers = arr => arr.filter(num => Number.isFinite(num));

const getFiniteNumbersV2 = arr => arr.filter(num => isFinite(num));

const getNaN = arr => arr.filter(nan => Number.isNaN(nan));

const getNaNV2 = arr => arr.filter(nan => isNaN(nan));

const getIntegers = arr => arr.filter(el => Number.isInteger(el));

console.log(getIntegrs([1, 3, undefined, 5.000000000000001]));
