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


//Prompt -- Used to ask details 
let i = prompt("what is your name")
console.log(i);

//Convert input string to integer
i = Number.parseInt(i) //method 1
i = Number(i)  //method 2 
console.log(typeof i)

//alert - to tell any alert 
let j = alert("you are not allowed ")

