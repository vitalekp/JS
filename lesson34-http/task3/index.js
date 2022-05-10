// algo
// 1 зробити кнопку Register 'able', якщо всі поля заповнені reportValidity() +++
// 2 після нажимання на кнопку відправити данні на сервер і очистити поля вводу +++
// 3 вивести відповідь від сервера в alert у вигляді обєкта +++
// 4 test and refactoring

const baseUrl = 'https://6278d8d3d00bded55adfaff0.mockapi.io/api/v1/users/';

const loginFormElem = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');

const formValidityHandler = () => {
  if (loginFormElem.reportValidity()) {
    submitBtn.removeAttribute('disabled');
    submitBtn.setAttribute('enabled', '');
  }
};

loginFormElem.addEventListener('keyup', formValidityHandler);

const mapTasks = tasks => tasks.map(({ ...rest }) => ({ ...rest }));

const onSubmitHandler = e => {
  e.preventDefault();
  const formInputElem = document.getElementsByClassName('form-input');

  // const userData = Object.fromEntries(new FormData(formInputElem));
  // console.log(userData);

  const newUser = {
    email: formInputElem.email.value,
    name: formInputElem.name.value,
    password: formInputElem.password.value,
  };

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

      loginFormElem.reset();

      submitBtn.removeAttribute('enabled');
      submitBtn.setAttribute('disabled', '');
    });
};

submitBtn.addEventListener('click', onSubmitHandler);
