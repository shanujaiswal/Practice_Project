// Method
const a = {
  firstName: "rahul",
  age: 24,
  about: function () {
    console.log("person name is shanu and person age is 24"); //Logging a hardcoded message
    console.log(
      `person name is ${this.firstName} and person age is ${this.age}`
    ); // Logging a dynamic message using 'this'
    console.log(this);
  },
};
a.about();

function b() {
  console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}
const person1 = {
  firstName: "Aditya",
  age: 24,
  about: b,
};
const person2 = {
  firstName: "harsh",
  age: 12,
  about: b,
};
const person3 = {
  firstName: "adarsh",
  age: 31,
  about: b,
};
b();
person1.about();
person2.about();
person3.about();