const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor)

// Returns
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

// console.log(Math.PI) // -> 3.141592653589793
// Math.PI = 4 
// console.log(Math.PI) // -> 3.141592653589793

// Math.PI can't be updated because its property descriptor specifies that it is non-writable. Math.PI is designed to be immutable to preserve its mathematical correctness and integrity.

const novel = {
    name: "The Alchemist",
    author: "Paulo Coelho",

    description: function(){
        console.log("Paulo Coelho's masterpiece tells the mystical story of Santiago, who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, following our dreams.")
    }
}

console.log(Object.getOwnPropertyDescriptor(novel, "name"))

// Returns
// {
//     value: 'The Alchemist',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

Object.defineProperty(novel, "author", {
    // writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(novel, "author")) 


for(let [key, value] of Object.entries(novel)){
    if(typeof value != 'function'){
        console.log(`${key}: ${value}`)
    }
} 

// Returns
// name: The Alchemist

