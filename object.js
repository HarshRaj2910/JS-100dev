function isLegal(name,age){
    if(age>=18){
        console.log(name+" : is allowed to vote.");
    }else {
        console.log(name+" : is not allowed to vote.");
    }
}
  var user1={
    name:"harikirat",
    password:"123kirat",
    age:16,
    address:{
        city:"chandigarh",
    },
    metadata:{
        likes:"girls"
    }
};

var user2={
    name:"harikiratsingh",
    password:"singhkirat",
    age:28
};


// var username1="harikirat"
// var password1="123kirat"
// var age1=16

// var username2="harikiratsingh"
// var password2="singhkirat4321"
// var age2=26

// isLegal(user1.name , user1.age);
// isLegal(user2.name , user2.age);
console.log(user1.address.city);



// 1. Write a function that takes a user as an input and greets them with their name and age
function greetUser(user){
    console.log("Hello "+user.name+ ",You are :"+user.age+"years old.");

}
let user11={
    name:"Harsh Raj",
    age:21
};
let user12={
    name:"Milan Kumar",
    age:20
};

greetUser(user11);
greetUser(user12);

// 2. Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21) Also tell the user if they are legal to vote or not
function greetUser2(user1,age){
    if(user.age >=18){
    console.log("Mr/Mrs/Other "+user1.name+", your age is "+user1.age+"You are eligible for  vote. ");
    }else {
        console.log(" Mr/Mrs/Other "+user.name+ ", your age is  :"+user.age+"You are not eligible for  vote.");
    }
}
let user22={
    name:"Sachine",
    age:21
};
let user21={
    name:"Krish",
    age:15
};
greetUser2(user22);
greetUser2(user21);