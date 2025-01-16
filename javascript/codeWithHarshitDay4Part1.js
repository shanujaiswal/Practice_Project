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

const g = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 22000 },
    { productId: 3, productName: "tv", price: 18000 },
]
console.log(g.reduce((price1, price2) => price1 + price2.price, 0))    //0 will be the initial value -- generally used in objects if we change the 0 the initial value will also change 

//Sort 
//Default Sorting (As Strings):
let h = [5000, 300, 80, 1, 200];
h.sort();
console.log(h); // Output: [1, 200, 300, 5000, 80]   --> Because it will take it as string then chose only first number and convert to ASCII 

//Sorting Numbers Correctly:
let i = [5000, 300, 80, 1, 200];
i.sort((a, b) => a - b);    //Ascending Order
console.log(i);  //Output: [1, 80, 200, 300, 5000]

let j = [5000, 300, 80, 1, 200];
j.sort((a, b) => b - a);    //Descending order
console.log(j);

//Sorting Strings: -- It sorts capital letters first 
let k = ['banana', 'apple', 'Apple' ,'APPLE', 'cherry', 'date', 'appld', 'applf', 'appled', 'applet'];
k.sort();
console.log(k);

//Sorting Objects:
let l = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Alex', age: 35 }
];

l.sort((a, b) => a.age - b.age);
console.log(l);

//Find method
//Finding a number in an array
const numbers = [10, 20, 30, 40, 50];

const result = numbers.find(num => num > 25);
console.log(result); // 30

