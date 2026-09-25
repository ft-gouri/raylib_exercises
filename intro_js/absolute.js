function absolute (number){
    // if (number < 0){
    //      return number * -1;
    // }
    // return number;

return number >= 0 ? number : -(number);

}
console.log(absolute(10));
console.log(absolute(0));
console.log(absolute(-8));

