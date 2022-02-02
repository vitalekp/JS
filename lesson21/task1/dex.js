'use strict';

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const taskElem = document.querySelector('.list');

  const taskItemsElems = tasksList.map(({text, done}) => {
    const taskItemElem = document.createElement('li');
    taskItemElem.classList.add('list__item');
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.checked = done;
    if (done) {
      taskItemElem.classList.add('list__item_done');
    }
    checkboxElem.classList.add('list__item-checkbox');
    taskItemElem.append(checkboxElem, text);

    return taskItemElem;
  });

  taskElem.append(...taskItemsElems);
};


renderTasks(tasks);
