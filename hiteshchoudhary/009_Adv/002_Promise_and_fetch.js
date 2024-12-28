// Creation
const promise1 = new Promise(function(resolve, reject){
    
    // Do an async task

    setTimeout(function(){
        console.log("Async task 1")
        resolve()
    }, 1000)
})

// consume
promise1.then(function(){
    console.log("Async 1 resolved")
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved.")
})


const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: "anon", email: "anon@example.com"})
    }, 1000)
})

promise3.then(function(user){
    console.log(user)
})


const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        
        if(!error){
            resolve({name: "mightysimran", email: "mightysimran@example.com"})
        }
        else{
            reject("Error: Promise 4")
        }
    }, 1000)
}) 

promise4
.then((user) => {
    console.log(user)
    return user.name
})
.then((name) => {
    console.log(name)
})
.catch((error) => {
    console.log(error)
})
.finally(() => console.log("The promise is no longer pending."))


const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        
        if(!error){
            resolve({name: "might", email: "might@example.com"})
        }
        else{
            reject("Error: Promise 5")
        }
    }, 1000)
})

// consume
async function handlePromise5(){
    try{
        const response = await promise5
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

handlePromise5()


// async function get(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
//         const data = await response.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// get();


fetch("https://api.github.com/users/mightysimran")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))



// Promise.all()