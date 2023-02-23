export const eventLoop = ''

//Наглядная схема работы
//http://latentflip.com/loupe/


// порядок выполнения такой
// сначала синхронный код из колл-стэка, например console.log
// потом микрозадачи, например промисы
// потом макрозадачи, только после выполнения всех микрозадач
// settimeout - макрозадача



// про стэк вызовов
function foo() {}
function bar() {
    function baz(){}
    baz() //попадет в колл-стэк 3-ей, вылетит из него 2й по счету
}
foo() // попадет в колл-стэк первой и сразу валетит из него
bar() // попадет в колл-стэк второй и будет в нем пока не завершится ее внутренняя ф-ция baz().    bar() вылетит из колл-стэка 3ей по счету







//https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii
// Объяснение Event Loop в Javascript с помощью визуализации
// Категории: Программирование
// Объяснение Event Loop в Javascript с помощью визуализации
// Это перевод статьи Лидии Холли, где она объясняет с помощью визуализации как работает Event Loop в JS.

// Event loop – это одна из тех вещей, с которыми так или иначе сталкивается каждый разработчик JavaScript, но поначалу немного сложно понять что к чему. 

// JavaScript это однопоточный язык: одновременно может выполняться только одна задача. Обычно в этом нет ничего сложного, но теперь представьте, что вы запускаете задачу, которая занимает 30 секунд... Да. Во время этой задачи мы ждем 30 секунд, прежде чем что-либо еще может произойти (по умолчанию JavaScript запускается в главном потоке браузера, поэтому весь пользовательский интерфейс будет ждать)😬 Это 2020 год, никто не хочет медленный, сайт который тупит.

// К счастью, браузер предоставляет нам некоторые функции, которые сам механизм JavaScript не предоставляет: Web API. Который включает в себя DOM API, setTimeout, HTTP-запросы и так далее. Это может помочь нам создать асинхронное неблокирующее поведение 🚀.

// Когда мы вызываем функцию, она добавляется в call stack(стек вызовов). Стек вызовов является частью механизма JS, это не зависит от браузера. Это классический взгляд на стек, т.е  first in, last out. Когда функция возвращает значение, она "выталкивается" из стека.

// Функция response возвращает функцию setTimeout. SetTimeout предоставляется нам через веб-API: он позволяет нам делеить задачи, не блокируя основной поток. Callback функция, которую мы передали в функцию setTimeout, лямбда функция () => {return 'Hey'} добавляется в веб-API. Тем временем функция setTimeout и функция response извлекаются из стека, они оба возвращают свои значения.

// timer

// В Web API таймер работает до тех пор, пока второй аргумент, который мы передали ему,  не подождет 1000 мс. Callback не сразу добавляется в стек вызовов, а передается в нечто, называемое очередью.

// queue

// Это может сбивать с толку: это не означает, что callback функия добавляется в стек вызовов (таким образом, возвращает значение) через 1000 мс! Он просто добавляется в очередь через 1000 мс. Но в этой очереди, функция должна ждать пока придет ее черёд.

// Теперь это та часть, которую мы все ждали... Время для event loop выполнить единственную задачу: соединить очередь со стеком вызовов! Если стек вызовов пуст, то есть, если все ранее вызванные функции вернули свои значения и были извлечены из стека, первый элемент в очереди добавляется в стек вызовов. В этом случае никакие другие функции не были вызваны, что означает, что стек вызовов был пуст к тому времени, когда callback функция была первым элементом в очереди.

// event looks to callstack
// callback добавляется в стек вызовов, вызывается и возвращает значение, а также извлекается из стека.

// result

// Чтение статьи - это весело, но вы сможете полностью понять тему, не работая с ней снова и снова. 
// Попробуйте выяснить, что появится в консоли, если мы запустим следующее:

const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();

// =>  First, Third, Second

// Давайте посмотрим, что происходит, когда мы запускаем этот код в браузере:
// Мы вызываем bar. bar возвращает функцию setTimeout.
// Callback который мы передали в setTimeout добавляется в Web API, функция setTimeout и bar 
//извлекаются из стека вызовов.
// Таймер запускается, тем временем foo  вызывается и записывает в журнал First. 
//foo возвращает (undefined),baz вызыввается и callback добавляется в очередь
// baz логиркнт Third. Цикл обработки событий видит, что коллстек пуст после возврата baz, 
//после чего колбэк добавляется в стек вызовов.
// Callback логирует Second.
// Надеюсь, что это заставит вас чувствовать себя более уверено с циклом событий (event loop)! Не беспокойтесь, если это все еще кажется запутанным, самое важное - понять, откуда могут возникнуть определенные ошибки или специфическое поведение.



//https://learn.javascript.ru/event-loop
// Макрозадачи и Микрозадачи
// Помимо макрозадач, описанных в этой части, существуют микрозадачи, упомянутые в главе Микрозадачи.
//https://learn.javascript.ru/microtask-queue

// Микрозадачи приходят только из кода. Обычно они создаются промисами: 
//выполнение обработчика .then/catch/finally становится микрозадачей. 
//Микрозадачи также используются «под капотом» await, т.к. это форма обработки промиса.

