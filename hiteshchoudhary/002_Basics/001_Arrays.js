const myArr = [1, 2, 3, 4, 5]
const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr[0]);

// Array methods

// myArr.push(6) // adds to the end
// myArr.pop() // deletes last element of arr

// myArr.unshift(0) // adds to the beginning
// myArr.shift() // deletes first element of arr

// console.log(myArr.includes(25)); // -> false
// console.log(myArr.indexOf(25)); // -> -1
// console.log(myArr.indexOf(1)); // -> 0

// const newArr = myArr.join(" ")

// console.log(myArr); // -> [ 1, 2, 3, 4, 5 ]
// console.log( newArr); // -> 1 2 3 4 5
// console.log(typeof newArr); // -> string

// slice, splice

console.log("A ", myArr);

const arr1 = myArr.slice(1, 3) // [start, end)
console.log(arr1);

console.log("B ", myArr);

const arr2 = myArr.splice(1, 3) // [start, end]
console.log(arr2);

console.log("C ", myArr);

// slice does not modify the original arr, while splice does.