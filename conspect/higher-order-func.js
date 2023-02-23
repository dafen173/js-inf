export const higherOrderFunc = 'https://frontend-stuff.com/blog/javascript-cheatsheet/#%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D0%B0%D0%BD%D0%BE%D0%BD%D0%B8%D0%BC%D0%BD%D0%B0%D1%8F-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F'

import {contents} from './contents'


// Функция высшего порядка - функция, которая получает функцию в качестве аргумента или 
//возвращает функцию в качестве вывода. Например: Array.prototype.map, Array.prototype.filter и 
//Array.prototype.reduce - это некоторые из функций высшего порядка, встроенных в язык.

//example with Higher-order function map
const arr1 = [1, 2, 3];
const arr2 = arr1.map(function(item) {
  return item * 2;
});
console.log(arr2);

//with Higher-order function filter
const persons = [
  { name: 'Peter', age: 16 },
  { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Jane', age: 14 },
  { name: 'Tony', age: 24},
];
const fullAge = persons.filter(person => person.age >= 18);
console.log(fullAge);

//with Higher-order function reduce
const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
// prints 25
console.log(sum);






