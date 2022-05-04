//сборная солянка
import { thisContext } from "./this"; // контекст this в JS. Методи функцій bind / call / apply — навіщо і в чому різниця?
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
import { closure } from "./closure";//!!!!!!!!      замыкание (closures)
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
import { cachingPost } from "./caching-post"; //Можно ли кэшировать Post запрос?
import { forinForof } from "./forin-forof";// for..in отличия от  for..of



//JS core
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


//Функции
import { pureFunc } from "./pure-func"; // Чистые функции
import { funcDeclaration } from "./func-declarations"; //Яка різниця між декларацією функції (function declaration) та функціональним виразом (function expression)?
import { iife } from "./iife"; //Що таке і для чого використовують IIFE (Immediately Invoked Function Expression)?
import { protoVcPrototype } from "./proto-vc-prototype"; //__proto__ отличия от prototype
import { recursion } from "./recursion"; //Що таке рекурсія? рекурсия
import { thisLoss } from "./this-loss"; //Що таке втрата контексту, коли відбувається і як їй запобігти?


//Front-end
import { dom } from "./dom"; //Що таке DOM?
import { deferAsync } from "./defer-async"; //Порівняйте атрибути підключення скрипту async і defer в HTML-документі.
import { domTable } from "./dom-table"; // DOM и таблицы
import { innerHtmlInnerText } from "./innerhtml-innertext"; //Яка різниця між властивостями HTML-елементів innerHTML і innerText?
import { preventDefaultItem } from "./prevent-default"; //Як зупинити дефолтну обробку події?
import { thisAtHandler } from "./this-at-handler"; //Чому дорівнює this в обробнику подій (event handler)?
import { localSessionStorage } from "./local-session-storage";// Що таке LocalStorage і SessionStorage? Який максимальний розмір LocalStorage?
import { offsetHeightLeftTop } from "./offset-height-left-top"; //Як отримати висоту блоку? Його положення щодо меж документа?
import { webpack } from "./webpack"; //Що таке webpack?
import { devProd } from "./dev-prod"; //Чим відрізняється dev-збірка від prod?




// DRY   KISS  YAGNI  SOLID  SLAP
import { dry } from "./dry"; // DRY принцип
import { kissYagni } from "./kiss-yagni"; //  KISS и YAGNI принципы
import { solid } from "./solid.js"; // SOLID принцип
import { slap } from "./slap"; //SLAP принцип



// CSS
// БЭМ как способ изоляции

//пагинация


//REACT
import { reactClassComponent } from "./react-class-component"; //Чи працювали з класовими компонентами? У чому їхня особливість?
import { stateProps } from "./state-props"; //Які дані краще зберігати в стані компонента, а які передавати через пропси? Наведіть приклад.
import { hooks } from "./hooks"; //Чи ознайомлені з хуками? У чому їхні переваги? Чи доводилося робити свої і з якою метою?
import { fragmentPortal } from "./fragment-portal"; //Чи ознайомлені з фрагментами та порталами? Навіщо вони потрібні?
import { reactRefs } from "./react-refs"; //Коли й для чого використовують рефи?
import { componentLifecycle } from "./component-lifecycle"; //Які ви знаєте методи життєвого циклу компонента?
import { lifecycleAjax } from "./lifecycle-ajax"; //В якому методі життєвого циклу компонента краще робити запити на сервер? Чому?
import { lifecycleHandler } from "./lifecycle-handler"; //В якому методі життєвого циклу компонента краще робити підписку і відписку від лістенера? Чому? Навіщо відписуватися?
import { reactContext } from "./react-context"; //Чи був досвід роботи з контекстом? Коли його варто використовувати?
import { pureComponent } from "./pure-component"; //У чому особливість PureComponent?










