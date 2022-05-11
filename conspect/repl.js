export const repl = ''


//https://www.8host.com/blog/ispolzovanie-interaktivnoj-obolochki-repl-v-node-js/
// ИСПОЛЬЗОВАНИЕ ИНТЕРАКТИВНОЙ ОБОЛОЧКИ REPL В NODE.JS
// 28 октября, 2019 12:03 пп 930 views | Комментариев нет
// Development, Java, Ubuntu | Amber | Комментировать запись

// Read-Eval-Print-Loop (сокращенно REPL) – это интерактивная оболочка, которая обрабатывает выражения Node.js. Оболочка считывает код JavaScript, который вводит пользователь, оценивает результат интерпретации строки кода, отображает результаты для пользователя и повторяет цикл до тех пор, пока пользователь не прервет ее работу.

// REPL поставляется вместе с каждой установкой Node.js и позволяет вам быстро тестировать и исследовать код JavaScript в среде Node без необходимости сохранять его в файле.

// Требования
// Для выполнения этого урока вам понадобится:

// Установка Node.js на вашей машине разработки. В этом мануале используется версия 10.16.0. Чтобы установить Node.js на macOS или Ubuntu 18.04, выполните этот или этот мануал (в Ubuntu лучше устанавливать через PPA).
// Базовые навыки работы с JavaScript. Много полезного вы найдете в этом разделе нашего Информатория.
// 1: Запуск и остановка REPL
// Если вы установили Node.js, то у вас также есть и оболочка REPL. Чтобы запустить ее, просто введите node в командной строке:

// node

// Вы попадете в командную строку REPL:

// >

// Символ > означает, что вы можете ввести код JavaScript, и он будет немедленно оценен.

// Для примера попробуйте сложить два числа в REPL:

// > 2 + 2

// После того как вы нажмете Enter, REPL обработает выражение и вернет результат:

// 4

// Чтобы выйти из REPL, вы можете набрать .exit, а также нажать Ctrl + D один раз или дважды Ctrl + C, чтобы вернуться к в стандартную оболочку.

// Теперь давайте посмотрим, как можно использовать REPL для выполнения простого кода JavaScript.

// 2: Выполнение кода в REPL
// REPL позволяет быстро протестировать код JavaScript, не создавая файл. Почти все допустимые выражения JavaScript или Node.js можно выполнить в REPL.

// Мы уже пробовали сложить два числа, а теперь давайте попробуем разделить. Для этого запустите новую сессию REPL:

// node

// В строку введите:

// > 10 / 5

// Нажмите ввод, и вы получите ожидаемый результат:

// 2

// Также REPL умеет работать со строками. Например, вы можете выполнить конкатенацию следующей строки:

// > "Hello " + "World"

// Нажмите ввод, и вы получите ожидаемый результат:

// 'Hello World'

// Примечание: Возможно, вы заметили, что в выводе используются одинарные кавычки вместо двойных. В JavaScript кавычки для обозначения строки не влияют на ее значение. Если вы ввели строку в одинарных кавычках, оболочка REPL достаточно умна, чтобы в выводе использовать двойные кавычки.

// Вызов функций
// При написании кода Node.js сообщения обычно выводятся с помощью глобального метода console.log или аналогичной функции.

// Читайте также: Определение функций в JavaScript

// Введите в командную строку следующее:

// > console.log("Hi")

// Нажмите Enter и получите следующий вывод:

// Hi
// undefined

// Первым результатом является console.log, что выводит сообщение в поток stdout (на экран). Поскольку console.log отображает строку, а не возвращает ее, сообщение отображается без кавычек. Undefined – это значение функции.

// Создание переменных
// Как правило, в JavaScript вы работает не только с литералами. Переменные в REPL создаются так же, как и файлы .js. Введите в командную строку следующее:

// > let age = 30

// Нажмите Enter:

// undefined

// Как и раньше в примере с console.log, возвращаемое значение этой команды – undefined. Переменная age будет доступна до выхода из сеанса REPL. Например, вы можете умножить значение этой переменной на два. Введите в следующее и нажмите Enter:

// > age * 2

// Результат будет таким:

// 60

