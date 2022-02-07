export const finishForm = () => {
  const loginInput = document.createElement('input');
  document.querySelector('.login-form').append(loginInput);
  loginInput.setAttribute('name', 'login');

  const password = document.querySelector('input[name=login]');
  password.setAttribute('type', 'password');
};

finishForm();