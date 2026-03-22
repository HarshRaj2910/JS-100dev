// trim() => remove space from both start and end.

// sync function callback
const fs=require("fs");
let contents=fs.readFileSync("a.txt","utf-8");
const trimcontents=contents.trim();
fs.writeFileSync("a.txt",trimcontents);


// asynccallback function
function cleanPath(filePath, cb){
    fs.readFile(filePath,"utf-8",function(err,contents){
       if(err){
        console.log(err);
        return;
       }
        const trimmContents=contents.trim();
        fs.writeFile(filePath,trimmContents,function(err){
            if(err){
                console.log(err);
                return;
            }
            cb();
        });
    });

    }
cleanPath("a.txt", function(){
        console.log("done cleanimng a.txt")
    });