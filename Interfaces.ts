interface Student{
    name:string,
    age:number,
    college:string,
}//everything is required in this type

var ramesh:Student

ramesh={name:'Ramz',age:22,college:'kct'}

console.log(ramesh);

// class User{
//     name!:string
//     age!:number
// }

// var myUser:User
// myUser={name:'ramz',age:21}

// myUser.name='ramz'
// myUser.age=21
// console.log(myUser);

interface Users{
    name:string,     
    age:number,
    address?:string, //optional
    phone:number,
}//address is optional in this type, we can make any property as optional

var user1:Users
user1={name:'Kevin',age:25,phone:9360883227}

interface I1{
    name:string,
    age:number,
    school:string,
}

interface I2 extends I1{
    college:string,
    phone:number,
    email:string,
}

var std:I2
std={name:'Ramz',age:22,school:'AKDR',college:'kct',phone:9360883227,email:'ramesh0505rk@gmail.com'}
console.log(std);

//export interface 
export interface GetMethod{
    exe():void
}