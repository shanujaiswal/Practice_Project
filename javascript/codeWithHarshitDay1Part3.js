//nested if else

let a = 49;
let b = prompt("guess a number");
if (b == a) {
    console.log("you are idiot")
} else {
    if (b > a) {
        console.log("you are too much high")
    }else(b< a)
    console.log("you are lowly hooman")
}

let c = 49;
let d = Number(prompt("Guess a number")); // Convert input to number

if (d === c) {
    console.log("You got it right!");
} else if (d < c - 40) {
        console.log("Way too low! Try a much higher number");
    } else if (d < c - 30) {
        console.log("Too low - go up by about 30+");
    } else if (d < c - 20) {
        console.log("Still low - go up by about 20+");
    } else if (d < c - 10) {
        console.log("Getting closer but still low - go up by about 10+");
    } else if (d > c + 40) {
        console.log("Way too high! Try a much lower number");
    } else if (d > c + 30) {
        console.log("Too high - go down by about 30+");
    } else if (d > c + 20) {
        console.log("Still high - go down by about 20+");
    } else if (d > c + 10) {
        console.log("Getting closer but still high - go down by about 10+");
    } else if (d > c) {
        console.log("Almost there but still a bit high!");
    } else {
        console.log("Almost there but still a bit low!");
    }
}