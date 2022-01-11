const filterNames = (arr, text) => arr
  .filter(name => name.length > 5 && name.includes(text));

console.log(filterNames(['Lalala', 'Lala', 'Marela'], 'la'));
