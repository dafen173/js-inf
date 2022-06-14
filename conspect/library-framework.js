export const libraryFramework = ''

//React — це бібліотека

//http://sergeyteplyakov.blogspot.com/2012/10/blog-post_26.html#:~:text=%C2%AB%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B5%20%D0%BE%D1%82%D0%BB%D0%B8%D1%87%D0%B8%D0%B5%20%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%20%D0%BE%D1%82%20%D1%84%D1%80%D0%B5%D0%B9%D0%BC%D0%B2%D0%BE%D1%80%D0%BA%D0%BE%D0%B2,%2C%20%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D0%B8%D1%80%D1%83%D1%8F%20%D1%81%D0%B2%D0%BE%D0%B5%20%D0%BE%D0%BA%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%81%D0%B0%D0%BC%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%C2%BB.
// «Главное отличие библиотек от фреймворков в том, что фреймворк запускает ваш код, и, 
//в общем случае, контролирует свое собственное окружение; в то время, как библиотека – это нечто, 
//что вы используете из своего кода, контролируя свое окружение самостоятельно».



//https://proglib.io/p/framework-or-library
// Фреймворк или библиотека? А в чем, собственно, разница?
// Разработчики часто используют термины "библиотека" и "фреймворк" как синонимы, так что кажется, 
//что это одно и то же. Но разница все-таки есть.

// Как фреймворки, так и библиотеки, – это некоторый код. Он может быть большим или маленьким по объему, 
//его автором могут быть сторонние программисты или вы сами. Суть в том, что этот код используется 
//для решения распространенных задач разработки.

// Для  примера возьмем программу, которая должна производить разнообразные манипуляции со строками. 
//Она пишется по хорошему принципу DRY (не повторяйся). В результате получается несколько полезных функций, 
//которые можно использовать многократно:
// function getWords(str) {
//    const words = str.split(' ');
//    return words;
// }

// function createSentence(words) {
//    const sentence = words.join(' ');
//    return sentence;
// }
// Это уже можно назвать простой библиотекой.

// В библиотеках и фреймворках нет никакой магии – только обычный код, который кто-то уже написал за вас, 
//чтобы жизнь стала немного легче. Эти термины действительно синонимичны, ведь они имеют одну цель – 
//решать частые проблемы.

// IKEA или строительная компания?
// Но все же разница есть. Подумайте о вашей программе как о доме, в котором собираетесь жить.
// Можно строить его самому, а когда дело дойдет до мебели, съездить в IKEA, чтобы выбрать то, 
//что вам подходит. Другими словами, вы покупаете стол и вносите его в свой дом. 
//Именно вы полностью контролируете ситуацию.
// Фреймворк – это строительная компания. Она предлагает вам набор проектов на выбор. Клиент немного 
//ограничен в архитектуре и дизайне собственного дома, но профессионалы многое берут на себя. 
//Они полностью контролируют ситуацию и дадут вам знать, когда вы сможете внести свой вклад.

// Техническое различие
// Технически библиотека отличается от фреймворка тем, что называется инверсией управления.

// Используя библиотеку, программист самостоятельно отвечает за поток приложения. Только он решает, 
//когда привлекать к работе стороннюю функциональность.

// Фреймворк же сам отвечает за поток. Он предоставляет несколько мест для размещения вашего кода, 
//но вызываться его или нет – решает он сам.

// Библиотека vs фреймворк
// Возьмем реальную библиотеку (jQuery) и фреймворк (Vue.js) – попробуем с их помощью вывести 
//сообщение об ошибке. Сделаем вид, что ошибка возникает после нажатия на кнопку.

// jQuery
// <html>
//    <head>
//       <script src="https://code.jquery.com/jquery-3.3.1.min.js"
//       </script>
//       <script src="./app.js"></script>
//    </head>
//    <body>
//       <div id="app">
//          <button id="myButton">Submit</button>
//        </div>
//    </body>
// </html>
// let error = false;
// const errorMessage = 'An Error Occurred';
// $('#myButton').on('click', () => {
//   // делаем вид, что при нажатии на кнопку возникла ошибка
//   error = true; 
//   if (error) {
//     $('#app')
//        .append(`<p id="error">${errorMessage}</p>`);
//   } else {
//     $('#error').remove();
//   }
// });
// Здесь мы сами решаем, когда и где вызвать метод библиотеки. Это вовсе не значит, что функции jQuery не требуют определенных входных данных для работы. Суть в том, что jQuery – это библиотека таких функций. Их можно использовать или не использовать. Мы тут главные.

// Vue.js
// <html>
//    <head>
//       <script src="https://cdn.jsdelivr.net/npm/vue"></script>
//       <script src="./app.js"></script>
//    </head>
//    <body>
//       <div id="app"></div>
//    </body>
// </html>
// const vm = new Vue({
//   template: `<div id="vue-example">
//                <button @click="checkForErrors">Submit</button>
//                <p v-if="error">{{ errorMessage }}</p>
//              </div>`,
//   el: '#vue-example',
//   data: {
//     error: null,
//     errorMessage: 'An Error Occurred',
//   },
//   methods: {
//     checkForErrors()  {
//       this.error = !this.error;
//     },
//   },
// });
// Vue начинает с чистого листа и сразу же берет управление на себя. Он говорит, что ему нужно, получает 
//это через конструктор, а потом сам решает, когда это нужно использовать. Управление инвертируется, 
//за рулем теперь Vue. Не вы подключаете фреймворк к своему коду, а он подключает ваш код к себе.

// Именно наличие инверсии управления – основная разница между библиотекой и фреймворком.

// Упрямцы
// Очень часто фреймворки и библиотеки характеризуют как "упрямые" (opinionated) или
 //"не упрямые" (un-opinionated). Эта оценка основывается на уровне свободы, который имеет 
 //разработчик при структурировании кода.

// Конечно, это очень субъективный критерий. Фреймворки "упрямы" по определению – инверсия контроля 
//требует от программиста ряда уступок при проектировании приложения. Степень "упрямства" может быть 
//разной для каждого разработчика.

// Примером очень "упрямого" фреймворка может служить Angular, а вот Vue.js считается очень свободным.

// Теперь вы знаете, что:
// Фреймворки и библиотеки - это код, написанный кем-то другим, который решает некоторые общие задачи, 
//не утруждая вас реализацией этого решения.
// Фреймворк инвертирует управление программой и говорит программисту, что ему нужно.
// Библиотека не вмешивается в поток программы. Ее методы можно вызывать только тогда, когда они нужны.
// "Упрямство" фреймворка или библиотеки определяется степенью свободы разработчика.

