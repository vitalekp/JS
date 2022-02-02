export const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);

  return titleElem;
};

 export const getInputElement = () => {
  const inputText = document.querySelector('input');
  console.dir(inputText);
  
  return inputText;
};

getTitleElement();
getInputElement();
