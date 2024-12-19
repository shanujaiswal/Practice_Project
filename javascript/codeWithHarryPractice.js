"use strict";  // enables strict mode in JavaScript. When enabled, it enforces stricter parsing and error handling, helping you write cleaner and more secure code

//setting a value to variable
let a = "shanu"
console.log(a);
console.log(typeof a);  //Know type of value

//printing words directly using console log
console.log("hello world");

//Access words in dict 
const h = {
    Abhishek_m: "Owner",
    Ivan: "Product Manager",
    Dharambir: "Developer",
    Pankaj: "Full Stack",
    shanu: "Tester",
}
console.log(h.shanu) //method 1 
console.log(h["shanu"]) // method 2 
const { shanu } = h;
console.log(shanu)  //method 3 
//method 4 
console.log(Object.keys(h));  // Get all keys
console.log(Object.values(h)); // Get all values
console.log(Object.entries(h));   // Get key-value pairs as arrays
console.log(h.hasOwnProperty("shanu"));   // Check if property exists

//Access words in dict (for nested objects)
const person = {
    name: "John",
    address: {
        city: "New York"
    }
};

// Without optional chaining
console.log(person.address && person.address.city); // Old way

// With optional chaining
console.log(person?.address?.city);    // Output: "New York"
console.log(person?.contacts?.email);  // Output: undefined (no error)

