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

    const d = (num1, num2) =>{
        return num1+num2
    }
    const e = (num3, num4) => num3*num4

    c();
    console.log(d(2,3))
    console.log(e(1,4))
}
b();

// lexical scope
function f(){
    const g = "Value 1"
    function h(){}
    const i = function(){}
    const j = () => {}
    console.log(g)
}
f();