// algo
// 1 обработчик 'change' на  чекбокс '.task-status'
// 2 вывести при в консоль состояние при клике

const inputElem = document.querySelector('.task-status');
inputElem.addEventListener('change', event => {
  if (event.target.checked) {
    console.log(true);
  } else console.log(false);
});
