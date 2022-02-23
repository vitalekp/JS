// algo
// 1 обработчик 'change' на инпут '.text-input' +++
// 2 вывести при вводе текст из инпута в консоль

const inputElem = document.querySelector('.text-input');
inputElem.addEventListener('change', event => console.log(event.target.value));
