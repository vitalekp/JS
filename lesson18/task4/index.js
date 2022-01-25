function saveCalls(func) {
  function withMemory(...args) {
    withMemory.calls.push(args);
    console.log(args);
    return func.apply(this, arguments);
  }
  withMemory.calls = [];

  return withMemory;
}

function test(a, b) {
  return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);
testWithMemory(4, 2, 3);
testWithMemory(9);
testWithMemory(2, 3);

console.log(testWithMemory.calls);

const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveCalls(user.sayHi);

console.log(methodWithMemory.apply({ name: 'Bob' })); 

console.log(methodWithMemory.calls);
