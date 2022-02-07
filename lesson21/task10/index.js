export const finishForm = () => {
  const password = document.querySelector('input');
  password.setAttribute('type', 'password');
  password.setAttribute('name', 'login');

  const loginInput = document.createElement('input');
  document.querySelector('.login-form').append(loginInput);
};

finishForm();