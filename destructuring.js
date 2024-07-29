"use strict";
let { name: username, age } = { name: 'ramz', age: 22, email: 'ramz@gmail.com' }; //object destructuring
console.log(`${username}\n${age}`);
let [u1, u2, ...u3] = [
    { name: 'ramz', age: 26, email: 'ramz@gmail.com' },
    { name: 'kevin', age: 22, email: 'kevin@gmail.com' },
    { name: 'john', age: 24, email: 'john@gmail.com' },
    { name: 'peter', age: 30, email: 'peter@gmail.com' },
]; //array of objects destructuring
console.log(u1);
let { age: userAge } = u1;
console.log(userAge);
console.log(u3);
let res = u3.filter(user => user.age > 24);
console.log(res);
var myUser = [
    { name: 'ramz', age: 26, email: 'ramz@gmail.com' },
    { name: 'kevin', age: 22, email: 'kevin@gmail.com' },
    { name: 'john', age: 24, email: 'john@gmail.com' },
    { name: 'peter', age: 30, email: 'peter@gmail.com' },
];
console.log();
console.log(...myUser);
function shows(...ud) {
    console.log(ud);
}
shows(...myUser);
