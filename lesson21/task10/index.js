export const finishForm = () => {
  const loginInput = document.createElement('input');
  const inputEl = document.querySelector('.login-form')
  inputEl.prepend(loginInput);
  loginInput.setAttribute('name', 'login');
  loginInput.setAttribute('type', 'text');

  const password = document.querySelector('input[name=password]');
  password.setAttribute('type', 'password');
};

// finishForm();
