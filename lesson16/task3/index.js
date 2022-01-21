export const createArrayOfFunctions = num => {
  if (!num) {
    return [];
  }
  if(!Number(num)) {
    return null;
  }
  let result = [];

  for(let i = 0; i < num; i++) {
    result[i] = function arr() {
      return i;
    }
  }
  return result;
};

const test = createArrayOfFunctions(9);
console.log(test);
