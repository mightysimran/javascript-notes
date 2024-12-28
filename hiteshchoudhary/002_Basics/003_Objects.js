// singleton -> Object.create
// Here we'd discuss the literal syntax

const Sym = Symbol("Key")

const user = {
    username: "mightysimran",
    "full name": "Simran Kaur",
    [Sym]: "<key>",
    location: "The Himalayas",
    email: "mightysimran@google.com",
    isAuthenticated: true,
    type: ["Administrator", "Editor"]
}

// console.log(user.type)
// console.log(user["full name"])
// console.log(user[Sym])
// console.log(typeof Sym)
// console.log(user);

// Object.freeze(user) // -> Protects from further modifications

// user.email = "mightysimran@microsoft.com"
// console.log(user);

// user.fn = function(){
//     console.log("Hello, world.");
// }

// user.fn = function(){
//     console.log(`Hi, ${this.username}`);
// }

// console.log(user.fn); // -> [Function (anonymous)]
// console.log(user.fn()); 