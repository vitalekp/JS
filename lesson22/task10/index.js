// algo
// 1 обработчик 'click' на  все кнопки '.pagination__page'
// 2 создать функцию handleClick, которая при клике будет выводить data-page-number

const btns = document.querySelectorAll('.pagination__page');

function handleClick(event) {
  console.log(event.target.dataset.pageNumber);
}

btns.forEach(el => el.addEventListener('click', handleClick));
