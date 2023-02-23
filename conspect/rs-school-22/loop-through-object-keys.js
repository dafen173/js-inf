
// https://www.freecodecamp.org/news/how-to-iterate-over-objects-in-javascript/


/*

How to loop through an object in JavaScript with a for…in loop
Before ES6, we relied on the for...in method whenever we wanted to loop through an object.

The for...in loop iterates through properties in the prototype chain. This means that we need to check if the property belongs to the object using hasOwnProperty whenever we loop through an object with the for…in loop:

const population = {
  male: 4,
  female: 93,
  others: 10
};

// Iterate through the object
for (const key in population) {
  if (population.hasOwnProperty(key)) {
    console.log(`${key}: ${population[key]}`);
  }
}
To avoid the stress and difficulty of looping and to use the hasOwnProperty method, ES6 and ES8 introduced object static methods. These convert object properties to arrays, allowing us to use array methods directly.

===============================


How to loop through an object in JavaScript with object static methods
An object is made up of properties that have key-value pairs, that is each property always has a corresponding value.

Object static methods let us extract either keys(), values(), or both keys and values as entries() in an array, allowing us to have as much flexibility over them as we do with actual arrays.

We have three object static methods, which are:

Object.keys()
Object.values()
Object.entries()



How to loop through an object in JavaScript with the Object.keys() method
The Object.keys() method was introduced in ES6. It takes the object we want to loop over as an argument and returns an array containing all property names (also known as keys).

const population = {
  male: 4,
  female: 93,
  others: 10
};

let genders = Object.keys(population);

console.log(genders); // ["male","female","others"]
This now gives us the advantage of applying any array looping method to iterate through the array and retrieve the value of each property:

let genders = Object.keys(population);

genders.forEach((gender) => console.log(gender));
This will return:

"male"
"female"
"others"
We can also use the key to get the value using bracket notation such as population[gender] as seen below:

genders.forEach((gender) => {
  console.log(`There are ${population[gender]} ${gender}`);
})
This will return:

"There are 4 male"
"There are 93 female"
"There are 10 others"

================================


How to loop through an object in JavaScript with the Object.values() method
The Object.values() method is very similar to the Object.keys() method and was introduced in ES8. This method takes the Object we want to loop over as an argument and returns an array containing all key values.

const population = {
  male: 4,
  female: 93,
  others: 10
};

let numbers = Object.values(population);

console.log(numbers); // [4,93,10]
This now gives us the advantage of applying any array looping method to iterate through the array and retrieve the value of each property:


===============================

How to loop through an object in JavaScript with the Object.entries() method
The Object.entries() method was also introduced with ES8. In the basic sense, what it does is that it outputs an array of arrays, whereby each inner array has two elements which are the property and the value.

const population = {
  male: 4,
  female: 93,
  others: 10
};

let populationArr = Object.entries(population);

console.log(populationArr);
This outputs:

[
  ['male', 4]
  ['female', 93]
  ['others', 10]
]
This returns an array of arrays, with each inner array having the [key, value]. You can use any array method to loop through:










*/