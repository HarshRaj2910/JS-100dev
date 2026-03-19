// I/O heavy opwerations :- 
const fs = require("fs");
function FileReadCallback(err, contents){
	console.log(contents);
	console.log(contents);
}
 fs.readFileSync("a.txt", "utf-8",FileReadCallback);
  // console.log(contents);

// Cpu bound tasks :-
let ans = 0;
for (let i = 1; i <= 1000000; i++) {
	ans = ans + i
}
console.log(ans);	
