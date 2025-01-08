//hoisting 
a();

function a() {
    console.log("my name is shanu jaiswal")
}

// Function inside function 
function b() {
    const c = () => {
        console.log("Hello from shanu")
    }

    const d = (num1, num2) => {
        return num1 + num2
    }
    const e = (num3, num4) => num3 * num4

    c();
    console.log(d(2, 3))
    console.log(e(1, 4))
}
b();

// lexical scope 
function f() {
    const g = "Value 1";
    function h() {
        // const g = "value 2"
        console.log("inside h", g)
    }
    const i = function () { }
    const j = () => { }
    console.log(g)
    h();
}
f();

// block scope vs function scope

{
    let k = "Shanu Jaiswal"
    console.log(k)
}
{
    const k = "Shanu Jaiswal"
    console.log(k)
}

{
    var k = "Shanu jaiswal"
}
console.log(k)

// default parameter
function l(x, y) {
    if (typeof y === "undefined") {
        y = 4;      // if user provide one value it will set the value of y as 4
    }

    return x + y;
}
console.log(l(8, 6))

// rest parameter