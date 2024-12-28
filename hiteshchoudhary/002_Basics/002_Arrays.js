const arr1 = [1,2,3]
const arr2 = [4,5,6]

// arr1.push(arr2)
// console.log(arr1) // -> [1,2,3,[4,5,6]]
// console.log(arr1[3][0]); // -> 4

const arr3 = arr1.concat(arr2)
console.log(arr3); // -> [1,2,3,4,5,6]

// ... -> spread operator
const arr4 = [...arr1, ...arr2]
console.log(arr4); // -> [1,2,3,4,5,6]

const arr5 = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10]]]

const anotherArr = arr5.flat(Infinity)
console.log(anotherArr);

console.log(Array.isArray("smth")) // -> false
console.log(Array.from("mightysimran")) // -> ['m', 'i', 'g', 'h', 't', 'y', 's', 'i', 'm', 'r', 'a', 'n']

console.log(Array.from({name: "mightysimran"})) // -> [] // important

let score1 = 1
let score2 = 2
let score3 = 3

console.log(Array.of(score1, score2, score3));