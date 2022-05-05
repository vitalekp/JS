// algo
// 1 func getTasksList => make server request for all tasks
// and return a promise with an array of tasks
// 2 func getTaskById => make server request for the specified task
// and return a promise with the task object
// 3 test

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

// in: none
// out: obj(promise)
export function getTasksList() {
  return fetch(baseUrl).then(result => result.json());
}

// in: string
// out: obj(promise)
export function getTaskById(taskId) {
  return fetch(`${baseUrl}/${taskId}`).then(result => result.json());
}

// examples
getTasksList().then(tasksList => {
  console.log(tasksList); // ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]
});

getTaskById('2').then(taskData => {
  console.log(taskData); // ==> { 'id': '2', 'text': 'District Communications Specialist', 'isDone': false, 'createdDate': 1651499052, 'finishedDate': 1651499052 }
});
