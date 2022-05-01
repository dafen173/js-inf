export const forinForof = ''





//https://learn.javascript.ru/dom-navigation#dom-kollektsii
// Не используйте цикл for..in для перебора коллекций
// Коллекции перебираются циклом for..of. Некоторые начинающие разработчики пытаются использовать для этого цикл for..in.

// Не делайте так. Цикл for..in перебирает все перечисляемые свойства. А у коллекций есть некоторые «лишние», редко используемые свойства, которые обычно нам не нужны:
/* 
<script>
  // выводит 0, 1, length, item, values и другие свойства.
  for (let prop in document.body.childNodes) alert(prop);
</script>
*/


