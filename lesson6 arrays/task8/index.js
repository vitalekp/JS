'use strict';

const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  let arrEvenEl = arr.slice();
  for (let i = 0; i < arrEvenEl.length; i++) {
    if (arrEvenEl[i] % 2 === 0) {
      arrEvenEl[i] = arrEvenEl[i] + delta;
    }
  }
  return arrEvenEl;
};

// examples
increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []
