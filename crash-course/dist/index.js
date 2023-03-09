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
// Union
