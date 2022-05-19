export const promisesVsAsyncAwait = 'https://frontend-stuff.com/blog/javascript-cheatsheet/#promises-vs-async--await'


//Promises vs Async / Await
//область действия: в promise асинхронна только цепочка обещаний
// - она не блокирует выполнение; с async/await 
//вся функция-оболочка является асинхронной;

//логика: 
//в promise синхронная работа может обрабатываться 
//одним и тем же обратным вызовом, а несколько обещаний 
//могут обрабатываться с помощью Promise.all; 

//с async/await синхронная работа должна быть размещена 
//за пределами обратного вызова, а несколько обещаний 
//могут обрабатываться с более простыми переменными;

//обработка ошибок: 
//Promises: then, catch, finally; 
//Async/await: try, catch, finally.


// Promise.allSettled
// Новая возможность
// Эта возможность была добавлена в язык недавно. В старых браузерах может понадобиться полифил.
// Синтаксис:

// let promise = Promise.allSettled(iterable);
// Promise.all завершается с ошибкой, если она возникает в любом из переданных промисов. 
//Это подходит для ситуаций «всё или ничего», когда нам нужны все результаты для продолжения:

// Promise.all([
//   fetch('/template.html'),
//   fetch('/style.css'),
//   fetch('/data.json')
// ]).then(render); // методу render нужны результаты всех fetch
// Метод Promise.allSettled всегда ждёт завершения всех промисов. В массиве результатов будет

// {status:"fulfilled", value:результат} для успешных завершений,
// {status:"rejected", reason:ошибка} для ошибок.
// Например, мы хотели бы загрузить информацию о множестве пользователей. Даже если в каком-то 
//запросе ошибка, нас всё равно интересуют остальные.

// Используем для этого Promise.allSettled:

// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://no-such-url'
// ];

// Promise.allSettled(urls.map(url => fetch(url)))
//   .then(results => { // (*)
//     results.forEach((result, num) => {
//       if (result.status == "fulfilled") {
//         alert(`${urls[num]}: ${result.value.status}`);
//       }
//       if (result.status == "rejected") {
//         alert(`${urls[num]}: ${result.reason}`);
//       }
//     });
//   });
// Массив results в строке (*) будет таким:

// [
//   {status: 'fulfilled', value: ...объект ответа...},
//   {status: 'fulfilled', value: ...объект ответа...},
//   {status: 'rejected', reason: ...объект ошибки...}
// ]
// То есть, для каждого промиса у нас есть его статус и значение/ошибка.



