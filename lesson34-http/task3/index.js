// algo
// 1 зробити кнопку Register 'able', якщо всі поля заповнені reportValidity() +++
// 2 після нажимання на кнопку відправити данні на сервер і очистити поля вводу +++
// 3 вивести відповідь від сервера в alert у вигляді обєкта +++
// 4 test and refactoring

const baseUrl = 'https://6281ec929fac04c6540b9efb.mockapi.io/api/v1/tasks/';

const loginFormElem = document.querySelector('.login-form');
const submitBtnElem = document.querySelector('.submit-button');

const formValidityHandler = () => {
  const isValidForm = loginFormElem.reportValidity();
  if (isValidForm) {
    submitBtnElem.removeAttribute('disabled');
  } else {
    submitBtnElem.setAttribute('disabled', true);
  }
};

loginFormElem.addEventListener('input', formValidityHandler);

const onSubmitHandler = e => {
  e.preventDefault();

  const userData = Object.fromEntries(new FormData(loginFormElem));

  // the same with reduce
  // const formData = [...new FormData(formElem)]
  //     .reduce((acc, [prop, value]) => ({ ...acc, [prop]: value }), {});

  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  })
    .then(response => response.json())
    .then(response => {
      alert(JSON.stringify(response));

      loginFormElem.reset();

      submitBtnElem.setAttribute('disabled', true);
    });
};

submitBtnElem.addEventListener('click', onSubmitHandler);
