//Оберіть варіант, у якому при зверненні до методу helper не виведеться помилка. 
//(itemHandler.addItem(2))
import { itemHandlerAddItem } from "./itemhandler-additem";


// Чи можна замінити вираз 1 виразом 2?
// const someBooleanValue = isNaN(+someVariable);
// const someBooleanValue = +someVariable == NaN;
import { someVariableIsNan } from "./someVariableIsNan";


// Будут ли ссылаться obj1.prop1 и obj2.prop1 на один и тот же объект?
// const obj0 = {};
// const obj1 = {
//   prop1: obj0,
// };
// const obj2 = Object.assign({}, obj1);
import { refObjects } from "./refObjects";


// Как узнать разницу между двумя датами в миллисекундах?
// const dateStart = new Date(1976, 2, 20);
// const dateEnd = new Date(2017, 6, 20);
// a) Date.now(dateEnd) - Date.now(dateStart)
// b) Невозможно без использования сторонних библиотек
// c) dateEnd.valueOf() - dateStart.valueOf()
// d) dateEnd - dateStart
import { dateDiff } from "./dateDiff";


// Какой способ перехвата ошибки применим для следующего кода?
// function asyncFunc(a, b) {
//   return new Promise((resolve, reject) => {
//     if (a.name.length < b.name.length) {
//       reject();
//     } else {
//       resolve();
//     }
//   });
// }
// asyncFunc({ fullName: 'John Mistin' }, { lastName: 'Mistin' });
// a) try {} catch(err) {}
// b) then().catch()
// c) Присвоить результат выполнения в переменную и проверить функцией .isValid()
// d) Ничего из перечисленного
// e) Присвоить результат выполнения в переменную => преобразовать в Boolean => проверить на true/false
import { promiseCath } from "./promise-catch";


// Почему при удалении одного из элементов массива arr1 одновременно изменится массив arr2?
// const arr1 = [1, 150, 3.5];
// const arr2 = arr1;
// arr2.pop();
// a) arr1 и arr2 будут ссылаться на один и тот же объект в памяти ------  !!!DONE!!!
// b) arr1 и arr2 будут разными массивами, но их методы будут синхронизированы
// c) arr2 будет дочерним объектом arr1, поэтому их значения будут изменяться одновременно
// d) arr1 и arr2 будут разными массивами, но их значения будут синхронизированы
import { refArrays } from "./refArrays";


// Почему выполнение данного кода закончится с ошибкой (выберите наиболее точный ответ)?
// class New {
//   constructor(someVar) {
//     this.name = someVar;
//   }
// }
// const extends = new New();
// a) extends - зарезервированное слово, которое 
// нельзя использовать в качестве переменной ------  !!!DONE!!!
// b) extends и New - зарезервированные слова, которые нельзя использовать в качестве переменных
// c) New - зарезервированное слово, которое нельзя использовать в качестве переменной
// d) extends - зарезервированное слово, которое нельзя использовать в качестве переменной, а someVar не передано в качестве аргумента при создании нового объекта
import { reservedkeyWords } from "./reservedKeyWords";


//NUMBERS
import { numbersTest } from "./numbers";

//CLOSURE
import { closureTest } from "./closure";

//STRINGS
import { strings } from "./strings";



// С помощью какого свойства объекта document можно получить ширину клиентского окна?
// document.body.clientWidth ------  !!!DONE!!!


//Что выведется в консоль?
// const obj = {
//     a:1
// };
// console.log(obj.a);

// (function(obj) {
//     obj = {
//      a:2   
//     }
// })(obj);
// console.log(obj.a);

// (function(obj) {
//     obj.a = 3
// })(obj);
// console.log(obj.a);

// 1,1,3 ------  !!!DONE!!!


//[].push(1,2).unshift(3).join()



// Чему равно a + b + c?

// let a = 1;
// let b = { toString() {return '1'} };
// let c = 1;

// 11[object Object]
// 2[object Object]
// 111
// 3



// Что выведет sayHi при вызове через setTimeout?

// let name = "Вася";
// function sayHi() {
//   alert(name);
// }

// setTimeout(function() {
//   let name = "Петя";
//   sayHi();
// }, 1000);
// Вася.
// Петя.
// undefined
// Будет ошибка.



// Чем отличаются стандарты DOM Level 2 и DOM Level 3?
// DOM Level 3 появился позже чем DOM Level 2, он доопределяет 
//DOM-свойства и события.


// Если функция-обработчик события onclick выполняется долго, и посетитель во время её работы нажал на кнопку клавиатуры – что будет с возникшим событием keydown?
// Событие keydown будет обработано после onclick.


// Какое событие из этого списка не существует?
// onmousescroll  ------  !!!DONE!!!
// onclick
// onmouseover
// onmousemove
// onwheel
// все существуют.


