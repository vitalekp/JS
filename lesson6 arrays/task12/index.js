function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  for (let n = 0; n < array.length - 1; n += 1) {
    for (let i = 0; i < array.length - 1 - n; i += 1) {
      if (array[i] > array[i + 1]) {
        const buff = array[i];
        array[i] = array[i + 1];
        array[i + 1] = buff;
      }
    }
  }
  return array;
}

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  for (let n = 0; n < array.length - 1; n += 1) {
    for (let i = 0; i < array.length - 1 - n; i += 1) {
      if (array[i] < array[i + 1]) {
        const buff = array[i];
        array[i] = array[i + 1];
        array[i + 1] = buff;
      }
    }
  }
  return array;
}