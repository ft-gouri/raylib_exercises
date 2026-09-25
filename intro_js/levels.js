function f(number){
    return g(number * 2);
}
function g(number){
    return h(number + 5);
}
function h(number){
    return number - 2;
}
console.log(f(4)); //11