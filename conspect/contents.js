//сборная солянка
//Контекст this в JS. Методи функцій bind / call / apply — навіщо і в чому різниця?
import { thisContext } from "./this"; // контекст this в JS. Методи функцій bind / call / apply — навіщо і в чому різниця?
//известности из мира JS
import { starsJS } from "./stars-js"; // известности из мира JS
//методы http запросов
import { httpMethods } from "./http-methods"; //  методы http запросов
// версии http протокола
import { httpVersions } from "./http-versions"; // версии http протокола
// коды состояний ответа http
import { httpState } from "./http-code-state";  // коды состояний ответа http
// cors, что это и как его избежать
import { cors } from "./cors"; // cors, что это и как его избежать
// cookies, что это и какой макс размер
import { cookie } from "./cookies"; // cookies, что это и какой макс размер
// use strict, что это такое
import { useStrict } from "./use-strict"; // use strict, что это такое 
// JS front-end VC JS back-end. Чим JS відрізняється під час роботи на front-end і back-end?
import { frontVcBack } from "./front-vc-back"; //Чим JS відрізняється під час роботи на front-end і back-end?
// deep clone для об’єкта. Напишіть deep clone для об’єкта. Що означає глибока (deep) та поверхнева (shallow) копія об’єкта? Як зробити кожну з них?
import { deepCloneObj } from "./deep-clone-obj"; // Напишіть deep clone для об’єкта. Що означає глибока (deep) та поверхнева (shallow) копія об’єкта? Як зробити кожну з них?
//способи копіювання простого об’єкта. Розкажіть, які є способи копіювання простого об’єкта типу obj = {a: 1, b: 2, c: 3}
import { copyObj } from "./copy-obj"; //Розкажіть, які є способи копіювання простого об’єкта типу obj = {a: 1, b: 2, c: 3}
//Що таке статична і динамічна типізації (типизация)?
import { typingStaticDynamic } from "./typing-static-dynamic"; //Що таке статична і динамічна типізації (типизация)?
//КЛИЕНТ-СЕРВЕР. Як клієнт взаємодіє із сервером?
import { clientServer } from "./client-server"; //Як клієнт взаємодіє із сервером?
//REST. Що таке REST?
import { rest } from "./rest"; //Що таке REST?
//мутабельність / іммутабельність. Поясніть поняття мутабельність / іммутабельність? Які типи є мутабельними й навпаки?
import { immutable } from "./immutable"; //Поясніть поняття мутабельність / іммутабельність? Які типи є мутабельними й навпаки?
//Поднятие const, let и var. //Порівняйте ключові слова var, let, const.
import { hoistingConstLetVar } from "./hoisting-const-let-var"; //Поднятие const, let и var. //Порівняйте ключові слова var, let, const.
//hoisting. Поднятие функции
import { hoistingFunc } from "./hoisting-func"; // Поднятие функции
// Стрелочные функции 
import { arrowFunc } from "./arrow-func"; // Стрелочные функции 
//ДЕБАГГЕР. Як шукати помилки в коді? Чи використовуєте дебагер?
import { debag } from "./debag"; //Як шукати помилки в коді? Чи використовуєте дебагер?
//обратный вызов (callbacks)
import { callback } from "./callback"; //обратный вызов (callbacks)
//замыкание (closures)
import { closure } from "./closure";//!!!!(досмотреть практические примеры) замыкание (closures)
//анонимная функция
import { anonymFunc } from "./anonymous-func"; //Что такое анонимная функция
//Функция высшего порядка
import { higherOrderFunc } from "./higher-order-func";//Функция высшего порядка
//Promises vs Async / Await
import { promisesVsAsyncAwait } from "./promises-vs-async-await"; //!!!!!!!!  Promises vs Async / Await
//делегирование событий
import { delegation } from "./delegation"; //делегирование событий
//host obj vc native obj. В чем разница между host и native объектами
import { hostNativeObj } from "./host-native-obj"; //В чем разница между host и native объектами
//Каррирование
import { currying } from "./currying"; //Каррирование
//Классы
import { classItem } from "./class"; //Классы
//Статические методы Классов
import { staticItem } from "./static"; //Статические методы Классов
//Truthy / Falsy
import { truthyFalsy } from "./truthy-falsy"; //Truthy / Falsy
//Anamorphisms and Catamorphisms
import { anamorphCatamorph } from "./anamorph-catamorph"; // Anamorphisms and Catamorphisms
//Event Loop
import { eventLoop } from "./event-loop"; // Event Loop
//Event propagation. Что такое Event propagation
import { eventPropagation } from "./event-propagation";//Что такое Event propagation
//Можно ли кэшировать Post запрос?
import { cachingPost } from "./caching-post"; //Можно ли кэшировать Post запрос?
// for..in отличия от  for..of
import { forinForof } from "./forin-forof";// for..in отличия от  for..of

