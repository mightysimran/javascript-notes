// console.log(name.truelength);


const spaceExploration = ["Breakthrough Starshot", "Voyager Continuation", "Artemis (Artemis I, II, III)"]

const missions = {
    mission1: {
        name: "Breakthrough Starshot",
    },
    mission2: {
        name: "Voyager Continuation",
    },
    mission3: {
        name: "Artemis (Artemis I, II, III)",
    }
}

Object.prototype.might = function(){
    console.log(`Might is within everything.`)
}

Array.prototype.fnc = function(){
    console.log(`This function works with arrays.`)
}

// missions.might()
// spaceExploration.might();

// missions.fnc(); // -> Error
// spaceExploration.fnc();


// inheritance

const Traveler = {
    who: "Human",
    origin: "Earth", 
}

const Spacecraft = {
    hasEngines: true,
    fuel: "",
    speed: ""
}

const Planet = {
    hasAtmosphere: true,
}

const Mars = {
    name: "Mars",
    __proto__: Planet
}

Spacecraft.__proto__ = Traveler

// modern syntax
Object.setPrototypeOf(Spacecraft, Traveler)

console.log(Spacecraft.who) // -> Human


let str = "Traveler    "

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`The true length of string: ${this.trim().length}`)
}

str.truelength();