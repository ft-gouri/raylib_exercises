function describeWord (word){
    return (word.length == 0) ? "Empty" : "Non-Empty";
}
console.log(describeWord(""));
console.log(describeWord("hello"));
console.log(describeWord("h"));

