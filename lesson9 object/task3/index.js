function getKeys(obj) {
  return Object.keys(obj).forEach((key) => console.log(key));
}

const obj = {
  a: 1,
  b: 2,
};

getKeys(obj);
