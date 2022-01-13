const getAdults = (objUsers) =>
  Object.entries(objUsers)
    .filter((age) => age[1] >= 18)
    .map((name) => name[0]);

const users = {
  John: 18,
  Kate: 20,
  Tom: 17,
};

console.log(getAdults(users));
