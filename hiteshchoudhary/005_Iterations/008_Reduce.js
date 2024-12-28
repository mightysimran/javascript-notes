const numbers = [1, 2, 3]

initial=0

const total = numbers.reduce(function (accumulator, current_value) {
    // console.log(`accumulator: ${accumulator}, current value: ${current_value}`)
    return accumulator + current_value
}, initial)

// const total = numbers.reduce((accumulator, current_value) => accumulator + current_value, 0)

// console.log(total);


const smth = [
    {
        product: "first",
        amount: 2999
    },
    {
        product: "second",
        amount: 999
    },
    {
        product: "third",
        amount: 5999
    },
    {
        product: "fourth",
        amount: 12999
    },
]

const grandTotal = smth.reduce((accumulator, element) => accumulator + element.amount, 0)
console.log(grandTotal); // -> 22996