const userUrl = 'https://6278d8d3d00bded55adfaff0.mockapi.io/api/v1/users';

export function getUsersList() {
  return fetch(userUrl).then(response => response.json());
}

export function getUserById(userId) {
  return fetch(`${userUrl}/${userId}`).then(response => response.json());
}

export function createUser(userData) {
  return fetch(userUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json());
}

export function deleteUser(userId) {
  return fetch(`${userUrl}/${userId}`, {
    method: 'DELETE',
  }).then(response => response.json());
}

export function updateUser(userId, userData) {
  return fetch(`${userUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json());
}

// examples

getUserById('9').then(userData => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};

createUser(newUserData).then(() => {
  console.log('User created');
});

const updatedUserData = {
  email: 'new@email.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
};

updateUser('11', updatedUserData).then(() => {
  console.log('User updated');
});

deleteUser('10').then(() => {
  console.log('User updated');
});

getUsersList().then(users => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});
