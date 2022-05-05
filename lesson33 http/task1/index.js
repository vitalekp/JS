// algo
// 1 добавити в змінні .user__avatar, name, location; name-form__btn, input +++
// 2 добавити eventListener на btn 'Show' (click) - onSearchUser +++
// 3 створити функцію fetchUserData, яка ініціалізує запит за данними про користувача +++
// 4 створити функцію renderUserData, яка відобразить дані на сторінці
// test

const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

userAvatarElem.src =
  'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo';

const showBtnElem = document.querySelector('.name-form__btn');
const showInputElem = document.querySelector('.name-form__input');

const fetchUserData = userName => {
  return fetch(`https://api.github.com/users/${userName}`).then(response => response.json());
};

const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};

const onSearchUserHandler = () => {
  const userName = showInputElem.value;
  fetchUserData(userName).then(userData => renderUserData(userData));
};

showBtnElem.addEventListener('click', onSearchUserHandler);
