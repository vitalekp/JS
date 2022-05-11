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

// parseUser('{"name":"Tom"}');
