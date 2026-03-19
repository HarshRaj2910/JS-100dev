
        // Inheritance in JS

class Shape{
    constructor(color){
        this.color=color;
    }
    paint(){
        console.log(`Painting color with : ${this.color} `);
    }
    area(){
        throw new Error('The area method must be implemented in subclasses.');
    }
}

class Rectangle extends Shape{
    constructor(width,length,color){
        super(color);
        this.width=width;
        this.length=length;
    }
    area(){
        return this.length * this.width;
    }
}
class Circle extends Shape{
    constructor(radius,color){
        super(color);
        this.radius=radius;
    }
    area(){
        return Math.PI*this.radius*this.radius;
    }
    get description(){
        return` A circle with radius ${this.radius} and color ${this.color}.`;
    }
}

const circle= new Circle(20,"red");
console.log(circle.area());
console.log(circle.description);



// callback function:- traditional function
function callback(){
    console.log("hi there");

}
setTimeout(callback,5*1000);

let ctr=0;
for(let i=0;i<10000;i++){
    ctr=-ctr+i;
}
console.log(ctr);