// Когда у элемента гарантированно совпадают offsetHeight и clientHeight?
// Когда у элемента нет border и padding.


// Как получить размер отступа margin-top у <div>?
// <style>
//   div { margin: 10px; }
// </style>
// <div id="div"></div>

//ANSWER:
// getComputedStyle(div).marginTop


// Какие варианты корректно перебирают все формы на странице?
// Вариант 1.
// var elems = document.querySelectorAll('form');
// for(var i in elems) console.log(elems[i]);
// Вариант 2.  ------  !!!DONE!!!
// var elems = document.querySelectorAll('form');
// for(var i = 0; i < elems.length; i++) console.log(elems[i]);
// Вариант 3.
// var elems = document.getElementsByTagName('form');
// for(var i in elems) console.log(elems[i]);
// Вариант 4.  ------  !!!DONE!!!
// var elems = document.forms;
// for(var i = 0; i < elems.length; i++) console.log(elems[i]);



// Сколько потомков будет у <div> после кода ниже?
// <div id="div"></div>
// <p id="p">Привет</p>
// <script>
//   div.appendChild(p);
//   p.appendChild(div);
// </script>

// 0
// 1
// 2
// В коде ошибка.  ------  !!!DONE!!!


// Что выведет этот код?

// <p id="elem">Привет!</p>

// <script>
//   elem.textContent = elem.outerHTML
//   alert(elem.innerHTML);
// </script>

// Привет!
// <p id="elem">Привет!</p>
// &lt;p id="elem"&gt;Привет!&lt;/p&gt;  ------  !!!DONE!!!
// Будет ошибка.



// Есть элемент <div id=«elem»><input/></div>. На нём два обработчика:

// elem.addEventListener("click", handler1, false);
// elem.addEventListener("click", handler2, true);
// Какой из них сработает раньше при клике на <input>?

// первый.

// второй. ------  !!!DONE!!! т.к. у него установлен 
//флаг фазы погружения true
//options может быть false/true, это то же самое, 
//что {capture: false/true}

// ни один.
// стандарт не указывает точную последовательность.



// При каком условии elem.scrollHeight == elem.clientHeight ?
// Содержимое элемента полностью прокручено вниз.
// Страница прокручена так, что элемент полностью видим и находится в границах окна.
// Высота элемента равна высоте полосы прокрутки.

// Содержимое элемента полностью видимо, 
//в нём нет прокрутки. ------  !!!DONE!!!

// У элемента нет padding.



// Чему равно 2 && 1 && null && 0 && undefined ?
// 2
// 1
// null ------  !!!DONE!!! т.е. покажет первое ложное значение!
// 0
// undefined
// false


// Чему равен результат вызова в этом примере?
// function f() {
//   let a = 5;
//   return new Function('b', 'return a + b');
// }

// alert( f()(1) );
// 1
// 6
// undefined
// NaN
// Будет ошибка. ------  !!!DONE!!!



// Чему равно это выражение?

// [].push(1,2).unshift(3).join()
// 3,1
// 1,2,3
// 3,1,2
// В коде ошибка. ------  !!!DONE!!! цепочка таких методов выдает ошибку


// Какие из этих вызовов синтаксически верно сгенерируют исключение?
// throw "Ошибка" ------  !!!DONE!!!
// throw new Error("Ошибка") ------  !!!DONE!!!
// throw { message: "Ошибка" } ------  !!!DONE!!!
// throw Error("Ошибка") ------  !!!DONE!!!
// Ни один.



// Яблоко стоит 1.15, апельсин стоит 2.30.
// Сколько стоят они вместе – чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?
// 345
// 3.45
// 3,45
// Ни один из вариантов выше.  //3.4499999999999997 ------  !!!DONE!!! 



// Чему равна переменная name?
// let name = "пупкин".replace("п", "д")
// дудкин.
// дупкин. ------  !!!DONE!!!
// пупкин.
// ляпкин-тяпкин.
// Когда первый аргумент replace является строкой, 
//он заменяет только первое совпадение.
// Вы можете видеть это в приведённом выше примере: только первый "-" заменяется на ":".
// Чтобы найти все дефисы, нам нужно использовать не строку "-", 
//а регулярное выражение /-/g с обязательным флагом g:
// // заменить все тире двоеточием
// alert( '12-34-56'.replace( /-/g, ":" ))  // 12:34:56



// let f = function(x) {
//     alert(x)
//   }
//   (function() {
//     f(1)
//   }())
//   Никакого результата.
//   Выведет 1.
//   Выведет undefined.
//   Будет ошибка.  ------  !!!DONE!!!



// Что выведет код ниже?
// for(let key in  {1:1, 0:0}) {
//  alert(key);
// }
// 1, затем 0.
// 0, затем 1.  ------  !!!DONE!!! когда ключи объекта явл-ся цифрами, то перебор идет по возрастанию
// В коде ошибка.
// Зависит от браузера.





