const userAvatarElem = document.querySelector('.user__avatar');
userAvatarElem.src = 'https://avatars3.githubusercontent.com/u10001';

const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

export const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};
