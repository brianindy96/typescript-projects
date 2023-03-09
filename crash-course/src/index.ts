// Basic Types
let id: number = 6;
let company: string = 'Brian Garton';
let isPublished: boolean = true;
let x: any = 'Hello';
let age: number = 30;
let arrays: string[] = ['one', 'two', 'three'];
let arr : any[] = [1, true, 'hello'];


arrays.push('four');
// ['one', 'two', 'three', 'four']
// arrays.push(2); // Error
console.log(arrays);

//Tuple
let person: [number, string, boolean] = [1, 'Brian', true];
// If it comes out of order, it will throw an error
// let wrongOrder: [number, string, boolean] = ['Brian', 1 true];
// Error

// Tuple Array
let employee: [number, string][]; // arrays of tuples

employee = [
    [1, 'Brian'],
    [2, 'John'],
    [3, 'Sara'],
]

// UNION
// pid could either be a string or a number
let pid: string | number = 22;
// pid = '22'; // no error
// pid=43; // no error
// pid=true; // Error

//ENUM
//An enum is a special "class" that represents a group of constants (unchangeable variables).
//Enums come in two flavors string and numeric.

//By default, enums will initialize the first value to 0 and add 1 to each additional value:

enum Direction1{
    North,
    NorthEast,
    East =8,
    SouthEast,
    South,
    NorthWest,
    SouthWest,
    West,
}

enum Direction2{
    North,
    NorthEast,
    East = 'east',
    SouthEast = 'se',
    South = 's',
    NorthWest = 'nw',
    SouthWest = 'sw',
    West = 'w',
}

// console.log(Direction1.East); // 8
// console.log(Direction1.North); // 0
// console.log(Direction1.NorthEast); // 1
// console.log(Direction1.SouthEast); // 9

// console.log(Direction2.North);  // 0
// console.log(Direction2.East);   // east

//Objects

type User = {
    id: number,
    name: string,
    reverse: boolean,
}

const user: User = {
    id: 1,
    name: 'Brian',
    reverse: true,
}

// Type Assertion
let cid: any = 1

// let customerId = <number>cid;
// let customerId = cid as number;