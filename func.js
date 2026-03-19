// function datatypes:-

function greet(nameOfPerson){
        console.log("hello", nameOfPerson);
        console.log("namaste",nameOfPerson);
        console.log("hola", nameOfPerson);
        return 66;

    }
    let firstname="harsh";
    let firstname1="harikant";
    let firstname2="kirat";

    greet(firstname)
    greet(firstname1)
    greet(firstname2)

 // if else in function
 function isLegal(age){
    if(age >= 18){
        console.log("You are allowed to vote");
    }else {
        console.log("You are not allowed to vote");
    }
 }
 
 isLegal(26)
 isLegal(15)

 // checks if a number is even or odd
 function isCheck(num){
    if(num % 2==0){
        console.log("The number is even",num);
    }else {
        console.log("The number is odd",num);
    }
 }
 isCheck(85)
 isCheck(92)

 // find the sum from  1 to a number
 function sum(number){
    let total=0;
    for(let i=1;i<=number;i++){
        total += i;
    }
    return total;
 }

 console.log(sum(7));


 // shorter ,math based version
 
 function sum(n) {
    return n * (n + 1) / 2;
}

console.log(sum(5)); // 15
