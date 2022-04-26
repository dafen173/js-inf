export const operators = 'https://learn.javascript.ru/operators'



//https://learn.javascript.ru/operators
// Присваивание
// Давайте отметим, что в таблице приоритетов также есть оператор присваивания =. У него один из самых низких приоритетов: 2.
// Именно поэтому, когда переменной что-либо присваивают, например, x = 2 * 2 + 1, то сначала выполнится арифметика, а уже затем произойдёт присваивание = с сохранением результата в x.
// let x = 2 * 2 + 1;
// alert( x ); // 5
// Присваивание = возвращает значение
// Тот факт, что = является оператором, а не «магической» конструкцией языка, имеет интересные последствия.

// Большинство операторов в JavaScript возвращают значение. Для некоторых это очевидно, например сложение + или умножение *. Но и оператор присваивания не является исключением.

// Вызов x = value записывает value в x и возвращает его.

// Благодаря этому присваивание можно использовать как часть более сложного выражения:

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// alert( a ); // 3
// alert( c ); // 0
// В примере выше результатом (a = b + 1) будет значение, которое присваивается переменной a (то есть 3). Потом оно используется для дальнейших вычислений.

// Забавное применение присваивания, не так ли? Нам нужно понимать, как это работает, потому что иногда это можно увидеть в JavaScript-библиотеках.

// Однако писать самим в таком стиле не рекомендуется. Такие трюки не сделают ваш код более понятным или читабельным.

// Присваивание по цепочке
// Рассмотрим ещё одну интересную возможность: цепочку присваиваний.

// let a, b, c;

// a = b = c = 2 + 2;

// alert( a ); // 4
// alert( b ); // 4
// alert( c ); // 4
// Такое присваивание работает справа налево. Сначала вычисляется самое правое выражение 2 + 2, и затем результат присваивается переменным слева: c, b и a. В конце у всех переменных будет одно значение.

// Опять-таки, чтобы код читался легче, лучше разделять подобные конструкции на несколько строчек:

// c = 2 + 2;
// b = c;
// a = c;
// Польза от такого стиля особенно ощущается при быстром просмотре кода.

// Сокращённая арифметика с присваиванием
// Часто нужно применить оператор к переменной и сохранить результат в ней же.

// Например:

// let n = 2;
// n = n + 5;
// n = n * 2;
// Эту запись можно укоротить при помощи совмещённых операторов += и *=:

// let n = 2;
// n += 5; // теперь n = 7 (работает как n = n + 5)
// n *= 2; // теперь n = 14 (работает как n = n * 2)

// alert( n ); // 14
// Подобные краткие формы записи существуют для всех арифметических и побитовых операторов: /=, -= и так далее.

// Вызов с присваиванием имеет в точности такой же приоритет, как обычное присваивание, то есть выполнится после большинства других операций:

// let n = 2;

// n *= 3 + 5;

// alert( n ); // 16  (сначала выполнится правая часть, выражение идентично n *= 8)




//https://learn.javascript.ru/comparison
// Операторы сравнения 
// Операторы сравнения возвращают значения логического типа.
// Строки сравниваются посимвольно в лексикографическом порядке.
// Значения разных типов при сравнении приводятся к числу. Исключением является сравнение с помощью операторов строгого равенства/неравенства.
// Значения null и undefined равны == друг другу и не равны любому другому значению.
// Будьте осторожны при использовании операторов сравнений вроде > и < с переменными, которые могут принимать значения null/undefined. Хорошей идеей будет сделать отдельную проверку на null/undefined.





//https://learn.javascript.ru/operators#slozhenie-strok-pri-pomoschi-binarnogo
//Строчный оператор. конкатинация
// Сложение строк при помощи бинарного +
// Давайте рассмотрим специальные возможности операторов JavaScript, которые выходят за рамки школьной арифметики.
// Обычно при помощи плюса '+' складывают числа.
// Но если бинарный оператор '+' применить к строкам, то он их объединяет в одну:
// let s = "моя" + "строка";
// alert(s); // моястрока
// Обратите внимание, если хотя бы один операнд является строкой, то второй будет также преобразован в строку.

// Например:
// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"
// Как видите, не важно, первый или второй операнд является строкой.

// Вот пример посложнее:
// alert(2 + 2 + '1' ); // будет "41", а не "221"
// Здесь операторы работают один за другим. Первый + складывает два числа и возвращает 4, затем следующий + объединяет результат со строкой, производя действие 4 + '1' = 41.
// Сложение и преобразование строк — это особенность бинарного плюса +. Другие арифметические операторы работают только с числами и всегда преобразуют операнды в числа.
// Например, вычитание и деление:
// alert( 6 - '2' ); // 4, '2' приводится к числу
// alert( '6' / '2' ); // 3, оба операнда приводятся к числам




