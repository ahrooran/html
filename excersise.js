const numbers = [1,'2',3,4,'5','6'];
let result=0;
for (let x of numbers){
    result += parseInt(x);
}

console.log(result);