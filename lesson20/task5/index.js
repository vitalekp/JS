/* eslint-disable max-classes-per-file */

export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository{
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }
  
  getUserNames() {
    const arrNames = [];

    this._users.map(el => arrNames.push(el._name));

    return arrNames;
  }

  getUserIds() {
    const arrId = [];

    this._users.map(el => arrId.push(el._id));
    
    return arrId;
  }

  getUserNameById(userId) {
    let name = '';

    this._users.map(el => {
      if (el._id === userId) {
        name = el._name;
      }
    });
    
    return name;
  }
}

// examples
const user = new User('9', 'Tom', 'session-id');
const test = new UserRepository(user);


// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
