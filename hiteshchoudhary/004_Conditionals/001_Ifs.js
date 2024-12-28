const temperature = 22

if (temperature < 25) {
    console.log("The temperature is less than 25 °C.")
}
else {
    console.log("The temperature is more than or equal to 25 °C.")
}

// <, >, <=, >=, ==, !=, ===, !==

const pts = 256

if (pts > 250) {
    let power = "super strength"
    console.log(`The character acquires ${power}.`);
}

const balance = 444

if (balance < 250) {
    console.log("The balance is less than $250.");
} else if (balance < 500) {
    console.log("The balance is less than $500.");
} else if (balance < 999) {
    console.log("The balance is less than $999.");
} else {
    console.log("The balance is more than $999");
}

const signal = true
const wifiEnabled = true

if (wifiEnabled && signal) {
    console.log("Connected to the internet.")
}

const googleAuthStatus = true
const emailAuthStatus = false

name = "anon"
if (googleAuthStatus || emailAuthStatus) {
    console.log(`Hi, ${name}.`);
}