//JS core
//типы данных JS. Які існують типи даних у JS? типы данных.
import { typesData } from "./types-data"; //Які існують типи даних у JS? типы данных.
//isArray - проверка на массив. Як перевірити, чи об’єкт є масивом?
import { isArrayItem } from "./is-array"; // проверка на массив. Як перевірити, чи об’єкт є масивом?
//isFinite - Як перевірити, чи число є скінченним? проверить на конечное число. Як перевірити (проверить), число на NaN?
import { isFiniteItem } from "./isfinite"; // Як перевірити, чи число є скінченним? проверить на конечное число. Як перевірити (проверить), число на NaN?
//numberIsnan Vc IsnanFunc. Чим відрізняється поведінка isNaN() та Number.isNaN()? чем отличается isNaN() и Number.isNaN()
import { numberIsnanVcIsnanFunc } from "./number-isnan-vc-isnan-func"; // Чим відрізняється поведінка isNaN() та Number.isNaN()? чем отличается isNaN() и Number.isNaN()
//Область видимости. Що таке область видимості? 
import { scope } from "./scope"; // Що таке область видимості? Область видимости.
//Деструктуризация. Що таке деструктуризація? Что такое деструктуризация?
import { destructuring } from "./destructuring"; //Що таке деструктуризація? Что такое деструктуризация?
//setTimeout і setInterval. Для чого призначені методи setTimeout і setInterval?
import { setTimeoutInterval } from "./settimeout-setinterval"; //Для чого призначені методи setTimeout і setInterval?
//callBack Vc Promises Vs AsyncAwait. Порівняйте підходи роботи з асинхронним кодом: сallbacks vs promises vs async/await.
import { callBackVcPromisesVsAsyncAwait } from "./callback-promises-asyncawait"; //Порівняйте підходи роботи з асинхронним кодом: сallbacks vs promises vs async/await.
//Edit Prototype. Чи можна записувати нові властивості / функції в прототипи стандартних класів (Array, Object тощо)? Чому ні? У яких випадках це робити можна? Як убезпечити себе, якщо потрібно розширити прототип?
import { editPrototype } from "./edit-prototype"; //Чи можна записувати нові властивості / функції в прототипи стандартних класів (Array, Object тощо)? Чому ні? У яких випадках це робити можна? Як убезпечити себе, якщо потрібно розширити прототип?
//ARRAY Methods.  Назвіть методи масивів, які пам’ятаєте, і скажіть, для чого вони потрібні. методы массивов
import { arrMethods } from "./arr-methods"; //Назвіть методи масивів, які пам’ятаєте, і скажіть, для чого вони потрібні. методы массивов
//iterate Array Methods. Які перебираючі методи масиву знаєте? У чому їхня відмінність? перебирающие методы массивов
import { iteratArrMethods } from "./iterat-arr-methods"; //Які перебираючі методи масиву знаєте? У чому їхня відмінність? перебирающие методы массивов
//ОПЕРАТОРЫ. Як працюють оператори присвоєння / порівняння / рядкові / арифметичні / бітові тощо?
import { operators } from "./operators"; //Як працюють оператори присвоєння / порівняння / рядкові / арифметичні / бітові тощо?
//Map і Set. Опишіть призначення і принципи роботи з колекціями Map і Set.
import { mapSet } from "./map-set"; //Опишіть призначення і принципи роботи з колекціями Map і Set.

