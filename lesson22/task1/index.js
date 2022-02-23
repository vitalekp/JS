// algo
// 1 .events-list пустой по умолчанию +++
// 2 добавить обработчик в квадрат, серый на погружение, зеленый на всплытие +++
// 3 добавить обработчик на кнопку 'Clear', который чистит поле с событиями +++
// 4 добавить обработчик на кнопку 'Attach handlers', который включает обработчики для квадратов +++
// 5 добавить обработчик на кнопку 'Remove handlers', который выключает обработчики для квадратов +++
// 6 сделать все обработчики включеными по умолчанию +++

// input: ?
// output:

const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');

  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

function attach() {
  divElem.addEventListener('click', logGreenDiv);
  divElem.addEventListener('click', logGreyDiv, true);

  pElem.addEventListener('click', logGreenP);
  pElem.addEventListener('click', logGreyP, true);

  spanElem.addEventListener('click', logGreenSpan);
  spanElem.addEventListener('click', logGreySpan, true);
}
attach();

const clearButtonElem = document.querySelector('.clear-btn');
clearButtonElem.addEventListener('click', () => {
  document.querySelector('.events-list').innerHTML = ``;
});

const removeButtonElem = document.querySelector('.remove-handlers-btn');
removeButtonElem.addEventListener('click', () => {
  divElem.removeEventListener('click', logGreenDiv);
  divElem.removeEventListener('click', logGreyDiv, true);
  pElem.removeEventListener('click', logGreenP);
  pElem.removeEventListener('click', logGreyP, true);
  spanElem.removeEventListener('click', logGreenSpan);
  spanElem.removeEventListener('click', logGreySpan, true);
});

const attachButtonElem = document.querySelector('.attach-handlers-btn');
attachButtonElem.addEventListener('click', attach, true);
