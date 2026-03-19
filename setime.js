// 1. Normal using callback method() :->
function callback(){
    console.log("hi there");
}
setTimeout(callback,2000);
 let ctr=0;
 for(let i=0;i<10;i++){
    ctr=ctr+i;

 }
 console.log(ctr);

 // 2. setTimeout  using Promise method() :->
 function setTimeoutPromisfied(ms){
    let p = new Promise(resolve => setTimeout(resolve,ms));
    return p;
 }
 function callback(){
    console.log("hi there");
 }
 setTimeoutPromisfied(3000).then(callback)