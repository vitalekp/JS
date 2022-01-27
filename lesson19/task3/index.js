export function User(name, age) {
  this.name = name;
  this.age= age;
};

User.prototype.sayHi = function() {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function() {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function(age) {
  this.age = age;
  if (this.age <= 0) {
    return false;
  }
  if (this.age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }

  return this.age;
};


const usr = new User('Vok', 20);

usr.sayHi();
usr.requestNewPhoto();
usr.setAge(26);

console.log(usr);