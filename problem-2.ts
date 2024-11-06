// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

function removeDuplicates(array:number[]):number[] {
    const uniqueNumbers:number[]=[]

    for (const number of array) {
        if (!uniqueNumbers.includes(number)) {
          uniqueNumbers.push(number);
        }
      }
      
      return uniqueNumbers;
    }
    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5,3,5,6]);
    // console.log(result); 
