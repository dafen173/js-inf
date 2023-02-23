export const copyObj = 'https://medium.com/nuances-of-programming/3-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B0-%D0%BA%D0%BB%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%B2-javascript-f3de6e54f45b'


//https://medium.com/nuances-of-programming/3-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B0-%D0%BA%D0%BB%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%B2-javascript-f3de6e54f45b
//====================================

//Поскольку объекты в #JavaScript являются ссылочными значениями, их нельзя просто скопировать с помощью =. 
// Но не беспокойтесь, существует 3 способа клонирования объекта

const food = { beef: '🥩', bacon: '🥓' }


// "Spread"
//{ ...food }
const cloneFood = { ...food } // обычное клонирование, если ключи не являются примитивами то они копируются по ссылке

// "Object.assign"
Object.assign({}, food)  // обычное клонирование, если ключи не являются примитивами то они копируются по ссылке

// "JSON"
JSON.parse(JSON.stringify(food))  // DEEP CLONE ИМЕННО ЭТОТ ВАРИАНТ!!!! ЭТО ВТОРОЙ СПОСОБ ГЛУБОКОГО КЛОНИРОВАНИЯ!

// RESULT:
// { beef: '🥩', bacon: '🥓' }




// Объекты — это ссылочные типы
// Почему нельзя использовать =? Посмотрим, что может произойти:
// const obj = {one: 1, two: 2};
// const obj2 = obj;
// console.log(
//   obj,  // {one: 1, two: 2};
//   obj2  // {one: 1, two: 2};
// )
// Оба объекта выдают одно и то же. На данный момент никаких проблем. Рассмотрим, что произойдет после редактирования второго объекта:
// const obj2.three = 3;
// console.log(obj2);
// // {one: 1, two: 2, three: 3}; <-- ✅
// console.log(obj);
// // {one: 1, two: 2, three: 3}; <-- 😱
// obj2 был изменен, однако изменения коснулись и obj. Причина заключается в том, что объекты являются ссылочными типами. Поэтому при использовании =, указатель копируется в область занимаемой памяти. Ссылочные типы не содержат значений, они являются указателем на значение в памяти.







