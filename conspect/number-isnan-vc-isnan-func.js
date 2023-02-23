export const numberIsnanVcIsnanFunc ='https://www.jsexpert.net/handbook/javascript/chislo-number/isnan/'


// Определение и использование

// Метод Number.isNaN() определяет, является ли значение NaN (Not-A-Number).
// Этот метод возвращает true, если значение имеет тип Number и является NaN. 
//В противном случае метод возвращает false.

// Number.isNaN () отличается от глобальной функции isNaN(). 

//Глобальная функция isNaN() преобразует тестируемое значение в число, а затем проверяет его.

// Number.isNaN() не преобразует значения в число и не возвращает true для любого значения, 
//которое не относится к типу Number.

// Совет. В JavaScript значение NaN относится к типу данных — число.



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

//До речі, якщо в масиві одне з значень буде NaN, то indexOf(NaN) 
//поверне -1, а от includes(NaN) поверне true:

// let arr = [2, 4, NaN, 12];
// arr.indexOf(NaN); // -1
// arr.includes(NaN); // true


import { contents } from "./contents";