// Микрозадачи
// Обработчики промисов .then/.catch/.finally всегда асинхронны.
// Даже когда промис сразу же выполнен, код в строках ниже .then/.catch/.finally будет запущен до этих обработчиков.
// Вот демо:
// let promise = Promise.resolve();
// promise.then(() => alert("промис выполнен"));
// alert("код выполнен"); // этот alert показывается первым
// Если вы запустите его, сначала вы увидите код выполнен, а потом промис выполнен.
// Это странно, потому что промис определённо был выполнен с самого начала.
// Почему .then срабатывает позже? Что происходит?
// Очередь микрозадач
// Асинхронные задачи требуют правильного управления. Для этого стандарт предусматривает внутреннюю очередь PromiseJobs, более известную как «очередь микрозадач (microtask queue)» (термин V8).
// Как сказано в спецификации:
// Очередь определяется как первым-пришёл-первым-ушёл (FIFO): задачи, попавшие в очередь первыми, выполняются тоже первыми.
// Выполнение задачи происходит только в том случае, если ничего больше не запущено.
// Или, проще говоря, когда промис выполнен, его обработчики .then/catch/finally попадают в очередь. Они пока не выполняются. Движок JavaScript берёт задачу из очереди и выполняет её, когда он освободится от выполнения текущего кода.
// Вот почему сообщение «код выполнен» в примере выше будет показано первым.
// Обработчики промисов всегда проходят через эту внутреннюю очередь.
// Если есть цепочка с несколькими .then/catch/finally, то каждый из них выполняется асинхронно. То есть сначала ставится в очередь, а потом выполняется, когда выполнение текущего кода завершено и добавленные ранее в очередь обработчики выполнены.
// Но что если порядок имеет значение для нас? Как мы можем вывести код выполнен после промис выполнен?
// Легко, используя .then:
// Promise.resolve()
//   .then(() => alert("промис выполнен!"))
//   .then(() => alert("код выполнен"));
// Теперь порядок стал таким, как было задумано.




// Также есть специальная функция queueMicrotask(func), которая помещает func в очередь микрозадач.
// Сразу после каждой макрозадачи движок исполняет все задачи из очереди микрозадач 
//перед тем, как выполнить следующую макрозадачу или отобразить изменения на странице, или сделать что-то ещё.

// Например:
// setTimeout(() => alert("timeout"));
// Promise.resolve()
//   .then(() => alert("promise"));
// alert("code");
// Какой здесь будет порядок?

// code появляется первым, т.к. это обычный синхронный вызов.
// promise появляется вторым, потому что .then проходит через очередь микрозадач и выполняется 
//после текущего синхронного кода.
// timeout появляется последним, потому что это макрозадача.

// Более подробное изображение событийного цикла выглядит так:
// Все микрозадачи завершаются до обработки каких-либо событий или рендеринга, или перехода к другой макрозадаче.
// Это важно, так как гарантирует, что общее окружение остаётся одним и тем же между микрозадачами
// – не изменены координаты мыши, не получены новые данные по сети и т.п.

// Если мы хотим запустить функцию асинхронно (после текущего кода), но до отображения изменений 
//и до новых событий, то можем запланировать это через queueMicrotask.

// Вот пример с индикатором выполнения, похожий на предыдущий, но в этот раз использована функция 
//queueMicrotask вместо setTimeout. Обратите внимание – отрисовка страницы происходит только в самом конце. 
//Как и в случае обычного синхронного кода.

// <div id="progress"></div>

// <script>
//   let i = 0;

//   function count() {

//     // делаем часть крупной задачи (*)
//     do {
//       i++;
//       progress.innerHTML = i;
//     } while (i % 1e3 != 0);

//     if (i < 1e6) {
//       queueMicrotask(count);
//     }

//   }

//   count();
// </script>
// Итого
// Более подробный алгоритм событийного цикла (хоть и упрощённый в сравнении со спецификацией):

// Выбрать и исполнить старейшую задачу из очереди макрозадач (например, «script»).
// Исполнить все микрозадачи:
// Пока очередь микрозадач не пуста: - Выбрать из очереди и исполнить старейшую микрозадачу
// Отрисовать изменения страницы, если они есть.
// Если очередь макрозадач пуста – подождать, пока появится макрозадача.
// Перейти к шагу 1.
// Чтобы добавить в очередь новую макрозадачу:

// Используйте setTimeout(f) с нулевой задержкой.
// Этот способ можно использовать для разбиения больших вычислительных задач на части, чтобы браузер мог реагировать на пользовательские события и показывать прогресс выполнения этих частей.

// Также это используется в обработчиках событий для отложенного выполнения действия после того, как событие полностью обработано (всплытие завершено).

// Для добавления в очередь новой микрозадачи:

// Используйте queueMicrotask(f).
// Также обработчики промисов выполняются в рамках очереди микрозадач.
// События пользовательского интерфейса и сетевые события в промежутках между микрозадачами не обрабатываются: микрозадачи исполняются непрерывно одна за другой.

// Поэтому queueMicrotask можно использовать для асинхронного выполнения функции в том же состоянии окружения.


// Web Workers
// Для длительных тяжёлых вычислений, которые не должны блокировать событийный цикл, мы можем использовать Web Workers.
// Это способ исполнить код в другом, параллельном потоке.
// Web Workers могут обмениваться сообщениями с основным процессом, но они имеют свои переменные и свой событийный цикл.
// Web Workers не имеют доступа к DOM, поэтому основное их применение – вычисления. Они позволяют задействовать несколько ядер процессора одновременно.





import { contents } from "./contents";