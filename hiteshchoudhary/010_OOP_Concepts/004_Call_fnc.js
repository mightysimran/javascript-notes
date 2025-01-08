function configure(name){
    this.name = name
    // console.log("fnc called.")
}

function create(name, email, location){

    configure.call(this, name)
    this.email = email
    this.location = location
}

const anon = new create("mightysimran", "mightysimran@exampl.com", "Earth")
console.log(anon)