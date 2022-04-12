// algo
// 1 створити подію, яка буде переключати чекбокс (вкл\викл)
// 2 при нажиманні кнопки create, створити новий запис з текстом із цього поля
// 2.1 якщо поле пусте, не добавляти новий запис
// 2.2 після успішного додавання, почистити поле вводу
// 3 сортувати задачі, зверху не виконані, знизу виконані

const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const listElem = document.querySelector('.list');
const btnElem = document.querySelector('.create-task-btn');
const taskInputElem = document.querySelector('.task-input');

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const onClickSwitch = event => {
  if (!event.target.type === 'checkbox') {
    return;
  }

  tasks.forEach(el => {
    if (el.id === +event.target.dataset.id) {
      el.done = !el.done;
    }
  });

  renderTasks(tasks);
};

const onClickAdd = event => {
  if (!taskInputElem.value) {
    return;
  }

  const elemArr = {
    text: taskInputElem.value,
    done: false,
    id: Date.now(),
  };

  taskInputElem.value = '';
  tasks.push(elemArr);
  renderTasks(tasks);
};

listElem.addEventListener('click', onClickSwitch);
btnElem.addEventListener('click', onClickAdd);
