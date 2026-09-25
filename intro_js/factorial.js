/*function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}
console.log(factorial(5));

function countdown(number) {
  if (number === 0) {
    return;
  }

  console.log(number);
  countdown(number - 1);
}
countdown(3);

function sumTo(number) {
  if (number === 0) {
    return 0;
  }

  return number + sumTo(number - 1);
}
console.log(sumTo(4));*/

function f(number) {
  if (number === 0) {
    console.log("zero");
    return 0;
  }

  console.log("before", number);

  const result = f(number - 1);

  console.log("after", number);

  return result + number;
}

console.log(f(3));