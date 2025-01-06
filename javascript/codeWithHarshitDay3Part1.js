/*  Normal syntax
function functionName(parameters) {
code to be executed
} */

//normal way to write a code to print 
function a() {
    console.log("my name is shanu jaiswal");
}
a();

//Using return ;
function b() {
    return (2 + 4)
}
console.log(b());
const c = b();   //Creating a new variable
console.log(c)

// making a add function 
function d(num1, num2) {
    return num1 + num2
}
console.log(d(4, 5));    // By direct assigning value 
const e = d(4, 5)
console.log(e)         // By making a new variable 

// Function to check if the number is even or odd 
function f(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(f())     //console.log(f(prompt())) --> if we wanta number from user 

console.log(2 % 2 === 0)  //use prompt inplace of 1 to get values from users  one line function to check if odd or even  

// to get the first value of words
function g(anyString){
    return anyString[0];
}
console.log(g("shanu"));  

// to check the index of target if target is present in array 
