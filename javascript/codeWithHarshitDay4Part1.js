// for each 
const a = [1, 2, 3, 4, 5]

function b(number, index) {
    console.log("index is ", index)
    console.log(number * 2)
}
b(a[2], 0)
for (let i = 0; i < a.length; i++) {
    b(a[i], i)
}
a.forEach(b)

// can be written like this also 
const c = [1, 2, 3, 4, 5, 6];
console.log(c.forEach((number, index) => `index is ${index} number is ${number}`))
// map method

const d = [
    { firstName: "Abhishek", age: 23 },
    { firstName: "Rahul", age: 23 },
    { firstName: "Dharambir", age: 23 },
    { firstName: "Ivan", age: 23 },
]
console.log(d.map((user) => user.firstName))

// filter method
const e = [1, 2, 3, 4, 5, 6]
console.log(e.filter((number) => number % 2 === 0))

// reduce method 
const f = [1, 2, 3, 4, 5, 6]
console.log(f.reduce((num1, num2) => num1 + num2))
