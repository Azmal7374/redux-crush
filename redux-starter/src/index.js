// console.log("Hello World!");

// function sayHello() {
//     return function() {
//         return "Hello World"
//     }
// }
// let fn= sayHello();
// let message = fn()
// sayHello()


// function greet() {
//     console.log(fnMessage());
// }
// greet(sayHello)



// Higher Order function

/* function greet(fn) {
   console.log(fn)
}

function sayHello() {
    return function(){
        return "Hello World"
    };
}

let numbers = [1,2,3];
numbers.map(number => number * 2)


setTimeout(() =>console.log('Hello'), 5000); */



// Function Composition

/* let input = '  Javasctipt  ';
let output = '<div>' + input.trim() + '</div>'

const trim = str => str.trim()
const wrapInDiv = str => `<div>${str}</div>`

const toLowerCase = str => str.toLowerCase()

const result = wrapInDiv(toLowerCase(trim(input)));
 */
//trim
//wrapInDiv



//lodash


// *****Pure Function***

// ***Immutability***

//  let names = 'Azmal';
//  let newName = names.toUpperCase();

//  let book = {};
//  book.title = "..."



/* const person ={
    name: 'Tasmia Mitu',
    address: {
        country: 'BD',
        city: 'Barisal'
    }
};
const updated = {...person,
    address: {
     ...person.address, 
     city: 'Crowland'
    },
     name: 'Tumi'
    };
// updated.address.city = 'Babugong'
console.log(updated) */

const numbers = [1,2,3];

//adding
// const added = [...numbers, 4]

const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(added)

//removing

const removed = numbers.filter(n => n !==2);
console.log(removed)

//Updating

const updated = numbers.map(n => n === 2 ? 20 : n);
console.log(updated)