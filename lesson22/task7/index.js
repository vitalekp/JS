// algo
// 1 обработчик на обе кнопки с классом 'btn'
// 2 передать обработчику func handleClick
// 3 вывести текст кнопки в консоль при нажатии

const btnJS = document.querySelector('.btn');
const btnHTML = document.querySelector(`.btn:last-of-type`);
btnJS.addEventListener('click', (event) => {
  console.log(event.target.textContent);
});
btnHTML.addEventListener('click', (event) => {
  console.log(event.target.textContent);
});
