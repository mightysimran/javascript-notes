const user = {
    name: "mightysimran",
    mail: "mightysimran@example.com",
    auth: true,

    fetch_record: function(){
        console.log("The record fetched from the database.")
        console.log(`mail: ${user.mail}`)

        console.log(this) 
        // returns
        // {
        //     name:'mightysimran, 
        //     mail:'mightysimran@example.com', 
        //     auth: true, 
        //     fetch_record: [Function: fetch_record]
        // }
    }
}

console.log(user.mail)
console.log(user.fetch_record())
console.log(this) // -> {}

function Member(name, mail, auth){
    this.name = name
    this.mail = mail
    this.auth = auth

    this.greet = function(){
        console.log(`Hi, ${this.name}`)
    }

    // return this // -> default
}

const member1 = new Member("anon", "anon@example.com", false)
const member2 = new Member("mightysimran", "mightysimran@example.com", false)

console.log(member1.constructor) 
console.log(member2) 