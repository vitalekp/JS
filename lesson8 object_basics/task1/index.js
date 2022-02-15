const transformToObject = (arr) => {
  const obj = {};
  for (let key of arr) {
    obj[key] = key;
  }
  return obj;
};

// examples
transformToObject(['a', 17.1, 'John Doe']); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
