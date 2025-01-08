// Getter and setter - II

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toLowerCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return `${(this._password).split("").reverse().join("")}`
        },
        set: function(value){
            this._password = value
        }
    })

}

const anon = new User("mightysimran@example.com", "yay!")

console.log(anon.email);