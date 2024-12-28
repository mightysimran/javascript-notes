// foreach

const lang = ["cpp", "py", "m", "go", "kt"]

// lang.forEach(function (val) {
//     console.log(val);
// })

lang.forEach((val) => {
    // console.log(val);
})

function fn(smth){
    console.log(smth);
}

// lang.forEach(fn) // Note: pass the reference of the function

lang.forEach((val, index, arr) => {
    // console.log(val, index, arr);
})

const proglangs = [
    {
        lang: "JavaScript",
        ext: "js"
    },
    {
        lang: "C++",
        ext: "cpp"
    },
    {
        lang: "Python",
        ext: "py"
    },
    {
        lang: "Kotlin",
        ext: "kt"
    },
    {
        lang: "Go",
        ext: "go"
    },
]

proglangs.forEach((value) => {
    // console.log(value.lang);
})
