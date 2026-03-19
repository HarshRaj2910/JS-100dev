// Create a function that takes an array of objects as input and returns the users whose age > 18 and are male

function isLegal(user){
    let legalUser=[];
    for(let i=0;i<user.length;i++){
        if(user[i].age>=18 && user[i].gender === "male"){
            legalUser.push(user[i]);
        }
    }
    return legalUser

}
const user=[
    {
        name:"Harkirat",
        age:22,
        gender:"male"
    },
    {
        name:"Raaj",
        age:18,
        gender:"male"
    },
    {
        name:"Sneha",
        age:15,
        gender:"female"
    },
    {
        name:"Anjali",
        age:20,
        gender:"female"
    }
];

let legalAllowedUsers = isLegal(user)
console.log(legalAllowedUsers)