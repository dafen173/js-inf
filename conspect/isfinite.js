export const isFiniteItem = 'https://learn.javascript.ru/number#proverka-isfinite-i-isnan'


// Проверка: isFinite и isNaN
// Помните эти специальные числовые значения?

// Infinity (и -Infinity) — особенное численное значение, которое ведёт себя в точности как 
//математическая бесконечность ∞.
// NaN представляет ошибку.
// Эти числовые значения принадлежат типу number, но они не являются «обычными» числами, 
//поэтому есть функции для их проверки:

// isNaN(value) преобразует значение в число и проверяет является ли оно NaN:

// alert( isNaN(NaN) ); // true
// alert( isNaN("str") ); // true
// Нужна ли нам эта функция? Разве не можем ли мы просто сравнить === NaN? К сожалению, нет. 
//Значение NaN уникально тем, что оно не является равным ни чему другому, даже самому себе:

// alert( NaN === NaN ); // false

// isFinite(value) преобразует аргумент в число и возвращает true, если оно является обычным числом, 
//т.е. не NaN/Infinity/-Infinity:

// alert( isFinite("15") ); // true
// alert( isFinite("str") ); // false, потому что специальное значение: NaN
// alert( isFinite(Infinity) ); // false, потому что специальное значение: Infinity
// Иногда isFinite используется для проверки, содержится ли в строке число:

// let num = +prompt("Enter a number", '');

// // вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
// alert( isFinite(num) );
// Помните, что пустая строка интерпретируется как 0 во всех числовых функциях, включаяisFinite.


import { contents } from "./contents"