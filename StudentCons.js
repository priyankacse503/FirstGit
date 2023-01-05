class Student{
        constructor(name,age,phonenumber,marks){
        this.name=name;
        this.age=age;
        this.phonenumber=phonenumber;
        this.marks=marks;
       
        const  eligible =(marks)=>{
        if(this.marks >40)
        {
            console.log("Eligible");
        }
        else
        {
            console.log("Not Eligible");
        }
      };
     eligible(marks);
     
     const  placements =(age)=>{
            if(this.marks >40)
            {
               return console.log('true');
            }
            else
            {
                return console.log('false');
            }  
      };
     placements(marks);
     const  names =(age)=>{
        if(this.marks >40)
        {
           return console.log(`${this.name} is Eligible for Placements`);
        }
    };
    names(marks);
    }
}
const stu1=new Student('priya',25,'892743489',100);
const stu2=new Student('hari',20,'892743489',90);
const stu3=new Student('dad',50,'892743489',20);
const stu4=new Student('mom',45,'892743489',80);
const stu5=new Student('jai',15,'892743489',15);
