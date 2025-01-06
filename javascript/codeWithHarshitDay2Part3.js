// Create object 
let a = { name: "Shanu", age: 23 }
console.log(a)
console.log(typeof a)
console.log(a.name)  // to access the value in the given data 
console.log(a.age)  // to access the value in the given data 

// saving and accessing array in objects
let b = {
    name: "Shanu",
    age: 23,
    hobbies: ["chess", "cricket", "music"]
}
console.log(b);
console.log(b.hobbies)   //to access array in object

//add key value pair to objects
b.gender = "male";
console.log(b)

// difference between dot and bracket notation

let c = {
    name: "Shanu",
    age: 23,
    "person hobbies": ["chess", "cricket", "music"]
}
console.log(c.age)    //dot notation -- if single key 
console.log(c["person hobbies"]);    //bracket notation -- if two keys are there 

let d = " email";
const e = {
    name: "Shanu",
    age: 23,
    "person hobbies": ["chess", "cricket", "music"]
}
e[d] = "Shanuj4all@gmail.com" // to add key value in object 
console.log(e)

// how to iterate objects
const f = {
    name: "Shanu",
    age: 23,
    "person hobbies": ["chess", "cricket", "music"]
}
// for in loops
for (let key in f) {
    console.log(key)   //to get the keys of the objects 
}

for (let key in f) {
    console.log(f[key])     //to get the values in given objects  
}

for (let key in f) {
    console.log(`${key} : ${f[key]}`)     //Method 1 - to get the key and values of given objects 
}

for (let key in f) {
    console.log(key, f[key])     //Method 2 - to get the key and values of given objects 
}

//object.key
console.log(Object.keys(f))

//computed properties - allow you to define properties that are derived from other data, rather than being set directly.
const g = "obj1";
const h = "obj2";

const i = "value1";
const j = "value2";

//method -1 
const k = {
    [g]: i,
    [h]: j
}
console.log(k)

// spread operator
const l = {
    m: "values",
    n: "values"
}
console.log(l)