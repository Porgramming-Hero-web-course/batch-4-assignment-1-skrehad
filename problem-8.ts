// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.
{
    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
        return keys.every(key => key in obj);
    }

    const person = 
    { 
        name: "Rehad",
        age: 22,
        email: "rehadhasan664@gmail.com",
        isActive:true 
    };
    
   const result= validateKeys(person, ["age", "isActive"])
//    console.log((result));
   
}    