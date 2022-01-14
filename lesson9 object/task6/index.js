const getPeople = obj => {
  if(Object.keys(obj) === 0) {
    return [];
  }
  return Object.values(obj)
    .reduce((acc, val) => acc.concat(val), [])
    .map(names => names.name);
};

// const getPeople = obj => {
//   if(Object.keys(obj) === 0) {
//     return [];
//   }
//   return Object.values(obj)
//     .flat()
//     .map(names => names.name);
// } 
  

const rooms = {
  room1: [
    { name: 'Jack'},
    { name: 'Andrey'},
    { name: 'Vasyl'},
  ],
  room2: [
    { name: 'Ja'},
    { name: 'Adey'},
  ]
};
// const rooms2 = {};
const res = getPeople(rooms);
console.log(res);