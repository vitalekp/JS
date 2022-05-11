const repoListElem = document.querySelector('.repo-list');

export const cleanReposList = () => {
  repoListElem.innerHTML = '';
};

export const renderRepos = reposList => {
  const repoListElems = reposList.map(({ name }) => {
    const listElem = document.createElement('li');
    listElem.classList.add('repo-list__item');
    listElem.textContent = name;

    return listElem;
  });
  repoListElem.append(...repoListElems);
};

// svn_url
