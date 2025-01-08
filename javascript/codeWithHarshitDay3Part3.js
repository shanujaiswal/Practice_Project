// parameter destructing

// Used in objects 
// Used too much in Reacts

const a = {
    namee: "Shanu",
    gender: "male",
    age: 500
}

// normal way
function b(obj) {
    console.log(obj.namee)
    console.log(obj.gender)
}
b(a)

//destructing 
function c({namee, gender, age}) {
    console.log(namee)
    console.log(gender)
}
c(a)