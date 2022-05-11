import { fetchUserData, fetchRepositories } from './gateways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(defaultUser);

const showBtnElem = document.querySelector('.name-form__btn');
const showInputElem = document.querySelector('.name-form__input');

const onSearchUserHandler = async () => {
  cleanReposList();
  showSpinner();
  const userName = showInputElem.value;
  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();
  }

  // fetchUserData(userName)
  //   .then(userData => {
  //     renderUserData(userData);
  //     return userData.repos_url;
  //   })
  //   .then(url => fetchRepositories(url))
  //   .then(reposList => {
  //     renderRepos(reposList);
  //   })
  //   .catch(err => {
  //     alert(err.message);
  //   })
  //   .finally(() => hideSpinner());
};

showBtnElem.addEventListener('click', onSearchUserHandler);
