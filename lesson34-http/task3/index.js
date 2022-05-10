// algo
// 1 зробити кнопку Register 'able', якщо всі поля заповнені reportValidity() +++
// 2 після нажимання на кнопку відправити данні на сервер і очистити поля вводу +
// 3 вивести відповідь від сервера в alert у вигляді обєкта
// 4 test and refactoring

const baseUrl = 'https://6278d8d3d00bded55adfaff0.mockapi.io/api/v1/users/';

const loginFormElem = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');

const formChangeHandler = () => {
  if (loginFormElem.reportValidity()) {
    submitBtn.disabled = 0;
    submitBtn.enable = 1;
    return;
  }

  submitBtn.disabled = 1;
};

loginFormElem.addEventListener('keyup', formChangeHandler);

const mapTasks = tasks => tasks.map(({ ...rest }) => ({ ...rest }));

const onSubmitHandler = e => {
  e.preventDefault();
  const formInputElem = document.getElementsByClassName('form-input');

  const newUser = {
    email: formInputElem.email.value,
    name: formInputElem.name.value,
    password: formInputElem.password.value,
  };

  // document.getElementsByClassName('login-form').reset();
  console.log(newUser);

  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newUser),
  })
    .then(response => response.json())
    .then(tasks => {
      alert(JSON.stringify(tasks));
      formInputElem[0].value = '';
      formInputElem[1].value = '';
      formInputElem[2].value = '';
    });
};

submitBtn.addEventListener('click', onSubmitHandler);
