"use strict";  // enables strict mode in JavaScript. When enabled, it enforces stricter parsing and error handling, helping you write cleaner and more secure code

//setting a value to variable
let a = "shanu"
console.log(a);
console.log(typeof a);  //Know type of value

//printing words directly using console log
console.log("hello world");

//Access words in dict 
const b = {
    Abhishek_m: "Owner",
    Ivan: "Product Manager",
    Dharambir: "Developer",
    Pankaj: "Full Stack",
    shanu: "Tester",
}
console.log(b.shanu) //method 1 
console.log(b["shanu"]) // method 2 
const { shanu } = b;
console.log(shanu)  //method 3 
//method 4 
console.log(Object.keys(b));  // Get all keys
console.log(Object.values(b)); // Get all values
console.log(Object.entries(b));   // Get key-value pairs as arrays
console.log(b.hasOwnProperty("shanu"));   // Check if property exists

//Access words in dict (for nested objects)
const c = {
    name: "John",
    address: {
        city: "New York"
    }
};

// Without optional chaining
console.log(c.address && c.address.city); // Old way

// With optional chaining
console.log(c?.address?.city);    // Output: "New York"
console.log(c?.contacts?.email);  // Output: undefined (no error)


//Prompt -- Used to ask details 
let d = prompt("what is your name")
console.log(d);

//Convert input string to integer
d = Number.parseInt(d) //method 1
d = Number(d)  //method 2 
console.log(typeof d)

//alert - to tell any alert 
let e = alert("you are not allowed ")

