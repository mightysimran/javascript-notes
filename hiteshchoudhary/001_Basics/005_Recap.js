// Primitive
// String, Number, Boolean, null, undefined, Symbol, BigInt

const PI = 3.14
let n = 25.596
let isHuman = true
let temperature = null
let email; // -> undefined

const N = 425441265489413545451564454n;

const str1 = Symbol('Hello, world.')
const str2 = Symbol('Hello, world.')
console.log(str1 === str2); // -> false

// Reference (Non-primitive)
// arrays, objects and functions

rgb = ["Red", "Green", "Blue"]

const star = {
    name: "Sirius",
    brightness: "25.4 times that of the Sun",
};

const fn = function () {
    console.log("Hello, world.");
}

// console.log(typeof )

// Reference:
// https://262.ecma-international.org/5.1/#sec-11.4.3

// Notes:
// Primitive datatypes use stack memory
// Reference (Non-primitive) datatypes use heap memory