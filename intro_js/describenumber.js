function describeNumber (number) {
    if (number > 0){
        return `${number} is Positive`;
    }else if (number < 0){
        return `${number} is Negative`;    
    }
    return `${number} is ${"Zero"}`;

}
console.log(describeNumber(10));
console.log(describeNumber(-10));
console.log(describeNumber(0));