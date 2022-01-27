const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    const [firstName, lastName] = name.split(' ');

    this.firstName = firstName;
    this.lastName = lastName;
  },
};

export default user;

user.fullName = 'Joe Zaza';
console.log(user);