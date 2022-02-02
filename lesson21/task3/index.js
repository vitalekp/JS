const getItemsList = () => {
  const technologyLists = document.querySelectorAll('.technology');
  console.dir(technologyLists);

  return technologyLists;
};

const getItemsArray = () => {
  const toolLists = document.querySelectorAll('.tool');
  const arr = [];
  Array.from(toolLists).map(el => arr.push(el));
  console.dir(arr);

  return toolLists;
};

getItemsList();
getItemsArray();