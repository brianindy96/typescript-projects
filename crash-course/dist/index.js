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
// const add: MathFunc = (x: number, y: string): number => x+y;
// this will return an error because the y parameter is a string and not a number as its interface
