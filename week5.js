// 1. Promise State :- 
// (i) Pending -> the operation is still running.
// const p = new Promise((resolve, reject)=> resolve);
// console.log(p);

// (ii) create a promisified version of fs.readfile
const fs=require("fs");
function fsReadFilePromise(fileName, encoding){
    return new Promise(function(resolve,reject){
        fs.readFile(fileName,encoding,function(err,data){
            if(err){
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}
fsReadFilePromise("a.txt","utf-8")
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log("Error while reading file");
    console.log(err);
})

// (iii) create a promisified version of setTimeout
function setTimeoutPromisified(delay){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(delay);  // resolve ()
        },delay)
    })
}
setTimeoutPromisified(1000)
.then(function(delay){  // .then(function(){ console.log(" ms has passed")});
    console.log(delay +"second has pased");
})

// (iv) 2nd way of calling promise -> async/await  function
async function main(){
    let file1Contents = await fsReadFilePromise ("a.txt","utf-8");
    let file2Contents = await fsReadFilePromise ("b.txt","utf-8");
    let file3Contents = await fsReadFilePromise ("a.txt","utf-8");
    console.log(file1Contents);
    console.log(file2Contents);
    console.log(file3Contents);
}
main();
