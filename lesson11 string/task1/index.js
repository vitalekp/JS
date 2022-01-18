const splitText = (text, len = 10) => {
  if(!(typeof(text) === 'string')) {
    return null;
  }

  const stringArr = [];
  let startString = 0;

  while(true) {
    let chunk = text.substr(startString, len);
    if (chunk.length === 0) {
      break;
    }
    stringArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startString += len;
  }
 return stringArr.join('\n');
}

console.log(splitText('abcd efgh', 4));