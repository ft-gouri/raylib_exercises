function isOdd (number) {
    const odd = (number % 2  !== 0) ? "Odd" : "Even";
    return `${number} is ${odd}`;
}
console.log(isOdd(7));
console.log(isOdd(0));
console.log(isOdd(4));