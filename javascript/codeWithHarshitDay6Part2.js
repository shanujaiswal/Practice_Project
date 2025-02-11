//Proto , Prototype , Class
function a(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstName} is  ${this.age} years`;
  };
  user.is18: function(){
    return this.age >= 18;
  }
}
