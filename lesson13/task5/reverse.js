export const reverseArray = numbers => {
  if (!Array.isArray(numbers)) {
    return null;
  }

  return numbers.slice().reverse()
}

const arr = [1, 2, 3];
console.log(reverseArray(arr));