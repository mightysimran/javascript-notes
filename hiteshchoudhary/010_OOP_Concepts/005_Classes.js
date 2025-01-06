class TheString{
    constructor(str){
        this.str = str
    }

    reverse(){
        return `${(this.str).split("").reverse().join("")}`
    }
    lowercase(){
        return `${(this.str).toLowerCase()}`
    }
}

const s = new TheString("Creator")
console.log(s.reverse())
console.log(s.lowercase())


// Behind the scenes

function TheString(str){
    this.str = str
}

TheString.prototype.reverse = function(){
    return `${(this.str).split("").reverse().join("")}`
}

TheString.prototype.lowercase = function(){
    return `${(this.str).toLowerCase()}`
}