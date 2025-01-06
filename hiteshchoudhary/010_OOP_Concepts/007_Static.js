class User{
    constructor(name){
        this.name = name
    }
    getName(){
        console.log(`Name: ${this.name}`)
    }
}

class Librarian extends User{
    constructor(name, email){
        super(name)
        this.email = email
    }
    getName(){
        super.getName()
    }
    static generateLibraryCard(){
        return `LIB-${Math.floor(Math.random() * 10000)}`;
    }
}

const librarian = new Librarian("anon", "anon@example.com")

librarian.getName()

// console.log(librarian.generateLibraryCard()); // -> Error
console.log("Library Card:", Librarian.generateLibraryCard())

