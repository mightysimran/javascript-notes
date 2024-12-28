// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Type coercion
// The problem arises when we do not compare same datatypes

// console.log("2" > 1); // -> true
// console.log(2 > "1"); // -> true
// console.log(0 == "0"); // -> true

// console.log(Number(null)) // -> 0
// console.log(null > 0); // -> false
// console.log(null == 0); // -> false
// console.log(null >= 0); // -> true

// console.log(undefined > 0); // -> false
// console.log(undefined < 0); // -> false
// console.log(undefined == 0); // -> false

// console.log(null == undefined); // -> true

// === // strict

// console.log("2" == 2); // -> true
// console.log("2" === 2); // -> false

// Notes:
// -> == allows type coercion
// -> === does not allow type coercion