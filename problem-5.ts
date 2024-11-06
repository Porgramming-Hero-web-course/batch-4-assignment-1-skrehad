// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

const person = {
    name: "Rehad",
    age: 22,
    job: "Engineer"
};

function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key];
}

const information=getProperty(person,'name')
const information2=getProperty(person,'age')
const information3=getProperty(person,'job')
// console.log(information);

  



