export const forinForof = ''

//https://learn.javascript.ru/dom-navigation#dom-kollektsii
// Не используйте цикл for..in для перебора коллекций
// Коллекции перебираются циклом for..of. Некоторые начинающие разработчики пытаются использовать 
//для этого цикл for..in.
// Не делайте так. Цикл for..in перебирает все перечисляемые свойства. 
//А у коллекций есть некоторые «лишние», редко используемые свойства, которые обычно нам не нужны:
/* 
<script>
  // выводит 0, 1, length, item, values и другие свойства.
  for (let prop in document.body.childNodes) alert(prop);
</script>
*/


//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of
// Различия между for...of и for...in
// Оба оператора, и for...in и for...of производят обход объектов . Разница в том, как они это делают.

// Для for...in обход перечисляемых свойств объекта осуществляется в произвольном порядке.

// Для for...of обход происходит в соответствии с тем, какой порядок определён в итерируемом объекте.

// Следующий пример показывает различия в работе циклов for...of и for...in при обходе Array.

// Object.prototype.objCustom = function() {};
// Array.prototype.arrCustom = function() {};

// let iterable = [3, 5, 7];
// iterable.foo = 'hello';

// for (let i in iterable) {
//   console.log(i); // выведет 0, 1, 2, "foo", "arrCustom", "objCustom"
// }

// for (let i in iterable) {
//   if (iterable.hasOwnProperty(i)) {
//     console.log(i); // выведет 0, 1, 2, "foo"
//   }
// }

// for (let i of iterable) {
//   console.log(i); // выведет 3, 5, 7
// }
// Разберёмся шаг за шагом в вышеописанном коде.

// Object.prototype.objCustom = function() {};
// Array.prototype.arrCustom = function() {};

// let iterable = [3, 5, 7];
// iterable.foo = 'hello';
// Каждый объект унаследует метод objCustom и каждый массив Array унаследует метод arrCustom благодаря 
//созданию их в Object.prototype (en-US) и Array.prototype. Объект iterable унаследует методы 
//objCustom и arrCustom из-за наследования через прототип.

// for (let i in iterable) {
//   console.log(i); // выведет 0, 1, 2, "foo", "arrCustom", "objCustom"
// }
// Цикл выводит только перечисляемые свойства объекта iterable, в порядке их создания. 
//Он не выводит значения 3, 5, 7 и hello поскольку они не являются перечисляемыми, фактически они вообще 
//не являются свойствами, они являются значениями. Выводятся же имена свойств и методов, например arrCustom 
//и objCustom.

// for (let i in iterable) {
//   if (iterable.hasOwnProperty(i)) {
//     console.log(i); // выведет 0, 1, 2, "foo"
//   }
// }
// Цикл аналогичен предыдущему, но использует hasOwnProperty() для проверки того, 
//собственное ли это свойство объекта или унаследованное. Выводятся только собственные свойства. 
//Имена 0, 1, 2 и foo принадлежат только экземпляру объекта (не унаследованы). Методы arrCustom и 
//objCustom не выводятся, поскольку они унаследованы.

// for (let i of iterable) {
//   console.log(i); // выведет 3, 5, 7
// }
// Этот цикл обходит iterable и выводит те значения итерируемого объекта, которые определены в способе 
//его перебора, т.е. не свойства объекта, а значения массива 3, 5, 7 .



