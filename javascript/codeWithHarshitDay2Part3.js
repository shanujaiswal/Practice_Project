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

let d = " "