//https://learn.javascript.ru/operators#matematika
// Математика
// Поддерживаются следующие математические операторы:

// Сложение +,
// Вычитание -,
// Умножение *,
// Деление /,
// Взятие остатка от деления %,
// Возведение в степень **.
// Первые четыре оператора очевидны, а про % и ** стоит сказать несколько слов.

// Взятие остатка %
// Оператор взятия остатка %, несмотря на обозначение, никакого отношения к процентам не имеет.
// Результат a % b – это остаток от целочисленного деления a на b.
// Например:
// alert( 5 % 2 ); // 1, остаток от деления 5 на 2
// alert( 8 % 3 ); // 2, остаток от деления 8 на 3

// Возведение в степень **
// В выражении a ** b оператор возведения в степень умножает a на само себя b раз.
// Например:
// alert( 2 ** 2 ); // 4  (2 умножено на себя 2 раза)
// alert( 2 ** 3 ); // 8  (2 * 2 * 2, 3 раза)
// alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 раза)
// Математически, оператор работает и для нецелых чисел. Например, квадратный корень является возведением в степень 1/2:
// alert( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)
// alert( 8 ** (1/3) ); // 2 (степень 1/3 эквивалентна взятию кубического корня)




//https://learn.javascript.ru/logical-operators
// Логические операторы
// В JavaScript есть четыре логических оператора: || (ИЛИ), && (И) и ! (НЕ), ?? (Оператор нулевого слияния). Здесь мы рассмотрим первые три, оператор ?? будет в следующей статье.

// Несмотря на своё название, данные операторы могут применяться к значениям любых типов. Полученные результаты также могут иметь различный тип.

// Давайте рассмотрим их подробнее.

// || (ИЛИ)
// Оператор «ИЛИ» выглядит как двойной символ вертикальной черты:

// result = a || b;
// Традиционно в программировании ИЛИ предназначено только для манипулирования булевыми значениями: в случае, если какой-либо из аргументов true, он вернёт true, в противоположной ситуации возвращается false.

// В JavaScript, как мы увидим далее, этот оператор работает несколько иным образом. Но давайте сперва посмотрим, что происходит с булевыми значениями.

// Существует всего четыре возможные логические комбинации:

// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false
// Как мы можем наблюдать, результат операций всегда равен true, за исключением случая, когда оба аргумента false.

// Если значение не логического типа, то оно к нему приводится в целях вычислений.

// Например, число 1 будет воспринято как true, а 0 – как false:

// if (1 || 0) { // работает как if( true || false )
//   alert( 'truthy!' );
// }
// Обычно оператор || используется в if для проверки истинности любого из заданных условий.

// К примеру:

// let hour = 9;

// if (hour < 10 || hour > 18) {
//   alert( 'Офис закрыт.' );
// }
// Можно передать и больше условий:

// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   alert( 'Офис закрыт.' ); // это выходной
// }
// ИЛИ «||» находит первое истинное значение
// Описанная выше логика соответствует традиционной. Теперь давайте поработаем с «дополнительными» возможностями JavaScript.

// Расширенный алгоритм работает следующим образом.

// При выполнении ИЛИ || с несколькими значениями:

// result = value1 || value2 || value3;
// Оператор || выполняет следующие действия:

// Вычисляет операнды слева направо.
// Каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда.
// Если все операнды являются ложными (false), возвращает последний из них.
// Значение возвращается в исходном виде, без преобразования.

// Другими словами, цепочка ИЛИ || возвращает первое истинное значение или последнее, если такое значение не найдено.

// Например:

// alert( 1 || 0 ); // 1
// alert( true || 'no matter what' ); // true

// alert( null || 1 ); // 1 (первое истинное значение)
// alert( null || 0 || 1 ); // 1 (первое истинное значение)
// alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)
// Это делает возможным более интересное применение оператора по сравнению с «чистым, традиционным, только булевым ИЛИ».

// Получение первого истинного значения из списка переменных или выражений.

// Представим, что у нас имеется ряд переменных, которые могут содержать данные или быть null/undefined. Как мы можем найти первую переменную с данными?

// С помощью ||:

// let currentUser = null;
// let defaultUser = "John";

// let name = currentUser || defaultUser || "unnamed";

// alert( name ); // выбирается "John" – первое истинное значение
// Если бы и currentUser, и defaultUser были ложными, в качестве результата мы бы наблюдали "unnamed".

// Сокращённое вычисление.

// Операндами могут быть как отдельные значения, так и произвольные выражения. ИЛИ || вычисляет их слева направо. Вычисление останавливается при достижении первого истинного значения. Этот процесс называется «сокращённым вычислением», поскольку второй операнд вычисляется только в том случае, если первого недостаточно для вычисления всего выражения.

// Это хорошо заметно, когда выражение, указанное в качестве второго аргумента, имеет побочный эффект, например, изменение переменной.

