// Getter and setter - I

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toLowerCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${(this._password).split("").reverse().join("")}`
    }

    set password(value){
        this._password = value
    }
}

const anon = new User("mightysimran@example.com", "yay!")
console.log(anon.email)
console.log(anon.password)