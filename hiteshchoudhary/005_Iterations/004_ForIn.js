// forin

const lang = {
    py: "Python",
    cpp: 'C++',
    m: "Matlab",
    go: "Go",
    kt: "Kotlin",   
}

for (const key in lang) {
    // console.log(`.${key}: ${lang[key]}`);
}

const string = "Hello world!"
for (const char in string) {
    // console.log(string[char])
}

const arr = ["earth", "mars", "saturn"]

for (const key in arr) {
    // console.log(arr[key]);
}

const map = new Map()

map.set("in", "India")
map.set("fr", "France")
map.set("gr", "Greece")
map.set("in", "India")

for (const smth in map) {
    console.log(smth);
} // -> Nothing happens.

// Note:
// forin: objects, strings, arrayss