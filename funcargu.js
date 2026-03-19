

// functional arguments:-
function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function doArithmetic(a,b,whatToDo){
    if(whatToDo == "sum"){
        let s= sum(a,b)
        return s;
    }
    if(whatToDo == "sub"){
        let s= sub(a,b)
        return s;
    }
}
const ans1= doArithmetic(1,2,"sum");
const ans2=doArithmetic(8,2,"sub");

console.log(ans1);
console.log(ans2);

// good approach to use function as arguments:-
function sum(a,b){
    return a+b;

}

function sub(a,b){
    return a-b;
}

function doArithemtic(a,b,operation){
    return operation(a,b);
}
const anss1=doArithemtic(2,4,sum);
const anss2=doArithemtic(5,8,sub);