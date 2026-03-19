// 1. Promise State :- 
// (i) Pending -> the operation is still running.
// const p = new Promise((resolve, reject)=> resolve);
// console.log(p);

// (ii) create a promisified version of fs.readfile
function fsReadFilePromise(fileName, encoding){
    return new Promise();
}
fsReadFilePromise("a.txt","utf-8")
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log("Error while reading file");
    console.log(err);
})