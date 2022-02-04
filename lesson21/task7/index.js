export const clearList = () => {
  const emptyBody = document.querySelector('.categories').innerHTML = '';

  return emptyBody;
};

clearList();