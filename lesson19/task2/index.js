const getOwnProps = obj => {
  let keyArr = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] !== 'function') {
      keyArr.push(key);
    }
  }
  return keyArr;
};