//Функции
//Чистые функции
import { pureFunc } from "./pure-func"; // Чистые функции
//function declaration vc function expression).Яка різниця між декларацією функції (function declaration) та функціональним виразом (function expression)?
import { funcDeclaration } from "./func-declarations"; //Яка різниця між декларацією функції (function declaration) та функціональним виразом (function expression)?
//IIFE. Що таке і для чого використовують IIFE (Immediately Invoked Function Expression)?
import { iife } from "./iife"; //Що таке і для чого використовують IIFE (Immediately Invoked Function Expression)?
//__proto__ отличия от prototype
import { protoVcPrototype } from "./proto-vc-prototype"; //__proto__ отличия от prototype
//Рекурсия. Що таке рекурсія? рекурсия
import { recursion } from "./recursion"; //Що таке рекурсія? рекурсия
//Що таке втрата контексту, коли відбувається і як їй запобігти?
import { thisLoss } from "./this-loss"; //Що таке втрата контексту, коли відбувається і як їй запобігти?

//Front-end
//DOM. Що таке DOM?
import { dom } from "./dom"; //Що таке DOM?
//defer i async. Порівняйте атрибути підключення скрипту async і defer в HTML-документі.
import { deferAsync } from "./defer-async"; //Порівняйте атрибути підключення скрипту async і defer в HTML-документі.
// DOM и таблицы
import { domTable } from "./dom-table"; // DOM и таблицы
//innerHTML vc innerText. Яка різниця між властивостями HTML-елементів innerHTML і innerText?
import { innerHtmlInnerText } from "./innerhtml-innertext"; //Яка різниця між властивостями HTML-елементів innerHTML і innerText?
//prevent default. Як зупинити дефолтну обробку події?
import { preventDefaultItem } from "./prevent-default"; //Як зупинити дефолтну обробку події?
//THIS in event handler. Чому дорівнює this в обробнику подій (event handler)?
import { thisAtHandler } from "./this-at-handler"; //Чому дорівнює this в обробнику подій (event handler)?
//LocalStorage і SessionStorage. Що таке LocalStorage і SessionStorage? Який максимальний розмір LocalStorage?
import { localSessionStorage } from "./local-session-storage";// Що таке LocalStorage і SessionStorage? Який максимальний розмір LocalStorage?
//ВЫСОТА БЛОКА в рамках документа. Як отримати висоту блоку? Його положення щодо меж документа?
import { offsetHeightLeftTop } from "./offset-height-left-top"; //Як отримати висоту блоку? Його положення щодо меж документа?
//WEBPACK. Що таке webpack?
import { webpack } from "./webpack"; //Що таке webpack?
//dev-збірка vc prod. Чим відрізняється dev-збірка від prod?
import { devProd } from "./dev-prod"; //Чим відрізняється dev-збірка від prod?
//DOMContentLoaded
import { DOMContentLoaded } from "./dom-conten-loaded";

// DRY   KISS  YAGNI  SOLID  SLAP
import { dry } from "./dry"; // DRY принцип
import { kissYagni } from "./kiss-yagni"; //  KISS и YAGNI принципы
import { slap } from "./slap"; //SLAP принцип
import { solid } from "./solid.js"; // SOLID принцип
import { oop } from "./oop"; //OOP

// CSS
//https://chm.org.ua/css-interview/

// БЭМ как способ изоляции
//https://ru.bem.info/methodology/quick-start/

//пагинация

