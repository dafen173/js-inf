export const someVariableIsNan = ''


// Чи можна замінити вираз 1 виразом 2?

// const someBooleanValue = isNaN(+someVariable);
// const someBooleanValue = +someVariable == NaN;

// a) Так, у будь-якому випадку
// b) Ні ------  !!!DONE!!!
// c) Так, якщо someVariable в обох виразах буде числом


console.log(+true); // 1
console.log(+'2'); // 2
console.log(+2); // 2
console.log(+null); // 0
console.log(+{}); // NaN
console.log(+[]); // 0
console.log(+undefined); // NaN
console.log(+'a'); // NaN


let arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true


// b) Ні ------  !!!DONE!!!
// NaN не дорівнює жодному зі значень, включаючи NaN, тобто:
// console.log(NaN === NaN); // false

// Тобто, вираз 2 не буде коректним, якщо +someVariable поверне NaN.

// Для того, щоб перевірити, чи дорівнює змінна NaN, треба 
//використовувати функцію isNaN(someVariable) або ж Number.isNaN(someVariable). 
//Тому вираз 1 є єдиним правильним способом перевірити, чи значення є числом,
// і це означає, що вони не еквівалентні між собою. Тому правильна відповідь b) Ні.


//До речі, якщо в масиві одне з значень буде NaN, то indexOf(NaN) 
//поверне -1, а от includes(NaN) поверне true:

// let arr = [2, 4, NaN, 12];
// arr.indexOf(NaN); // -1
// arr.includes(NaN); // true


