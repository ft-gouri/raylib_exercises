function parentheses (number) {
    if (number === 0) {
        return " ";
    }
    return "(" + parentheses(number - 1) + ")";
}
console.log(parentheses(0));
console.log(parentheses(2));