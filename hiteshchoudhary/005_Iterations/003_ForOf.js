// forof

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const string = "Hello world!"
for (const char of string) {
    // console.log(char)
}

// maps

const map = new Map()

map.set("in", "India")
map.set("fr", "France")
map.set("gr", "Greece")
map.set("in", "India")

// console.log(map); // -> Map(3) { 'in' => 'India', 'fr' => 'France', 'gr' => 'Greece' }

// for (const element of map) {
//     console.log(element); 
// }

for (const [key, value] of map) {
    // console.log(`${key}: ${value}`);
}

const o = {
    name: "anon",
    location: "The Himalayas"
}

// for (const element of o) {
//     console.log(element) 
// } // -> Throws an error; o is not iterable

// for (const [key, value] of o) {
//     console.log(key,value)
// } // -> Throws an error; o is not iterable

// Note:
// forof - arrays, strings, maps