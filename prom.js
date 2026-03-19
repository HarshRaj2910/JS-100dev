const { Readline } = require("node:readline/promises");

// let name= Readline("enter your name:");
// console.log(name);


function first() {
  console.log("First");
}
function second() {
  first();
  console.log("Second");
}
second();