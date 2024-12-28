const password = ""

if (!password) {
    console.log("Password is required.");
} 

// Boolean Coercion Values - truthy and falsy

// "0", 'false', " ", [], {}, function(){} -> true
// false, 0, -0, BigInt 0n, "", null, undefined, NaN -> false


const arr = [] 
if (arr.length === 0) {
    console.log("The arr -> []");
}
// Note:
// Object.keys(o).length - for objects.

// Nullish Coalescing Operator (??):
// Returns the right-hand operand when the left-hand operand is null or undefined.

let val;

val = 5 ?? 10 // -> returns 5
val = null ?? 5 // -> returns 5
val = undefined ?? 5 // -> returns 5
val = null ?? undefined ?? 25 // -> returns 25

console.log(val);

// Ternary Operator
// condition ? true : false

const temperature = 25
temperature > 25 ? console.log("Hot") : console.log("Cold");