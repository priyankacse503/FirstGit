//var a=10;
//function printname(name){
  //  console.log(name);
//}
//printname("Priya");
//console.log(a);


//Another method

//printName("YAVTECH");
//console.log(a);
//var a = 3;
//function printName(name){
//console.log(name)
//}

//Another
//console.log(printName());
//console.log(a);
//var a = 3;
//var printName = (name) => {
//console.log(name)
//}

//Another
//console.log(printName);
//console.log(a);
//var a = 3;
//var printName = function (name) {
//console.log(name)
//}

//Another
//console.log(printName);
//console.log(a);
//commented var a=5
//var printName = function (name) {
//console.log(name)
//}

//var a = 2;
//var c = 2;
//function b(){
//var x = 2;
//var c = 4
//console.log(c)
//}
//console.log(a);
//console.log(this.a);
//console.log(this.c)
//console.log(this.x)
//console.log(window.a)
//console.log(window.x)
//console.log(b());

//Another
//function abc() {
  //  console.log(a);
    //console.log(b);
    //}
    //abc();
    //var a = 7;
    //var b=4;

    //Another 
    //function outerfunction() {
      //console.log(a);
      //var c = 10;
      //innerfunction();
      //function innerfunction() {
      //console.log(b);
      //console.log(c);
      //}
      //}
      //var a = 7;
      //var b =3
      //outerfunction();

//Another

/*function outerfunction() {
  console.log(a);// undefined because a is not in local storage if next line is not there a is 7
  var a = 10;
  innerfunction();
    function innerfunction() {
    console.log(a);
    console.log(window.a);
    console.log(this.a)
    }
    }
  var a = 7;
  var b =3
  outerfunction();*/
  
  //Another
/*console.log(a)
var a =5;
console.log(b);*/

/*let a = 5;
var b = 6;
console.log(this.b);
console.log(window.b)
console.log(window.a)
console.log(this.a);*/
/*var a=5;
var a=6;
console.log(a);*/
/*var obj={
  "key1" : "value1",
  "key2" : "value2",
  "key3" : "value3",
  "key4" : "value4"
}
Object.keys(obj).forEach(key =>{
  console.log(obj[key])
})*/

//settimeout
/*console.log('a');
console.log('b');
setTimeout(()=> console.log('c'), 1000);
setTimeout(()=> console.log('C'), 0);
console.log('d')*/
/*var arr = [1, 2, 3, 4, 5, 6];
var result = [];
let i;
//This function will return the square of the number
const square = function(num){
return num*num;
}
for(i=0; i< arr.length; i++){
    result.push(square(arr[i]));
  }
  var m=arr.map(function(e){
    return e*e;
  });
  console.log("Using map: "+m);
console.log(result);*/
/*var a = 50;
{
var a =30;
let b = 20;
let c = 30;
}
console.log(a)*/
/*let a = 50;
function fun(){
var a =30;
let b = 20;
let c = 30;
}
fun();
console.log(a)*/

/*function x(){
  let a = 10;
  function y(){
      console.log(a);
    }
   return y();
  }
x();*/

/*function x(){
  let a = 10;
  function y(){
   console.log(a);
  }
  return y;
  }
  console.log( x());*/

 /* function x(){
    let a = 10;
    function y(){
        console.log(a);
     }
    return y;
    }
    const z = x()
    console.log(z());*/

   /*function x(){
    let a = 10;
      function y(){
        console.log(a);
        return a;// if return is not there output is 50 undefined if return present 50 50
      }
      a= 50;
      return y;
      }
      const z = x()
      console.log(z());*/

/*var obj={num:2};
var add=function(a,b,c)
{
  return this.num+a*b+c;
};
var arr=[2,4,5];
//console.log(add.call(obj,1,2,3));
//console.log(add.apply(obj,arr));
var bound=add.bind(obj);
console.log(bound(1,2,4));*/

/*var Student={age:20};
var printage=function()
{
  return this.age;
};
var bound=printage.bind(Student);
console.log(bound());*/
/*function y(){
    for(let i=1;i<6;i++){
    setTimeout(() => console.log(i),
    i * 1000)
  }
  console.log('Done Coding')
  }
  y();*/
  /*function y(){
    for(let i=1;i<6;i++){
      function close(x){
        setTimeout(() => console.log(x),
      x * 1000)
      }
      close(i);
    }
    console.log('Done Coding')
    }
    y();*/
    
    const name = (arr)=>{
      var count=0;
      return ()=>{
        console.log("Hello "+arr[count]);
        count++;
      }
    }
    const fun = name(["Ram","Shyam"])
   fun();//Prints Hello Ram
   fun();//Prints Hello Shyam

    