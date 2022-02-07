export const finishForm = () => {
  const password = document.querySelector('input');
  password.setAttribute('type', 'password');
  
  const loginInput = document.createElement('input');
  document.querySelector('.login-form').prepend(loginInput);
};

finishForm();