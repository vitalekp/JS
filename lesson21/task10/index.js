export const finishForm = () => {
  const loginInput = document.createElement('input');
  document.querySelector('.login-form').prepend(loginInput);
  loginInput.setAttribute('name', 'login');

  const password = document.querySelector('input[name=password]');
  password.setAttribute('type', 'password');
};

finishForm();
