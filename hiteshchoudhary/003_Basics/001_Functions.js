// function fn() {
//     console.log("Hello, world.")
// }

// fn // -> reference
// fn() // -> execution

// function add(number1, number2) { 
//     console.log(number1 + number2)
// }
// add(5, 5) 

function add(number1, number2){
    return number1 + number2
    console.log("Hello, world.") // -> This line doesn't execute 
}
// const res = add(5,5)
// console.log("Result: ", res);
// console.log(add(5,5))

function fn(name = "anon"){
    if(!name){
        console.log("Enter a valid username.");
        return
    }
    return `${name} just logged in.`
}

// console.log(fn("mightysimran"))

function calc(...args){
    return args;
}
// console.log(calc(1,2,3)) // -> [1, 2, 3]

const gps = {
    location: "The Himalayas"
}
function handleO(gps){
    console.log(`Location: ${gps.location}`);
}
handleO(gps)

const arr = [1,2,3,4,5]

function return_first(arr){
    return arr[0]
}
// console.log(return_first(arr));
// console.log(return_first([1,2,3]));