// Method
const a = {
  firstName: "rahul",
  age: 24,
  about1: function () {
    console.log("person name is shanu and person age is 24"); //Logging a hardcoded message
    console.log(
      `person name is ${this.firstName} and person age is ${this.age}`
    ); // Logging a dynamic message using 'this'
    console.log(this);
  },
};
a.about1();

function b() {
  console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}
const person1 = {
  firstName: "Aditya",
  age: 24,
  about2: b,
};
const person2 = {
  firstName: "harsh",
  age: 12,
  about2: b,
};
const person3 = {
  firstName: "Pradeep",
  age: 31,
  about2: b,
};
b();
person1.about2();
person2.about2();
person3.about2();

//Call function
// calling function inside code
const c = {
  firstName: "Pradeep",
  age: 31,
  about3: function (hobby, favthing) {
    console.log(this.firstName, this.age, hobby, favthing);
  },
};

const d = {
  firstName: "Pradeep",
  age: 31,
};

c.about3.call(); // ❌ Incorrect usage: `call()` is missing a `this` argument, so `this.firstName` and `this.age` will be `undefined` (or throw an error in strict mode)
c.about3.call(d); // ✅ Correct usage: Calling `about` with `d` as `this`, logging → "Pradeep 31 undefined undefined"
c.about3.call(d, "guitar"); // ✅ Correct usage: Passing "guitar" as `hobby`, logs → "Pradeep 31 guitar undefined"

// calling function outside code
function about4(hobby, favthing) {
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

about4.call();
about4.call(f);
about4.call(f, "guitar");

// Apply function
about4.apply(e, ["guitar", "What"]);

// Bind function
const g = about4.bind(e, "guitar", "bach");
g();

//  arrow function
const h = {
  firstName: "Pradeep",
  age: 31,
  about5: () => {
    console.log(this.firstName, this.age); // In Arrow function this use to take value of global function
  },
};
h.about5();

const i = {
  firstName: "Pradeep",
  age: 31,
  about5() {
    console.log(this.firstName, this.age);
  },
};
i.about5();

//Proto , Prototype , Class
//If there is one user
const j = {
  firstName: "Shanu",
  lastName: "Jaiswal",
  email: "Shanu@gmail.com",
  age: 24,
  address: "my Place",
  about6: function () {
    return `${this.firstName} is  ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};
console.log(j)

//If there is more user
function k(firstName, lastName, email, age, address) {
  const l = {};
  l.firstName = firstName;
  l.lastName = lastName;
  l.email = email;
  l.age = age;
  l.address = address;
  l.about7 = function () {
    return `${this.firstName} is  ${this.age} years old`;
  };
  l.is18 = function () {
    return this.age >= 18;
  };
  return l;
}

const m = k("Shanu", "jaiswal", "Shanu@warpx.ai", 19, "my address");
console.log(m);
const is18 = m.is18();
console.log(is18);
const about7 = m.about7();
console.log(about7);
