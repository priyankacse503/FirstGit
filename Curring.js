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