export const callBackVcPromisesVsAsyncAwait = 'https://frontend-stuff.com/blog/javascript-cheatsheet/#promises-vs-async--await'



//https://learn.javascript.ru/callbacks
// Адская пирамида вызовов
// На первый взгляд это рабочий способ написания асинхронного кода. 
//Так и есть. Для одного или двух вложенных вызовов всё выглядит нормально.
// Но для нескольких асинхронных действий, которые нужно 
//выполнить друг за другом, код выглядит вот так:

// loadScript('1.js', function(error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...
//     loadScript('2.js', function(error, script) {
//       if (error) {
//         handleError(error);
//       } else {
//         // ...
//         loadScript('3.js', function(error, script) {
//           if (error) {
//             handleError(error);
//           } else {
//             // ...и так далее, пока все скрипты не будут загружены (*)
//           }
//         });

//       }
//     })
//   }
// });
// В примере выше:
// Мы загружаем 1.js. Продолжаем, если нет ошибок.
// Мы загружаем 2.js. Продолжаем, если нет ошибок.
// Мы загружаем 3.js. Продолжаем, если нет ошибок. И так далее (*).
// Чем больше вложенных вызовов, тем наш код будет иметь всё 
//большую вложенность, которую сложно поддерживать, особенно если 
//вместо ... у нас код, содержащий другие цепочки вызовов, условия и т.д.
// Иногда это называют «адом колбэков» или «адской пирамидой колбэков».
// Пирамида вложенных вызовов растёт вправо с каждым асинхронным 
//действием. В итоге вы сами будете путаться, где что есть.
// Такой подход к написанию кода не приветствуется.


//https://learn.javascript.ru/promise-basics
// Промисы	

//Promise (промис) - это объект, представляющий результат успешного или неудачного 
//завершения асинхронной операции. 

// Промисы позволяют делать вещи в естественном порядке. Сперва мы запускаем 
//loadScript(script), и затем (.then) мы пишем, что делать с результатом.
// Мы можем вызывать .then у Promise столько раз, сколько захотим. 
//Каждый раз мы добавляем нового «фаната», 
//новую функцию-подписчика в «список подписок». Больше об этом в следующей главе: 
//Цепочка промисов.

// Колбэки
// У нас должна быть функция callback на момент вызова loadScript(script, callback). 
//Другими словами, нам нужно знать что делать с результатом до того, как вызовется loadScript.
// Колбэк может быть только один. Адская пирамида.



// Синтаксис создания Promise:

// let promise = new Promise(function(resolve, reject) {
//   // функция-исполнитель (executor)
//   // "певец"
// });
// Функция, переданная в конструкцию new Promise, называется исполнитель 
//(executor). Когда Promise создаётся, она запускается автоматически. 
//Она должна содержать «создающий» код, который когда-нибудь 
//создаст результат. В терминах нашей аналогии: исполнитель – это «певец».

// Её аргументы resolve и reject – это колбэки, которые 
//предоставляет сам JavaScript. Наш код – только внутри исполнителя.
// Когда он получает результат, сейчас или позже – не важно, он 
//должен вызвать один из этих колбэков:

// resolve(value) — если работа завершилась успешно, с результатом value.
// reject(error) — если произошла ошибка, error – объект ошибки.
// Итак, исполнитель запускается автоматически, он должен выполнить 
//работу, а затем вызвать resolve или reject.

// У объекта promise, возвращаемого конструктором new 
//Promise, есть внутренние свойства:
// state («состояние») — вначале "pending" («ожидание»), 
//потом меняется на "fulfilled" («выполнено успешно») при вызове 
//resolve или на "rejected" («выполнено с ошибкой») при вызове reject.
// result («результат») — вначале undefined, далее изменяется 
//на value при вызове resolve(value) или на error при вызове reject(error).


// Потребители: then, catch, finally
// Объект Promise служит связующим звеном между исполнителем («создающим» кодом или «певцом») и функциями-потребителями («фанатами»), которые получат либо результат, либо ошибку. Функции-потребители могут быть зарегистрированы (подписаны) с помощью методов .then, .catch и .finally.
// then
// Наиболее важный и фундаментальный метод – .then.

// Синтаксис:
promise.then(
  function(result) { /* обработает успешное выполнение */ },
  function(error) { /* обработает ошибку */ }
);
// Первый аргумент метода .then – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», и получает результат.
// Второй аргумент .then – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», и получает ошибку.
// Например, вот реакция на успешно выполненный промис:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve запустит первую функцию, переданную в .then
promise.then(
  result => alert(result), // выведет "done!" через одну секунду
  error => alert(error) // не будет запущена
);


// Если мы заинтересованы только в результате успешного выполнения задачи, то в then можно передать только одну функцию:
// let promise = new Promise(resolve => {
//   setTimeout(() => resolve("done!"), 1000);
// });

// promise.then(alert); // выведет "done!" спустя одну секунду



//https://learn.javascript.ru/async-await
// Ключевое слово async перед объявлением функции:
// Обязывает её всегда возвращать промис.
// Позволяет использовать await в теле этой функции.
// Ключевое слово await перед промисом заставит JavaScript дождаться 
//его выполнения, после чего:
// Если промис завершается с ошибкой, будет сгенерировано исключение, 
//как если бы на этом месте находилось throw.
// Иначе вернётся результат промиса.
// Вместе они предоставляют отличный каркас для написания 
//асинхронного кода. Такой код легко и писать, и читать.
// Хотя при работе с async/await можно обходиться без promise.then/catch, иногда 
//всё-таки приходится использовать эти методы (на верхнем уровне 
//вложенности, например). Также await отлично работает в сочетании с Promise.all, 
//если необходимо выполнить несколько задач параллельно.




//https://frontend-stuff.com/blog/javascript-cheatsheet/#promises-vs-async--await
// Promises vs Async / Await
// область действия: в promise асинхронна только цепочка обещаний - она не блокирует выполнение; 
//с async/await вся функция-оболочка является асинхронной;
// логика: в promise синхронная работа может обрабатываться одним и тем же обратным вызовом,
// а несколько обещаний могут обрабатываться с помощью Promise.all; 
//с async/await синхронная работа должна быть размещена за пределами 
//обратного вызова, а несколько обещаний могут обрабатываться с более простыми переменными;
// обработка ошибок: Promises: then, catch, finally; Async/await: try, catch, finally.





//https://tproger.ru/articles/uglubljaemsja-v-javascript-vsjo-li-mozhet-async-await-ili-kogda-ispolzovat-promise/
// Плюсы и минусы в теории
// Async/await
// Плюсы
// Удобство и простота чтения
// Возможность использования последовательного стиля программирования
// Минусы
// Легко наткнуться на избыточное ожидание последовательного кода. Для истинной параллельности нужно модифицировать код.
// Неочевидность возвращаемых значений try…catch.

// Promise
// Плюсы
// Использует традиционный подход колбэков.
// Данные с ошибками и данные с успешным результатом операции однозначно понимаемы.
// Возможность использовать Promise.all без оглядки на синтаксис.
// Оповещения Promise.resolve и Promise.reject доступны везде.
// Наглядное использование метода Promise.finally.
// Минусы
// При неправильном использовании возможно создание слишком глубоких использований цепочек .then



