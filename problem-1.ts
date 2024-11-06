// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
{
    function sumArray(array: number[]): number {
    let sum:number = 0;
    for (let number of array) {
      sum =sum+ number;
    }
    return sum;
  }
const result = sumArray([20,25,25,30,45,55]);
// console.log(result); 
}