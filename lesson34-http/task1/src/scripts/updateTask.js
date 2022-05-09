import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';

export const onToggleTask = e => {
  const taskId = e.target.dataset.id;

  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList.find(task => task.id === taskId);
  const done = e.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

export const onListClickHandler = e => {
  if (e.target.className === 'list-item__checkbox') {
    onToggleTask(e);
  }
  if (e.target.className === 'list-item__delete-btn') {
    deleteTask(e.target.dataset.id)
      .then(() => getTasksList())
      .then(newTasksList => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });
  }
};

// algo
// 1 Preparer data
// 2 Update data in date base
// 3 Read new data from server
// 4 Save new data to front-end storage
// 5 Update UI based on new data
