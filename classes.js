// classes in js -> blueprint for creating objects

class Rectangle {
   constructor(width, height, color) {
	    this.width = width;
	    this.height = height;
	    this.color = color; 
   }
   
   area() {
	   const area = this.width * this.height;
		 return area;
   }
   
   paint() {
			console.log(`Painting with color ${this.color}`);
   }
   
}

const rect = new Rectangle(2, 4,"pink")
const area = rect.area();
console.log(area)
rect.paint();


// 2. 
const d = new Date();

console.log(d.getFullYear()); // year
console.log(d.getMonth());    // month (0–11)
console.log(d.getDate());     // day
console.log(d.getHours());    // hour
console.log(d.getMinutes());  // minutes 
console.log(d);


// using map function with set and get method
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));