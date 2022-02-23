// algo
// 1 повесить обработчик 'click', с классом .create-btn +++
// 2 при клике вывести в alert - 'done' +++

const createBtnElem = document.querySelector('.create-btn');
createBtnElem.addEventListener('click', () => alert('done'));
