// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = {
    shape: 'circle';
    radius: number;
};

type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
    if ('radius' in shape) {
        return Math.PI * shape.radius * shape.radius;
    } else if ('width' in shape && 'height' in shape) {
        return shape.width * shape.height;
    }
    return 0;
}

const myCircle: Circle = { shape: 'circle', radius: 10 };
const myRectangle: Rectangle = { shape: 'rectangle', width: 20,height:5 };

console.log(calculateShapeArea(myCircle)); 
console.log(calculateShapeArea(myRectangle));  
