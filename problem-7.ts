// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car {
    constructor(
      public brand: string,
      public model: string,
      public year: number
    ) {}

    getCarAge(): number {
        return new Date().getFullYear() - this.year;
    }
}

const myCar = new Car("Toyota", "Corolla", 2008);
const carAge = myCar.getCarAge(); 
// console.log(carAge);
