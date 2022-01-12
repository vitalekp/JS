const transformToObject = arr => {
  let objTransform = {};

  for (let keys in arr) {
    objTransform[arr[keys]] = arr[keys];
  }

  return objTransform;
};

// examples
transformToObject(["a", 17.1, "John Doe"]); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }

