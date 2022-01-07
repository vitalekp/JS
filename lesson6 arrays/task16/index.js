function removeDublicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  let newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    if (newArr.includes(array[i])) {
      continue;
    }
    newArr.push(array[i]);
  }
  return newArr;
}

removeDublicates([1, 2, 2, 3, 2]);
