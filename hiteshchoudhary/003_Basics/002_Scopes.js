// var c = undefined;
let a = 5

if (true){
    let a = undefined;
    const b = undefined;
    var c = 25.996
    // console.log(`Inner: ${a}`); // -> undefined
}

// console.log(a); // -> 5
// console.log(b); // -> Error
// console.log(c); // -> 25.996

function one(){
    const name = "anon"
    function two(){
        const pi = 3.14
        console.log(name);
    }
    // console.log(pi); // -> Error
    two()
}
// one()

if (true){
    const name = "pi "
    if (name.trim() === "pi") {
        const pi = 3.14
        console.log(name + pi);
    }
    // console.log(pi); // -> Error
}
// console.log(name); // -> Error


// Hoisting

console.log(fn(5)) // -> 6

function fn(num){
    return num + 1
}

// anotherfn(5) // -> Error

// const anotherfn = function(num){
//     return num + 2
// }