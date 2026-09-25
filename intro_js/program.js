/*const width = 10;
const height = 5;
const area = width * height;
console.log(area);

let score = 0;
score = 10;
score = 25;
score = 40;
console.log(score);

const num = 17;
if (num % 2 ===0) {
    console.log("Even");
}else {
    console.log("Odd");
}

const n = 5;
if (n===0) {
    console.log("Zero");
} else {
    if (n > 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

const age = 17;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

const number = 23;

const lastDigit = number % 10;
const excess = lastDigit >= 5 ? 10 : 0;
const rounded = number + excess - lastDigit;

console.log(rounded);*/

const number = 23;
const round = (number + 5);
const rounded = round - (round % 10);
console.log(rounded);

