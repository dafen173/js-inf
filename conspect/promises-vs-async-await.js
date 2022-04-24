export const promisesVsAsyncAwait = 'https://frontend-stuff.com/blog/javascript-cheatsheet/#promises-vs-async--await'



// Promises vs Async / Await
// область действия: в promise асинхронна только цепочка обещаний - она не блокирует выполнение; с async/await вся функция-оболочка является асинхронной;
// логика: в promise синхронная работа может обрабатываться одним и тем же обратным вызовом, а несколько обещаний могут обрабатываться с помощью Promise.all; с async/await синхронная работа должна быть размещена за пределами обратного вызова, а несколько обещаний могут обрабатываться с более простыми переменными;
// обработка ошибок: Promises: then, catch, finally; Async/await: try, catch, finally.