//REACT
//CLASS COMPONENTS. Чи працювали з класовими компонентами? У чому їхня особливість?
import { reactClassComponent } from "./react-class-component"; //Чи працювали з класовими компонентами? У чому їхня особливість?
//STATE VC PROPS. Які дані краще зберігати в стані компонента, а які передавати через пропси? Наведіть приклад.
import { stateProps } from "./state-props"; //Які дані краще зберігати в стані компонента, а які передавати через пропси? Наведіть приклад.
//HOOKS. Чи ознайомлені з хуками? У чому їхні переваги? Чи доводилося робити свої і з якою метою?
import { hooks } from "./hooks"; //Чи ознайомлені з хуками? У чому їхні переваги? Чи доводилося робити свої і з якою метою?
//fragment VC portal. Чи ознайомлені з фрагментами та порталами? Навіщо вони потрібні?
import { fragmentPortal } from "./fragment-portal"; //Чи ознайомлені з фрагментами та порталами? Навіщо вони потрібні?
//REFS. Коли й для чого використовують рефи?
import { reactRefs } from "./react-refs"; //Коли й для чого використовують рефи?
//component Life cycle. Які ви знаєте методи життєвого циклу компонента?
import { componentLifecycle } from "./component-lifecycle"; //Які ви знаєте методи життєвого циклу компонента?
//Life cycle Ajax. В якому методі життєвого циклу компонента краще робити запити на сервер? Чому?
import { lifecycleAjax } from "./lifecycle-ajax"; //В якому методі життєвого циклу компонента краще робити запити на сервер? Чому?
//Life cycle Handler. В якому методі життєвого циклу компонента краще робити підписку і відписку від лістенера? Чому? Навіщо відписуватися?
import { lifecycleHandler } from "./lifecycle-handler"; //В якому методі життєвого циклу компонента краще робити підписку і відписку від лістенера? Чому? Навіщо відписуватися?
//Context REACT. Чи був досвід роботи з контекстом? Коли його варто використовувати?
import { reactContext } from "./react-context"; //Чи був досвід роботи з контекстом? Коли його варто використовувати?
//Pure Component. У чому особливість PureComponent?
import { pureComponent } from "./pure-component"; //У чому особливість PureComponent?
//memoized selectors. Чи працював з мемоізованими селекторами (memoized selectors)? Для чого їх використовують і який принцип роботи?
import { memoSelectors } from "./memo-selectors"; //Чи працював з мемоізованими селекторами (memoized selectors)? Для чого їх використовують і який принцип роботи?
//benefits React. У чому бачите переваги бібліотеки React?
import { benefitsReact } from "./benefits-react"; //У чому бачите переваги бібліотеки React?
//Virtual AND Shadow Dom. Чому бібліотека React швидка? Що таке Virtual DOM і Shadow DOM?
import { virtualShadowDom } from "./virtual-shadow-dom"; //Чому бібліотека React швидка? Що таке Virtual DOM і Shadow DOM?
//React Keys. Навіщо в списках ключі? Чи можна робити ключами індекси елементів масиву? Коли це виправдано?
import { reactKeys } from "./react-keys"; //Навіщо в списках ключі? Чи можна робити ключами індекси елементів масиву? Коли це виправдано?
//REDUX. В чому основна ідея Redux?
import { redux } from "./redux"; //В чому основна ідея Redux?
//CSS React. Робота зі стилями в React.
import { reactCss } from "./react-css"; //Робота зі стилями в React. CSS React.
//Library VC Framework. React — це бібліотека чи фреймворк? Яка різниця між цими двома поняттями.
import { libraryFramework } from "./library-framework"; //React — це бібліотека чи фреймворк? Яка різниця між цими двома поняттями.
//Jquery React. Чи можна використовувати jQuery разом з React? Чому так / ні?
import { jqueryReact } from "./jquery-react"; //Чи можна використовувати jQuery разом з React? Чому так / ні?
//Codemod. Що таке codemod?
import { codemod } from "./codemode"; //Що таке codemod?

//Backend
//REPL. Що таке REPL?
import { repl } from "./repl"; //Що таке REPL?
//Middleware. Що таке middleware?
import { middleware } from "./middleware"; //Що таке middleware?
//token based authentication. Що таке token based authentication?
import { tokenBaseAauth } from "./token-based-auth";





