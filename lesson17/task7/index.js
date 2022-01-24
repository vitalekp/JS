export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const value = fullName.split(' ');

    this.firstName = value[0];
    this.lastName = value[1];
  }
};

user.setFullName('Tom Anders');
console.log(user);
user.getFullName();
