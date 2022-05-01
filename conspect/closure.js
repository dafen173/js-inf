export const closure = 'https://frontend-stuff.com/blog/javascript-cheatsheet/#%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2%D1%8B-%D0%B8-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D0%B5'


//https://learn.javascript.ru/closure#iife

//замыкание (closures): создаются всякий раз, когда к переменной, определенной вне текущей области, осуществляется доступ из внутренней области - это дает нам доступ к области внешней функции из внутренней функции;
//чтобы использовать замыкание, просто определи функцию внутри другой функции;

//example
function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      alert(name); // use variable declared in the parent function
    }
    displayName();
}
init();





// что выведет этот код???????
var f = function() {
  console.log(1);
}

var execute = function(f) {
  setTimeout(f, 1000);
}

execute(f); // что выведет в консоль и почему

f = function() {
  console.log(2);
}
// сначала будет 
// function() {
//   console.log(2);
// }
//т.к. произошел вызов переменной f с немедленным присвоением нового значения
// только потом будет 1, это результат возврата ф-ции (макрозадачи) setTimeout(f, 1000); 
//до этого она ожидала своего вызова в очереди макрозадач





// Посмотрите на код. Какой будет результат у вызова на последней строке?
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi();
// решение
// Результатом будет ошибка.
// Функция sayHi объявлена внутри if, так что она живёт только внутри этого блока. Снаружи нет sayHi.




// Сумма с помощью замыканий
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
// Например:
sum(1)(2) = 3
sum(5)(-1) = 4

// решение
// Чтобы вторые скобки заработали, первые – должны вернуть функцию.
// Вот так:
function sum(a) {

  return function(b) {
    return a + b; // берёт "a" из внешнего лексического окружения
  };

}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1) ); // 4





// Фильтрация с помощью функции
// важность: 5
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
// Например:

/* .. ваш код для inBetween и inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2


// решение
// Фильтр inBetween
// function inBetween(a, b) {
//   return function(x) {
//     return x >= a && x <= b;
//   };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// Фильтр inArray
// function inArray(arr) {
//   return function(x) {
//     return arr.includes(x);
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2







// Сортировать по полю
// важность: 5
// У нас есть массив объектов, который нужно отсортировать:

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];
// Обычный способ был бы таким:

// // по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, скажем, вот таким?

// users.sort(byField('name'));
// users.sort(byField('age'));
// То есть, чтобы вместо функции, мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.

// решение
// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(field) {
//   return (a, b) => a[field] > b[field] ? 1 : -1;
// }

// users.sort(byField('name'));
// users.forEach(user => alert(user.name)); // Ann, John, Pete

// users.sort(byField('age'));
// users.forEach(user => alert(user.name)); // Pete, Ann, John








// Армия функций
// важность: 5
// Следующий код создаёт массив из стрелков (shooters).

// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let shooter = function() { // функция shooter
//       alert( i ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.

// Открыть песочницу с тестами для задачи.

// решение
// Давайте посмотрим, что происходит внутри makeArmy, и решение станет очевидным.

// Она создаёт пустой массив shooters:

// let shooters = [];
// В цикле заполняет его shooters.push(function...).

// Каждый элемент – это функция, так что получится такой массив:

// shooters = [
//   function () { alert(i); },
//   function () { alert(i); },
//   function () { alert(i); },
//   function () { alert(i); },
//   function () { alert(i); },
//   function () { alert(i); },
//   function () { alert(i); },
//   function () { alert(i); },
//   function () { alert(i); },
//   function () { alert(i); }
// ];
// Функция возвращает массив.

// Позже вызов army[5]() получит элемент army[5] из массива (это будет функция) и вызовет её.

// Теперь, почему все эти функции показывают одно и то же?

// Всё потому, что внутри функций shooter нет локальной переменной i. Когда вызывается такая функция, она берёт i из своего внешнего лексического окружения.

// Какое будет значение у i?

// Если мы посмотрим в исходный код:

// function makeArmy() {
//   ...
//   let i = 0;
//   while (i < 10) {
//     let shooter = function() { // функция shooter
//       alert( i ); // должна выводить порядковый номер
//     };
//     ...
//   }
//   ...
// }
// …Мы увидим, что оно живёт в лексическом окружении, связанном с текущим вызовом makeArmy(). Но, когда вызывается army[5](), makeArmy уже завершила свою работу, и последнее значение i: 10 (конец цикла while).

// Как результат, все функции shooter получат одно и то же из внешнего окружения: последнее значение i=10.

// Мы можем это исправить, переместив определение переменной в цикл:

// function makeArmy() {

//   let shooters = [];

//   for(let i = 0; i < 10; i++) {
//     let shooter = function() { // функция shooter
//       alert( i ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);


//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // 0
// army[5](); // 5
// Теперь она работает правильно, потому что каждый раз, когда выполняется блок кода for (let i=0...) {...}, для него создаётся новое лексическое окружение с соответствующей переменной i.

// Так что значение i теперь живёт немного ближе. Не в лексическом окружении makeArmy(), а в лексическом окружении, которое соответствует текущей итерации цикла. Вот почему теперь она работает.


// Здесь мы переписали while в for.

// Можно использовать другой трюк, давайте рассмотрим его для лучшего понимания предмета:

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let j = i;
//     let shooter = function() { // функция shooter
//       alert( j ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // 0
// army[5](); // 5
// Цикл while так же, как и for, создаёт новое лексическое окружение для каждой итерации. Так что тут мы хотим убедиться, что он получит правильное значение для shooter.

// Мы копируем let j = i. Это создаёт локальную для итерации переменную j и копирует в неё i. Примитивы копируются «по значению», поэтому мы получаем совершенно независимую копию i, принадлежащую текущей итерации цикла.




//https://learn.javascript.ru/closure