// Поскольку REPL возвращает значения, вам не нужно использовать console.log или другие подобные функции, чтобы увидеть вывод на экране. Любое возвращаемое значение будет отображаться на экране по умолчанию.

// Многострочные блоки
// Многострочные блоки кода также можно обработать в REPL. Например, можно создать функцию, которая добавляет 3 к заданному числу. Запустите такую функцию:

// > const add3 = (num) => {

// Затем нажмите ENTER, и командная строка изменится:

// ...

// Оболочка REPL заметила открытую фигурную скобку и поэтому предполагает, что вы будете писать более одной строки кода. Для удобства REPL добавляет в следующей строке 3 точки и пробел, поэтому следующие строки будут с отступом.

// Введите вторую и третью строки функции по одной, нажимая Enter после каждой строки:

// ... return num + 3;
// ... }

// Нажмите Enter после закрывающей фигурной скобки, после чего вы получите значение undefined, которое является «возвращаемым значением» присвоения функции переменной. Теперь строка … исчезла, а > вернулась:

// undefined
// >

// Теперь вызовите add3() со значением:

// > add3(10)

// Как и ожидалось, в выводе получится:

// 13

// Вы можете использовать оболочку REPL, чтобы протестировать фрагменты кода JavaScript, прежде чем включать их в свои программы. REPL также поддерживает несколько удобных сокращений и горячих клавиш, чтобы упростить этот процесс.

// 3: Горячие клавиши REPL
// REPL предоставляет горячие клавиши, что упрощает написание кода. Оболочка хранит историю всех введенных команд и позволяет использовать их повторно.

// Например, введите следующую строку:

// "The answer to life the universe and everything is 32"

// В результате будет строка:

// 'The answer to life the universe and everything is 32'

// Чтобы отредактировать строку и изменить «32» на «42», используйте в командной строке клавишу со стрелкой вверх – так вы сможете вернуться к предыдущей команде:

// > “The answer to life the universe and everything is 32”

// Переместите курсор влево, удалите 3, введите 4 и снова нажмите Enter:

// 'The answer to life the universe and everything is 42'

// Продолжайте нажимать клавишу со стрелкой вверх, и вы вернетесь назад к первой использованной команде в текущем сеансе REPL. Нажимая стрелку вниз, вы переместитесь по истории команд в обратном направлении.

// В конце своей текущей истории команд вы снова увидите командную строку.

// Чтобы быстро получить последнее оцененное значение, используйте символ подчеркивания. В командной строке введите _ и нажмите ввод:

// > _

// На экране снова появится ранее введенная строка:

// 'The answer to life the universe and everything is 42'

// REPL также поддерживает автозаполнение для функций, переменных и ключевых слов. Если вы хотите найти квадратный корень числа с помощью функции Math.sqrt, введите первые несколько букв, например, так:

// > Math.sq

// Затем нажмите клавишу TAB, и REPL автоматически завершит функцию:

// > Math.sqrt

// Когда для автозаполнения есть несколько опций, оболочка предложит вам все доступные варианты. Например, введите:

// > Math.

// и нажмите TAB дважды. На экране вы увидите возможные варианты для автозаполнения:

// > Math.
// Math.__defineGetter__      Math.__defineSetter__      Math.__lookupGetter__
// Math.__lookupSetter__      Math.__proto__             Math.constructor
// Math.hasOwnProperty        Math.isPrototypeOf         Math.propertyIsEnumerable
// Math.toLocaleString        Math.toString              Math.valueOf
// Math.E                     Math.LN10                  Math.LN2
// Math.LOG10E                Math.LOG2E                 Math.PI
// Math.SQRT1_2               Math.SQRT2                 Math.abs
// Math.acos                  Math.acosh                 Math.asin
// Math.asinh                 Math.atan                  Math.atan2
// Math.atanh                 Math.cbrt                  Math.ceil
// Math.clz32                 Math.cos                   Math.cosh
// Math.exp                   Math.expm1                 Math.floor
// Math.fround                Math.hypot                 Math.imul
// Math.log                   Math.log10                 Math.log1p
// Math.log2                  Math.max                   Math.min
// Math.pow                   Math.random                Math.round
// Math.sign                  Math.sin                   Math.sinh
// Math.sqrt                  Math.tan                   Math.tanh
// Math.trunc

