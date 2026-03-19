// Array -> let we group  data together
let age=[23,24,25,26,21,22,28,31,34];
for(let i=0;i<age.length;i++){
    console.log(age[i])
}
// Array of Object
// 1. Example
let employee=[
    {id:1,name:"Aman",salary:25000},
    {id:2,name:"Piyush",salary:30000},
    {id:3,name:"Sneha",slary:28000}
];
for(let i=0;i<employee.length;i++){
    console.log(employee[i].name);
}

// 2. Example
function isLegal(users){
    if(age>=18){
        console.log(users.name+" is allowed to vote.")
    } else {
        console.log(users.name+" is not allowed to vote.")
    }
}

var users=[{
    name:"Harsh",age:33,password:"23@gmail.com"
},{
    name:"Raj",age:23,password:"345@gmail.com"
},{
    name:"harkirat",age:17,password:"36@gmail.com"
}
];
for(var i=0;i<3;i++){
    isLegal(users[i])
}
    
