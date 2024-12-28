// Standard IIFE
(function fn() {
    console.log("Hello, world.")
})(); 

((name) => {
    console.log(`Hi, ${name}`);
})("anon")