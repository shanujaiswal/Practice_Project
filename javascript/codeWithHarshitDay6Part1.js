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
  firstName: "Pradeep",
  age: 31,
  about: b,
};
b();
person1.about();
person2.about();
person3.about();

//Call function
// calling function inside code
const c = {
  firstName: "Pradeep",
  age: 31,
  about: function (hobby, favthing) {
    console.log(this.firstName, this.age, hobby, favthing);
  },
};

const d = {
  firstName: "Pradeep",
  age: 31,
};

c.about.call(); // ❌ Incorrect usage: `call()` is missing a `this` argument, so `this.firstName` and `this.age` will be `undefined` (or throw an error in strict mode)
c.about.call(d); // ✅ Correct usage: Calling `about` with `d` as `this`, logging → "Pradeep 31 undefined undefined"
c.about.call(d, "guitar"); // ✅ Correct usage: Passing "guitar" as `hobby`, logs → "Pradeep 31 guitar undefined"

// calling function outside code

function about(hobby, favthing) {
  console.log(this.firstName, this.age, hobby, favthing);
}
const e = {
  firstName: "Pradeep",
  age: 31,
};

const f = {
  firstName: "Pradeep",
  age: 31,
};

about.call();
about.call(f);
about.call(f, "guitar");

// Apply function
about.apply(e, ["guitar", "bach"]);

// Bind function
const g = about.bind(e, "guitar", "bach");
g();

//  arrow function
const h = {
  firstName: "Pradeep",
  age: 31,
  about: () => {
    console.log(this.firstName, this.age); // In Arrow function this use to take value of global function
  },
};
h.about();

const i = {
  firstName: "Pradeep",
  age: 31,
  about() {
    console.log(this.firstName, this.age);
  },
};
i.about();
