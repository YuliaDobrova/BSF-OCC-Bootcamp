// Synchronous Function
console.log("First");
console.log("Second");
console.log("Trird");

// Asynchronous Function
console.log("First");
setTimeout(() => {
  console.log("Second");
}, 5000); //Delay of 5000ms (5sec)
console.log("Trird");
