// algo
// 1 зробити кнопку Register 'able', якщо всі поля заповнені reportValidity() +++
// 2 після нажимання на кнопку відправити данні на сервер і очистити поля вводу +++
// 3 вивести відповідь від сервера в alert у вигляді обєкта +++
// 4 test and refactoring

const baseUrl = 'https://6281ec929fac04c6540b9efb.mockapi.io/api/v1/tasks/';

const loginFormElem = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');

const formValidityHandler = () => {
  const isValidForm = loginFormElem.reportValidity();
  if (isValidForm) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
};

loginFormElem.addEventListener('input', formValidityHandler);

const onSubmitHandler = e => {
  e.preventDefault();
  const formInputElem = document.getElementsByClassName('form-input');

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
    .then(response => {
      alert(JSON.stringify(response));

      loginFormElem.reset();

      submitBtn.setAttribute('disabled', true);
    });
};

submitBtn.addEventListener('click', onSubmitHandler);
