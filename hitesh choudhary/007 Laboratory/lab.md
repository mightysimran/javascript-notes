Refer [Laboratory](https://github.com/mightysimran/javascript-dev-laboratory)

---

`Color Theme Switcher - script.js`

```javascript
let body = document.querySelector("body");
let colors = document.querySelectorAll(".color");

// console.log(colors)
colors.forEach(function (color) {
  color.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "orangered") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "gold") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "mediumslateblue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "darkslateblue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "chartreuse") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "lime") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "springgreen") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "dodgerblue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "chocolate") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "silver") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

---

`mCal | Maintenance Calorie Calculator - script.js`

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const g = document.querySelector("input[name='g']:checked")?.value;
  const weight = parseFloat(document.querySelector("#weight").value);
  const height = parseFloat(document.querySelector("#height").value);
  const age = parseFloat(document.querySelector("#age").value);
  const activity_level = document.querySelector("#activity-level").value;

  let bmr;
  let activity_factor;
  let maintenanceCalories;

  if (g && weight && height && age && activity_level) {
    if (g == "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (g == "female") {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    if (activity_level == "sedentary") {
      activity_factor = 1.2;
      maintenanceCalories = bmr * activity_factor;
    } else if (activity_level == "lightly-active") {
      activity_factor = 1.375;
      maintenanceCalories = bmr * activity_factor;
    } else if (activity_level == "moderately-active") {
      activity_factor = 1.55;
      maintenanceCalories = bmr * activity_factor;
    } else if (activity_level == "very-active") {
      activity_factor = 1.725;
      maintenanceCalories = bmr * activity_factor;
    } else if (activity_level == "super-active") {
      activity_factor = 1.9;
      maintenanceCalories = bmr * activity_factor;
    }
    results.innerHTML = `${maintenanceCalories.toFixed(2)} calories/day`;
  }
});
```

---

`Time - script.js`

```javascript
const now = document.querySelector("#now");

setInterval(function () {
  let date = new Date();
  // date.toTimeString()
  // console.log(date.toLocaleTimeString());
  now.innerHTML = date.toLocaleTimeString();
}, 1000);
```

---

`Numeric Pursuit - script.js`

```javascript
let random_number = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit")
const input = document.querySelector("#input")
const previousGuesses = document.querySelector("#prevg")
const remainingGuesses = document.querySelector("#remg")
const lowOrHigh = document.querySelector("#low-or-high")
const freshStart = document.querySelector("#resp")

const p = document.createElement("p")

let prevg = []
let attempts = 1
let initGame = true 

if(initGame){
   submit.addEventListener("click", function(e){
    e.preventDefault();
    const guess = parseInt(input.value)
    // console.log(guess)
    validate(guess)
   }) 
}

function validate(guess){
    if(isNaN(guess)){
        alert("Enter a valid number.")
    }else if (guess < 1){
        alert("The number must be greater than zero.")
    }else if(guess > 100){
        alert("The number must be less than or equal to hundred.")
    }else{
        prevg.push(guess)
        if(attempts === 11){
            display(guess)
            printm(`The random number was ${random_number}`)
            end()
        }
        else{
            display(guess)
            main(guess)
        }
    }
}
function main(guess){
    if(guess === random_number){
        printm(`You guessed it right!`)
        end()
    }else if(guess < random_number){
        printm(`Number is too low!`)
    }else if(guess > random_number){
        printm(`Number is too high!`)
    }
}

function display(guess){
    input.value = ""
    previousGuesses.innerHTML += `${guess}, `
    attempts++
    remainingGuesses.innerHTML = `${11-attempts}`
}

function printm(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function end(){
    input.value = ""
    input.setAttribute("disabled", '')
    submit.setAttribute("disabled", "")
    p.classList.add('button')
    p.innerHTML = `<button id='start'>Play again!</button>`
    freshStart.appendChild(p)
    initGame = false
    start()
}

function start(){
    const startbtn = document.querySelector("#start")
    startbtn.addEventListener("click", function(e){
        random_number = parseInt(Math.random() * 100 + 1)
        prevg = []
        attempts = 1

        printm("")
        previousGuesses.innerHTML = ""
        remainingGuesses.innerHTML = `${11-attempts}`
        input.removeAttribute("disabled")
        submit.removeAttribute("disabled")
        freshStart.removeChild(p)

        initGame = true
    })
}

```

---

`Stochastic Colors - script.js`

```javascript
const generate = function(){
    const hex = '0123456789abcdef'
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

let i;

const start = function(){
    if(!i){
        i = setInterval(changeBg, 1000)
    }
    function changeBg(){
        document.body.style.backgroundColor = generate();
    }
}

const stop = function(){
    clearInterval(i)
    i = null
}

document.querySelector('#start').addEventListener('click', start)
document.querySelector('#stop').addEventListener('click', stop)
```
---