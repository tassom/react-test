//TypeScript

class GameObject {
    constructor(public x: number, public y: number, public radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
}

class Circle extends GameObject {
    constructor( x: number, y: number, radius: number) {
        super(x, y, radius)
    }
}


let circle = new Circle(10, 50, 8);
console.log(circle.x, circle.y, circle.radius);  // should print "10 50 8"


