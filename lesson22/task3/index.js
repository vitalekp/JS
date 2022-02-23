// algo
// 1 обработчик 'change' на инпут с классом '.text-input' +++
// 2 при вводе вывести в консоль текст из input +++

const inputElem = document.querySelector('.text-input');
inputElem.addEventListener('change', () => console.log(inputElem.value));
