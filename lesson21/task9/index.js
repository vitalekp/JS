export const finishList = () => {
  const ulNumber1 = document.createElement('li');
  ulNumber1.textContent = '1';
  document.querySelector('.list').prepend(ulNumber1);

  const ulNumber8 = document.createElement('li');
  ulNumber8.textContent = '8';
  document.querySelector('.list').append(ulNumber8);

  const ulNumber4 = document.createElement('li');
  ulNumber4.textContent = '4';
  document.querySelector('.special').before(ulNumber4);

  const ulNumber6 = document.createElement('li');
  ulNumber6.textContent = '6';
  document.querySelector('.special').after(ulNumber6);
};

// finishList();