class Circle{
    constructor(radius=1.0,color="red"){
        this.radius = radius;
        this.color = color;
    }
    setRadius(radius){
        this.radius = radius;
    }
    setColor(color){
        this.color = color;
    }
    getRadius(){
        return this.radius;
    }
    getColor(){
        return this.color;
    }
    toString(){
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
    getArea(){
        let area = 3.14 * Math.pow(this.radius, 2);
        return area.toFixed(2);
    }
    getCircumference(){
        let circumference = 2 * 3.14 * this.radius;
        return circumference.toFixed(2);
    }
    
}

let circle = new Circle();
console.log(circle.toString());
console.log("radius: ", circle.getRadius());
console.log("color: ", circle.getColor());
console.log("area: ", circle.getArea());
console.log("circumference: ", circle.getCircumference());
console.log()
circle.setRadius(2.5);
circle.setColor("green");
console.log(circle.toString());
console.log("radius: ", circle.getRadius());
console.log("color: ", circle.getColor());
console.log("area: ", circle.getArea());
console.log("circumference: ", circle.getCircumference());
console.log()