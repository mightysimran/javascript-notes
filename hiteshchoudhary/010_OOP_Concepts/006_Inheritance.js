class Human{
    constructor(name){
        this.name = name
    }
    introduce(){
        console.log(`Name: ${this.name}`)
    }
}

class Traveler extends Human{
    constructor(name, spacecraft){
        super(name)
        this.spacecraft = spacecraft
    }

    setforth(){
        console.log(`${this.name} sets forth on a journey across the endless horizons aboard the spacecraft named "${this.spacecraft}".`)
    }
}

const simran = new Traveler("Simran", "The Mighty Voyager")
simran.introduce()
simran.setforth()