const location = "mountains"
const feel = "zen"

console.log(`In the ${location}, there's a sense of ${feel}.`)

const seasons = new String('spring-summer-autumn-winter')

console.log(seasons[0]); // -> s
console.log(seasons.__proto__); // -> {}

console.log(seasons.length);
console.log(seasons.charAt(2));
console.log(seasons.indexOf('r'));

const newStr = seasons.substring(0, 3)
console.log(newStr); // -> spr

const anotherStr = seasons.slice(-25, 3)
console.log(anotherStr); // -> r

const str = "     mightysimran     "
console.log(str);
console.log(str.trim());

const url = "http://local%host:3000"

console.log(url.replace('%', '')) // -> http://localhost:3000
console.log(url.includes('local')) // -> true
console.log(url.includes('https')) // -> false

console.log(seasons.split('-')); // -> ['spring', 'summer', 'autumn', 'winter']