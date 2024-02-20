let a =[20,30,40,50]
let total= a.reduce(myfun);
function myfun(value,total) {
    return value+=total
}
console.log(total);