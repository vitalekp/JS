// algo
// 1 повесить обработчик события 'change' на чекбокс с классом '.task-status' +++
// 2 при клике на чекбокс con.log - true/false
// 3 проверить значение value

const checkboxElem = document.querySelector('.task-status');
checkboxElem.addEventListener('change', () => {
  if (checkboxElem.checked) {
    console.log(true);
  } else console.log(false);
});

// console.log(checkboxElem.value);
