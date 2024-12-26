// to clone and add 
let a = ["item1", "item2", "item3"]
let b = a.slice(0).concat(["item4", "item5"])  //method 2 cloning -- slicing method
let c = [].concat(a, ["item4", "item5"]);  //method 3 cloning --concat 
let d = [...a, "item4", "item5"]  //method 4 cloning --new way -- spread operator  

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//for loop in array 
let e = ["apple", "grapes", "mango", "banana"];
for (let i = 0; i < e.length; i++) {
    console.log(e[i].toUpperCase())
}

//use const for creating array
const f = ["apple", "grapes", "mango", "banana"];
f.push("cherry")
console.log(f)

// while loop 
// while loop 
const g = ["apple", "grapes", "mango", "banana"];
const h =[];
let i = 0;
while (i < g.length) {
    g.push(g[i].toUpperCase());
    i++;
}
console.log(g);

