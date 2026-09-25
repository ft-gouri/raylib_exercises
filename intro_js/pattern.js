function pattern(n) {
    if (n === 0) {
        return '';
    }
    return '*' + pattern(n - 1);
}

function grow(n) {
    if (n === 0) {
        return '';
    }
    return grow(n - 1) + pattern(n) + '\n';
}

function shrink(n) {
    if (n === 0) {
        return '';
    }
    return pattern(n) + '\n' + shrink(n - 1);
}

function display(n) {
    if (n === 0) {
        return '';
    }
    return grow(n) + shrink(n - 1);
}
console.log(display(3));
