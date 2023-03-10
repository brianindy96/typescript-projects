"use strict";
// Basic Types
let id = 6;
let company = 'Brian Garton';
let isPublished = true;
let x = 'Hello';
let age = 30;
let arrays = ['one', 'two', 'three'];
let arr = [1, true, 'hello'];
arrays.push('four');
// ['one', 'two', 'three', 'four']
// arrays.push(2); // Error
console.log(arrays);
//Tuple
let person = [1, 'Brian', true];
// If it comes out of order, it will throw an error
// let wrongOrder: [number, string, boolean] = ['Brian', 1 true];
// Error
// Tuple Array
let employee; // arrays of tuples
employee = [
    [1, 'Brian'],
    [2, 'John'],
    [3, 'Sara'],
];
// UNION
// pid could either be a string or a number
let pid = 22;
// pid = '22'; // no error
// pid=43; // no error
// pid=true; // Error
//ENUM
//An enum is a special "class" that represents a group of constants (unchangeable variables).
//Enums come in two flavors string and numeric.
//By default, enums will initialize the first value to 0 and add 1 to each additional value:
var Direction1;
(function (Direction1) {
    Direction1[Direction1["North"] = 0] = "North";
    Direction1[Direction1["NorthEast"] = 1] = "NorthEast";
    Direction1[Direction1["East"] = 8] = "East";
    Direction1[Direction1["SouthEast"] = 9] = "SouthEast";
    Direction1[Direction1["South"] = 10] = "South";
    Direction1[Direction1["NorthWest"] = 11] = "NorthWest";
    Direction1[Direction1["SouthWest"] = 12] = "SouthWest";
    Direction1[Direction1["West"] = 13] = "West";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["North"] = 0] = "North";
    Direction2[Direction2["NorthEast"] = 1] = "NorthEast";
    Direction2["East"] = "east";
    Direction2["SouthEast"] = "se";
    Direction2["South"] = "s";
    Direction2["NorthWest"] = "nw";
    Direction2["SouthWest"] = "sw";
    Direction2["West"] = "w";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Brian',
    reverse: true,
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
// let customerId = cid as number;
// Function
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, '2')); // Error
console.log(addNum(1, 2)); // 3
// Void
//void is used where there is no data. For example, if a function does not return any value then you can specify void as return type.
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Brian',
};
console.log(`User:`, user1); // User: { id: 1, name: 'Brian' }
const add = (x, y) => {
    return x + y;
};
console.log(add(4, 5)); // 9
const subtract = (x, y) => {
    return x - y;
};
console.log(subtract(5, 3)); // 2
// Classes with Data Modifiers
// These classes are public by default
// There are public, private, and protected modifiers
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        // because the name was set to private, it can only be accessed within the class
        // return 1; // this returns an error
        return `${this.name} is now registered`;
    }
}
const brian = new Person(1, 'Brian');
console.log(typeof (brian)); // object => Person { id: 1, name: 'Brian' }
const john = new Person(3, 'John');
console.log(john); // Person { id: 3, name: 'John' }
// now we can access the id and name as follows
// console.log(brian.register()); // Brian is now registered
// console.log(brian.id); // Error, because id is modified to private
// SUBCLASS
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // super calls the constructor of the parent class, which is Person
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp); // Employee { id: 3, name: 'Shawn', position: 'Developer' }
console.log(emp.register()); // Shawn is now registered
// GENERICS
// any
// this function will return an array of any type
// function getArray(items: any[]): any[]{
//     return new Array().concat(items);
// }
// // specify the type of the array here instead
// let numArray = getArray([1,2,3,4]);
// let strArray = getArray(['brad', 'john', 'jill']);
// numArray.push('hello'); // no error
// We somehow want the number arrays to only have numbers
// and strings arrays to only have strings
// // this function will return an array of any type
// T is a generic type
function getArray(items) {
    return new Array().concat(items);
}
// specify the type of the array here instead
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'jill']);
numArray.push(7); // no error
console.log(numArray); // [ 1, 2, 3, 4, 7 ]
// numArray.push("Hello"); // Error because we specified that the array should only have numbers
