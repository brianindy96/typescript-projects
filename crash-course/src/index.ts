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

// Function

function addNum(x: number , y: number ) :number{
    return x + y;
}

// console.log(addNum(1, '2')); // Error
console.log(addNum(1,2)); // 3

// Void
//void is used where there is no data. For example, if a function does not return any value then you can specify void as return type.

function log(message: string | number): void {
    console.log(message);
}

// log(true); // Error
// log("Hello"); // Hello
// log(2); // 2



interface UserInterface {
    readonly id: number
    name: string
    // age? gives that age is not required and no error in child
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Brian',
}

console.log(`User:`, user1);    // User: { id: 1, name: 'Brian' }

// Interface function

interface MathFunc {
    // x, y parameters are numbers and return value that is a number
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number =>{
    return x + y;
}

console.log(add(4,5)); // 9

const subtract: MathFunc = (x: number, y: number): number =>{
    return x - y;
}

console.log(subtract(5,3)); // 2

// const add: MathFunc = (x: number, y: string): number => x+y;
// this will return an error because the y parameter is a string and not a number as its interface