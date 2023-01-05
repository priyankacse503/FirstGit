
//In global scope
this.table='window table';
const cleanTable=function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
}

this.table1='window table1';
const cleanTable1=function(soap){
    const innerFunction=(_soap)=>{
        console.log(`cleaning ${this.table1} using ${soap}`);
    }
   innerFunction(soap);
}

//inside a object
let a={
    table:'Object room'
}
//console.log("Inside a object: "+a.table);

//inside a method
let b={
    table:'Method room'
    /*cleanTable(){
        console.log(`Cleaning ${this.table}`)
    }*/
}
//using an object
this.garage={
    table: 'Global room'
    /*cleanTable(){
        console.log(`Cleaning ${this.table}`)
    }*/
};
//console.log("Inside a global scope: "+this.garage.table);
//b.cleanTable();//calling using private variable
//this.garage.cleanTable();//calling using object


//Using constructor

let createRoom=function(name){
    this.table=`${name}s table`
}
//Using prototype
createRoom.prototype.cleanTable=function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
};

//Using classes

class classRoom{
    constructor(name){
        this.table=`${name}s table`
    }
    cleanTable=function(soap){
        console.log(`cleaning ${this.table} using ${soap}`);
    }
}

const jillsRoom=new createRoom('jill');
const johnsRoom=new createRoom('John');
//Instead of writting methods so many times we can call them like 
cleanTable.call(this,'Dettol soap');//for global
cleanTable1.call(this,'global soap');//for global
cleanTable.call(this.garage,'object soap');//object
cleanTable.call(b,"variable soap");//private variable
cleanTable.call(jillsRoom,'some soap');
cleanTable.call(johnsRoom,'some1 soap');
