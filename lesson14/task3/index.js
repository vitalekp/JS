let memory = 0;

const add = num => memory = num + memory;
const decrease = num => memory = memory - num;
const reset = () => memory = 0;
const getMemo = () => memory;

export { add, decrease, reset, getMemo };
