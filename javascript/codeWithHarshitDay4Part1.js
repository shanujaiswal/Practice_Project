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

c.forEach(function (number, index){
    console.log(`index is ${index} number is ${number}`)
})