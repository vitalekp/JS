const baseUrl = 'https://crudcrud.com/api/9bf7106aa3624d239bd4b325abb4a1fb/tasks';

const mapTasks = tasks => tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));

export const getTasksList = () => {
  return fetch(`${baseUrl}`)
    .then(response => response.json())
    .then(tasks => mapTasks(tasks));
};

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTaskData),
  });
};

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};
