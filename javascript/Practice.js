"use strict";  // enables strict mode in JavaScript. When enabled, it enforces stricter parsing and error handling, helping you write cleaner and more secure code

//setting a value to variable
let a = "shanu" 
console.log(a);
console.log(typeof a);  //Know type of value


//printing words directly using console log
console.log("hello world");



// adding two variable 
let b = "shanu";
console.log(b);
let c = "jaiswal"
console.log(b + c);

// Doing operation inside console 
let d = 100;   
console.log(d * 11)  //change signs for changing operation.

//Finding lengths and words 
let e = "Shanu";
console.log(e.length); //find total length
console.log(e[e.length - 1])  //find words from backward

//Triming the words 
let f = "  Shanu   e"
f = f.trim(); // method 1 to trim 
console.log(f)
let g = f.trim();  //method 2  to trim 
console.log(g);

//Access words in dict 
const h = {
    Abhishek_m : "Owner",
    Ivan : "Product Manager",
    Dharambir : "Developer",
    Pankaj : "Full Stack" ,
    shanu : "Tester",
}
console.log(h.shanu) //method 1 
console.log(h["shanu"]) // method 2 
const { shanu} = h;
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

//Prompt -- Used to ask details 
let i = prompt("what is your name")
console.log(i);

//Convert input string to integer
i = Number.parseInt(i) //method 1
i = Number(i)  //method 2 
console.log(typeof i)

//alert - to tell any alert 
let j =  alert("you are not allowed ")
