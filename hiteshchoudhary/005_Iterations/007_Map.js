const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// const n = numbers.map((num) => { return ++num })
// console.log(n)

const n = numbers.map((num) => num * 10).map((num) => num - 4).filter((num) => num>50 && num<75)
console.log(n)