"use strict";
// function add(a: number, b: number) {
//     console.log(a + b)
// }
// add(5, 5)
// const sub = (n1: number, n2: number) => console.log(n1-n2);
// // console.log(sub());
// sub(10,5)
// const mul=(n1:number,n2:number):number=>{
//     console.log(n1*n2)
//     console.log('--');
//     return 1
// }
// mul(5,5)
// function add(num1:number,num2:number,...num3:number[]):number{
//     return num1+num2+num3.reduce((a,b)=>a+b,0)
// }
// let numbers=[1,2,3,4,5]
// console.log(add(2,3,...numbers));
function createArray(...nums) {
    console.log(nums);
}
createArray(1, 2, 3, 4);
const adding = () => {
    console.log('hi');
    return 5;
};
function add() {
    console.log('hey');
}