// В зависимости от размера экрана вашей оболочки вывод может отображаться с разным количеством строк и столбцов. Сейчас вы видите список всех функций и свойств, которые доступны в модуле Math.

// Нажмите Ctrl + C, чтобы перейти к новой строке в командной строке, не выполняя то, что находится в текущей.

// С помощью горячих клавиш работать с REPL проще и удобнее. Для повышения производительности REPL также предлагает команды.

// 4: Использование команд REPL
// Контролировать поведение REPL можно с помощью ключевых слов. Каждая команда начинается с точки.

// Команда .help
// Чтобы получить список всех доступных команд, используйте команду .help:

// > .help

// Команд в REPL не так много, но с ними намного удобнее работать:

// .break    Sometimes you get stuck, this gets you out
// .clear    Alias for .break
// .editor   Enter editor mode
// .exit     Exit the repl
// .help     Print this help message
// .load     Load JS from a file into the REPL session
// .save     Save all evaluated commands in this REPL session to a file
// Press ^C to abort current expression, ^D to exit the repl

// Если вы забыли нужную команду, .help всегда поможет вам ее найти.

// Команды .break и .clear
// Используя .break или .clear, вы можете легко выйти из многострочного выражения. Например, начните такой цикл for:

// > for (let i = 0; i < 100000000; i++) {

// Чтобы выйти из многострочного ввода, вместо следующей строки используйте команду .break или .clear:

// ... .break

// Вы увидите командную строку:

// >

// REPL переместится в новую командную строку, не выполняя никакого кода (аналогично нажатию CTRL+C).

// Команды .save и .load
// Команда .save сохраняет в файл весь код, который вы запустили в REPL. Команда .load запускает весь код JavaScript из файла внутри REPL.

// Выйдите из сеанса с помощью команды .exit или клавиш CTRL+D, а затем запустите новый сеанс REPL. Теперь будет сохранен только тот код, который вы собираетесь написать.

// Создайте такой массив:

// > fruits = ['banana', 'apple', 'mango']

// В следующей строке REPL отобразит:

// [ 'banana', 'apple', 'mango' ]

// Сохраните эту переменную в новый файл fruits.js:

// > .save fruits.js

// Оболочка подтвердит действие:

// Session saved to: fruits.js

// Файл сохраняется в том же каталоге, где вы открыли REPL. Например, если вы открыли оболочку REPL в своем домашнем каталоге, то и файл будет сохранен в домашнем каталоге.

// Выйдите из сеанса REPL и начните новый. В командной строке загрузите файл fruits.js, введя:

// > .load fruits.js

// В результате будет:

// fruits = ['banana', 'apple', 'mango'] [ 'banana', 'apple', 'mango' ]

// Команда .load читает каждую строку кода и выполняет ее, как это сделал бы интерпретатор JavaScript. Теперь вы можете использовать переменную fruits так, как если бы она была доступна в текущем сеансе все время.

// Введите следующую команду и нажмите ввод:

// > fruits[1]

// REPL выведет:

// 'apple'

// Вы можете загрузить с помощью команды .load любой файл JavaScript, а не только элементы, которые вы сохранили. Давайте откроем редактор кода или nano, редактор командной строки, и создадим новый файл с именем peanuts.js:

// nano peanuts.js

// Теперь, когда файл открыт, введите следующее:

// console.log('I love peanuts!');

// Сохраните и выйдите из редактора nano, нажав Ctrl+X.

// В том же каталоге, где вы сохранили peanuts.js, запустите REPL. А теперь загрузите peanuts.js в вашу сессию:

// > .load peanuts.js

// Команда .load выполнит единый оператор console и отобразит следующий вывод:

// console.log('I love peanuts!');
// I love peanuts!
// undefined
// >

// Если работа в REPL затянулась или вы написали интересный фрагмент кода, который стоит сохранить или изучить более подробно, вы можете использовать команды .save и .load.

// Заключение
// REPL – это интерактивная среда, которая позволяет выполнять код JavaScript без предварительной записи его в файл.

// Вы можете использовать оболочку REPL, чтобы опробовать код JavaScript из других наших мануалов:





