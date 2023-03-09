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

// Union
