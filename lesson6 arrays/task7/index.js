function checkSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  
  let sumArr = 0;
  for (let sum of arr) {
    sumArr += sum;
  }

  return Boolean(sumArr > 100);
}

checkSum([10, 15]);