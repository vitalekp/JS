const baseUrl = "https://6281ec929fac04c6540b9efb.mockapi.io/api/v1/tasks";

export const getTasksList = () => {
  return fetch(`${baseUrl}`)
    .then((response) => response.json())
    .then((tasks) => tasks);
};

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updatedTaskData),
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  });
};
