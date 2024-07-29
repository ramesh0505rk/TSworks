"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Ramz_x;
Object.defineProperty(exports, "__esModule", { value: true });
class Ramz {
    constructor(name, age) {
        _Ramz_x.set(this, void 0);
        this.name = name, this.age = age, __classPrivateFieldSet(this, _Ramz_x, 20, "f");
    }
    printDetails() {
        console.log('Name: ', this.name, '\nAge: ', this.age, '\nNo.: ', __classPrivateFieldGet(this, _Ramz_x, "f"));
    }
}
_Ramz_x = new WeakMap();
class Child extends Ramz {
    constructor(name, age) {
        super(name, age);
        this.name = name, this.age = age;
    }
}
// const obj=new Ramz('ramesh',22)
// obj.printDetails()
// console.log(obj.y);
const ramz = new Ramz('kevin', 20);
ramz.printDetails();
class Young {
    exe() {
        console.log("Overloaded function's message");
    }
}
var ob = new Young();
ob.exe();
