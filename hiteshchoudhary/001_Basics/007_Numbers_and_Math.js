const n = 25
console.log(n); // -> 25

const balance = 100
console.log(balance); // -> [Number: 100]

console.log(balance.toString().length); // -> 3
console.log(balance.toFixed(2)); // -> 100.00
console.log(typeof balance);

const n1 = 124.52
console.log(n1.toPrecision(3)); // -> 125
console.log(n1.toPrecision(4)); // -> 124.5

const number = 1000000
// console.log(number.toLocaleString('')); // -> 1,000,000

console.log(Math); // -> Object [Math] {}
console.log(Math.abs(-4)); // -> 4
console.log(Math.round(4.896)); // -> 5
console.log(Math.ceil(4.25)); // -> 5
console.log(Math.floor(4.96)); // -> 4
console.log(Math.min(1,2,3,4,5)); // -> 1
console.log(Math.max(1,2,3,4,5)); // -> 5

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 25

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // -> important