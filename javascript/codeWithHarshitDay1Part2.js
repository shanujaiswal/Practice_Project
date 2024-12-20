// if condition
let a = 23;
if(a >= 18){
    console.log("you can give vote");
}

//if-else condition 
//ex - 1 ;
let b = 12;

if(b%2==0){
    console.log("even");
}
else{
    console.log("odd");
}
//ex - 2 Due to Prompt it is in comment ;
// let c = prompt("What is your age");
// if(c >= 18){
//     console.log("you can give vote");
// }
// else{
//     console.log("go to home ");
// }


//Falsy values
// false
// 0, -0 and 0n
// "", '' (empty strings)
// null, 
// undefined and NaN

// "", '' (empty strings)
let d;
if(d){
    console.log(d);
}else{
    console.log("d is kinda empty");
}

// null, undefined and NaN
let e = null;
if(e){
    console.log(e);
}else{
    console.log("e is kinda empty");
}

// ternary operator - works same as if else
//method - normal method 
let f = 12;

if(f>=10){
    g = "coffee"
} else{
    g = "milk"
}
console.log(g)

//*method - ternary operator /conditional operator *
let h = 8;
let i = h >= 5 ? "coffee" : "milk";
console.log(i)

let j = 2;
let k = j >= 5 ? "coffee" : j<=2 ? "milk" : "water";
console.log(k) 