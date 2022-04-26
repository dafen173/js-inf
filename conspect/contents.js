import { thisContext } from "./this"; // контекст this в JS 
import { starsJS } from "./stars-js"; // известности из мира JS
import { httpMethods } from "./http-methods"; //  методы http запросов
import { httpVersions } from "./http-versions"; // версии http протокола
import { httpState } from "./http-code-state";  // коды состояний ответа http
import { cors } from "./cors"; // cors, что это и как его избежать
import { cookie } from "./cookies"; // cookies, что это и какой макс размер
import { useStrict } from "./use-strict"; // use strict, что это такое 
import { frontVcBack } from "./front-vc-back"; // Чим JS відрізняється під час роботи на front-end і back-end?
import { deepCloneObj } from "./deep-clone-obj"; // Напишіть deep clone для об’єкта. Що означає глибока (deep) та поверхнева (shallow) копія об’єкта? Як зробити кожну з них?
import { copyObj } from "./copy-obj"; //Розкажіть, які є способи копіювання простого об’єкта типу obj = {a: 1, b: 2, c: 3}
import { typingStaticDynamic } from "./typing-static-dynamic"; //Що таке статична і динамічна типізації (типизация)?
import { clientServer } from "./client-server"; //Як клієнт взаємодіє із сервером?
import { rest } from "./rest"; //Що таке REST?
import { immutable } from "./immutable"; //Поясніть поняття мутабельність / іммутабельність? Які типи є мутабельними й навпаки?
import { hoistingConstLetVar } from "./hoisting-const-let-var"; //Поднятие const, let и var. //Порівняйте ключові слова var, let, const.
import { hoistingFunc } from "./hoisting-func"; // Поднятие функции
import { arrowFunc } from "./arrow-func"; // Стрелочные функции 
import { debag } from "./debag"; //!!!!!!!!  Як шукати помилки в коді? Чи використовуєте дебагер?
import { callback } from "./callback"; //обратный вызов (callbacks)
import { closure } from "./closure";//замыкание (closures)
import { anonymFunc } from "./anonymous-func"; //Что такое анонимная функция
import { higherOrderFunc } from "./higher-order-func";//Функция высшего порядка
import { promisesVsAsyncAwait } from "./promises-vs-async-await"; //!!!!!!!!  Promises vs Async / Await
import { delegation } from "./delegation"; //делегирование событий
import { hostNativeObj } from "./host-native-obj"; //В чем разница между host и native объектами
import { currying } from "./currying"; //Каррирование
import { classItem } from "./class"; //!!!!!!!!   Классы
import { staticItem } from "./static"; //Статические методы Классов
import { truthyFalsy } from "./truthy-falsy"; //Truthy / Falsy
import { anamorphCatamorph } from "./anamorph-catamorph"; // Anamorphisms and Catamorphisms
import { eventLoop } from "./event-loop"; // Event Loop
import { eventPropagation } from "./event-propagation";//Что такое Event propagation
import { typesData } from "./types-data"; //Які існують типи даних у JS? типы данных.
import { isArrayItem } from "./is-array"; // проверка на массив. Як перевірити, чи об’єкт є масивом?
import { isFiniteItem } from "./isfinite"; // Як перевірити, чи число є скінченним? проверить на конечное число. Як перевірити (проверить), число на NaN?
import { numberIsnanVcIsnanFunc } from "./number-isnan-vc-isnan-func"; // Чим відрізняється поведінка isNaN() та Number.isNaN()? чем отличается isNaN() и Number.isNaN()
import { scope } from "./scope"; // Що таке область видимості? Область видимости.
import { destructuring } from "./destructuring"; //!!!!!!!!! Що таке деструктуризація? Что такое деструктуризация?
import { setTimeoutInterval } from "./settimeout-setinterval"; //Для чого призначені методи setTimeout і setInterval?
import { callBackVcPromisesVsAsyncAwait } from "./callback-promises-asyncawait"; //Порівняйте підходи роботи з асинхронним кодом: сallbacks vs promises vs async/await.
import { editPrototype } from "./edit-prototype"; //Чи можна записувати нові властивості / функції в прототипи стандартних класів (Array, Object тощо)? Чому ні? У яких випадках це робити можна? Як убезпечити себе, якщо потрібно розширити прототип?
import { arrMethods } from "./arr-methods"; //Назвіть методи масивів, які пам’ятаєте, і скажіть, для чого вони потрібні. методы массивов
import { iteratArrMethods } from "./iterat-arr-methods"; //Які перебираючі методи масиву знаєте? У чому їхня відмінність? перебирающие методы массивов
import { operators } from "./operators"; //Як працюють оператори присвоєння / порівняння / рядкові / арифметичні / бітові тощо?
import { mapSet } from "./map-set"; //Опишіть призначення і принципи роботи з колекціями Map і Set.
import { pureFunc } from "./pure-func"; // Чистые функции
import { funcDeclaration } from "./func-declarations"; //Яка різниця між декларацією функції (function declaration) та функціональним виразом (function expression)?
import { iife } from "./iife"; //Що таке і для чого використовують IIFE (Immediately Invoked Function Expression)?










