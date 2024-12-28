// for

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("You're halfway through the loop.");
    }
    // console.log(element);
}

// console.log(element); // -> Error

for (let i = 1; i <= 10; i++) {
    // console.log(`The value of x: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`The value of y: ${j}`);
        // console.log(`${i} x ${j} = ${i*j}`);
    }
}
let arr = ["meta", "youtube", "microsoft"]
// console.log(arr.length);
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         // console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i: ${index}`);
// }

// for (let index = 1; index < 10; index++) {
//     if (index == 5) {
//         // console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i: ${index}`);
// }