// Getter and setter - III

const User = {
    _email: 'mightysimran@example.com',
    _password: "yay!",


    get email(){
        return this._email.toLowerCase()
    },

    set email(value){
        this._email = value
    }
}

const anon = Object.create(User)
console.log(anon.email);