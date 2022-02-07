export const finishForm = () => {
  const loginInput = document.createElement('input');
  document.querySelector('.login-form').prepend(loginInput);
  loginInput.setAttribute('name', 'login');
  loginInput.setAttribute('type', 'text');

  const password = document.querySelector('input[name=password]');
  password.setAttribute('type', 'password');
};

finishForm();
