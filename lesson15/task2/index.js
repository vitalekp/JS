export const createCalculator = () => {
  let memory = 0;

  function add(num) {
    return memory = num + memory;
  }; 

  function decrease(num) {
    return memory = memory - num;
  }; 

  function reset() {
    return memory = 0;
  }; 

  function getMemo() {
    return memory;
  }; 

  return {
    add,
    decrease,
    reset,
    getMemo
  }
};


const calc = createCalculator();

console.log(calc.add(10));
console.log(calc.add(10));
console.log(calc.add(10));
console.log(calc.decrease(10));
console.log(calc.reset());