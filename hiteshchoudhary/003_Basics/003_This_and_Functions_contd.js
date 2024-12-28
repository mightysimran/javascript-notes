const user = {
    name: "mightysimran",
    greet: function() {
        console.log(`Hi, ${this.name}.`);
        console.log(this); 
    }
}

// user.greet()
// user.name = "anon"
// user.greet()

// console.log(this); // -> {}

// Note: console.log(this)
// In Browser -> Window
// In Node.js environment -> {}

// function fn(){
//     let name = "anon"
//     console.log(this.name); // -> undefined
// }
// fn()

// const fn = function () {
//     let name = "anon"
//     console.log(this.name);
// }

// arrow fncs 
// const fn = () => {
//     let name = "anon"
//     console.log(this.name);
// }
// fn()

// const add = (first, second) => {
//     return first + second
// }

// const add = (first, second) =>  first + second // -> implicit return

// const add = (first, second) => (first + second)

// const returnO = () => {name: "anon"} // -> undefined
// const returnO = () => ({name: "anon"})

// console.log(returnO());


// const arr = [1,2,3,4,5]
// arr.forEach()