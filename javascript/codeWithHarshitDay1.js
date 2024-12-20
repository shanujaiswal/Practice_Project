// adding two variable 
let a = "shanu";
console.log(a);
let b = "jaiswal"
console.log(a + b);

// Doing operation inside console 
let c = 100;
console.log(c * 11)  //change signs for changing operation.

//Finding lengths and words 
let d = "Shanu";
console.log(d.length); //find total length
console.log(d[d.length - 1])  //find words from backward

//Triming the words 
let e = "  Shanu   e"
e = e.trim(); // method 1 to trim 
console.log(e)
let f = e.trim();  //method 2  to trim 
console.log(f);

//Changing Sizes
let g = "Shanu"
console.log(g.toUpperCase()); // making upperCase
console.log(g.toLowerCase()); // making lowerCase

//Slicing 
let h = "Shanu"
let i = h.slice(0,2); // to give letters between range 
console.log(i);
let j = h.slice(3); // to give letters after that range 
console.log(j);