// in str
// out obj/null

export const parseUser = jsonStr => {
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    console.log(e);
    return null;
  }
};

parseUser('{"name":"Tom"');

// try {
//   const user = JSON.parse('{"name":"Tom"}');
//   console.log('User data: ', user);
//   userParsingResult = 'success';
// } catch (e) {
//   userParsingResult = 'error';
// }
