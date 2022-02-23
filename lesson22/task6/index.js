// algo
// 1 обработчик click for 'single-use-btn'
// 2 click - con.log('clicked')
// 3 после первого клика отменить обработчик

const btn = document.querySelector('.single-use-btn');
btn.addEventListener('click', oneClick);

function oneClick() {
  console.log('clicked');
  btn.removeEventListener('click', oneClick);
}
