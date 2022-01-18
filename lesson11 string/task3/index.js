const splitString = (text, len = 10) => {
  if (typeof text !== 'string') {
    return null;
  }

  const stringArr = [];
  let startString = 0;

  while (true) {
    let chunk = text.substr(startString, len);

    if (chunk.length < len) {
      stringArr.push(chunk + '.'.repeat(len - chunk.length));
      break;
    }
    stringArr.push(chunk);
    startString += len;
  }
  return stringArr;
};

console.log(splitString('abcd efgh', 4));
