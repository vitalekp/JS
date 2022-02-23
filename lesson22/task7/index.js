// algo
// 1 обработчик на обе кнопки с классом 'btn'
// 2 передать обработчику func handleClick
// 3 вывести текст кнопки в консоль при нажатии

const btnJS = document.querySelector('.btn');
const btnHTML = document.querySelector(`.btn:last-of-type`);

function handleClick(event) {
  console.log(event.target.textContent);
}

btnJS.addEventListener('click', handleClick);
btnHTML.addEventListener('click', handleClick);
