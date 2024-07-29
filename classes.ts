import {GetMethod} from './Interfaces'

class Ramz{
    name!:string
    age!:number

    #x:number
    public y!:string

    constructor(name:string,age:number){
        this.name=name,this.age=age,this.#x=20
    }

    public printDetails():void {
        console.log('Name: ',this.name,'\nAge: ',this.age,'\nNo.: ',this.#x);
    }   
}

class Child extends Ramz{
    constructor(name:string,age:number){
        super(name,age)
        this.name=name,this.age=age
    }
}

// const obj=new Ramz('ramesh',22)
// obj.printDetails()
// console.log(obj.y);

const ramz=new Ramz('kevin',20)
ramz.printDetails()

class Young implements GetMethod{  
    exe(): void {  
        console.log("Overloaded function's message");   
        
    }  
}  

var ob=new Young()  
ob.exe()