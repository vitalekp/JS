// algo
// 1 обработчик события класу 'search__btn'
// 2 при клике на 'search__btn'- con.log(текс из инпута 'search__input')

const searchBtn = document.querySelector('.search__btn');
searchBtn.addEventListener('click', () =>
  console.log(document.querySelector('.search__input').value)
);
