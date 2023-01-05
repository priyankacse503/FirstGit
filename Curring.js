//Using bind 
let multiply=function(x,y){
    console.log(x*y);
}
let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);

//Using Closures
let multiplyc=function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByThree=multiplyc(3);
multiplyByThree(5);

//Using arrow function
function add(a){
    return (b)=>{
        return b+a;
    }
}
console.log(add(5)(4)); 

        // OR
function add(a){
    return (b)=>{
        return b+a;
    }
}
const functionaddvalue=add(5);
console.log(functionaddvalue(1));


function currying(a)
{
    return (b)=>{
        return (c)=>{
            return a*b+c;
        }
    }
}
const curryingMul=currying(5);
console.log(curryingMul(3)(20));