// В приведённом ниже примере x не изменяется:

// let x;

// true || (x = 1);

// alert(x); // undefined, потому что (x = 1) не вычисляется
// Если бы первый аргумент имел значение false, то || приступил бы к вычислению второго и выполнил операцию присваивания:

// let x;

// false || (x = 1);

// alert(x); // 1
// Присваивание – лишь один пример. Конечно, могут быть и другие побочные эффекты, которые не проявятся, если вычисление до них не дойдёт.

// Как мы видим, этот вариант использования || является "аналогом if". Первый операнд преобразуется в логический. Если он оказывается ложным, начинается вычисление второго.

// В большинстве случаев лучше использовать «обычный» if, чтобы облегчить понимание кода, но иногда это может быть удобно.

// && (И)
// Оператор И пишется как два амперсанда &&:

// result = a && b;
// В традиционном программировании И возвращает true, если оба аргумента истинны, а иначе – false:

// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false
// Пример с if:

// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//   alert( 'The time is 12:30' );
// }
// Как и в случае с ИЛИ, любое значение допускается в качестве операнда И:

// if (1 && 0) { // вычисляется как true && false
//   alert( "не сработает, так как результат ложный" );
// }
// И «&&» находит первое ложное значение
// При нескольких подряд операторах И:

// result = value1 && value2 && value3;
// Оператор && выполняет следующие действия:

// Вычисляет операнды слева направо.
// Каждый операнд преобразует в логическое значение. Если результат false, останавливается и возвращает исходное значение этого операнда.
// Если все операнды были истинными, возвращается последний.
// Другими словами, И возвращает первое ложное значение. Или последнее, если ничего не найдено.

// Вышеуказанные правила схожи с поведением ИЛИ. Разница в том, что И возвращает первое ложное значение, а ИЛИ –  первое истинное.

// Примеры:

// // Если первый операнд истинный,
// // И возвращает второй:
// alert( 1 && 0 ); // 0
// alert( 1 && 5 ); // 5

// // Если первый операнд ложный,
// // И возвращает его. Второй операнд игнорируется
// alert( null && 5 ); // null
// alert( 0 && "no matter what" ); // 0
// Можно передать несколько значений подряд. В таком случае возвратится первое «ложное» значение, на котором остановились вычисления.

// alert( 1 && 2 && null && 3 ); // null
// Когда все значения верны, возвращается последнее

// alert( 1 && 2 && 3 ); // 3
// Приоритет оператора && больше, чем у ||
// Приоритет оператора И && больше, чем ИЛИ ||, так что он выполняется раньше.

// Таким образом, код a && b || c && d по существу такой же, как если бы выражения && были в круглых скобках: (a && b) || (c && d).

// Как и оператор ИЛИ ||, И && иногда может заменять if.

// К примеру:

// let x = 1;

// (x > 0) && alert( 'Greater than zero!' );
// Действие в правой части && выполнится только в том случае, если до него дойдут вычисления. То есть, alert сработает, если в левой части (x > 0) будет true.

// Получился аналог:

// let x = 1;

// if (x > 0) {
//   alert( 'Greater than zero!' );
// }
// Однако, как правило, вариант с if лучше читается и воспринимается.

// Он более очевиден, поэтому лучше использовать его.

// ! (НЕ)
// Оператор НЕ представлен восклицательным знаком !.

// Синтаксис довольно прост:

// result = !value;
// Оператор принимает один аргумент и выполняет следующие действия:

// Сначала приводит аргумент к логическому типу true/false.
// Затем возвращает противоположное значение.
// Например:

// alert( !true ); // false
// alert( !0 ); // true
// В частности, двойное НЕ !! используют для преобразования значений к логическому типу:

// alert( !!"non-empty string" ); // true
// alert( !!null ); // false
// То есть первое НЕ преобразует значение в логическое значение и возвращает обратное, а второе НЕ снова инвертирует его. В конце мы имеем простое преобразование значения в логическое.

// Есть немного более подробный способ сделать то же самое – встроенная функция Boolean:

// alert( Boolean("non-empty string") ); // true
// alert( Boolean(null) ); // false
// Приоритет НЕ ! является наивысшим из всех логических операторов, поэтому он всегда выполняется первым, перед && или ||.




//https://learn.javascript.ru/nullish-coalescing-operator
// Оператор нулевого слияния ?? — это быстрый способ выбрать первое «определённое» значение из списка.

// Используется для присвоения переменным значений по умолчанию:

// // будет height=100, если переменная height равна null или undefined
// height = height ?? 100;
// Оператор ?? имеет очень низкий приоритет, лишь немного выше, чем у ? и =, поэтому при использовании его в выражении, скорее всего, потребуются скобки.

// Запрещено использовать вместе с || или && без явно указанного приоритета, то есть без скобок.
