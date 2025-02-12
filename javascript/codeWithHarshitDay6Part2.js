// Understanding Prototype in JavaScript
// 1. Checking Prototype in an Object
const a = {
  key1: "Value1",
};

if (a.prototype) {
  console.log("prototype is present");
} else {
  console.log("prototype is not present");
}

// 2. Checking Prototype in a Function
function b() {
  console.log("Hello World");
}
if (b.prototype) {
  console.log("prototype is present");
} else {
  console.log("prototype is not present");
}

b.prototype.abc = "abc";
b.prototype.xyz = "xyz";
b.prototype.sing = function () {
  return "laa laa laa";
};
console.log(b.prototype);
console.log(b.prototype.sing);
