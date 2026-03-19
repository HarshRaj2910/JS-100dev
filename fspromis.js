//1. Non promisifed version of readfile

const fs = require("fs");

// function callback(err,data){
//     if(err){
//         console.log("error wwhile reading the file.");
//     }
//     else {
//         console.log(data);
//     }
// }
// fs.readFile("a12.txt","utf-8", callback);


// 2. Promisified version of fsreadfile
 function fsReadFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}

function callback(data){
    console.log(data);
}

function callbackErr(err){
    console.log("Error while reading the file.");
    console.log(err);
}

fsReadFilePromisified("a1.txt","utf-8")
.then(callback)
.catch(callbackErr)