export const arrowFunc = 'https://frontend-stuff.com/blog/javascript-cheatsheet/'


// В чем разница между стрелочными функциями и обычными
// значение this (context): в обычной функции значение this не имеет ничего общего с классом, для которого this было определено; вместо этого this зависит от объекта, к которому this было вызвано; внутри стрелочной функции this значение всегда равно значению this из внешней функции;
// конструкторы (constructors): обычные функции могут легко создавать объекты, в то время как стрелочная функция не может использоваться в качестве конструктора;
// объект аргументов (arguments): это специальный объект, подобный массиву, содержащий список аргументов, с которыми функция была вызвана. Внутри стрелочной функции объект аргументов получает доступ к аргументам из внешней функции;
// неявный возврат (Implicit return): обычные функции используют оператор выражения возврата (return), также известен как явный возврат (explicit return) - в противном случае функция просто вернет undefined, в то время как со стрелочными функциями, если они содержат одно выражение и фигурные скобки функции отсутствуют, тогда выражение возвращается неявно (implicit).



//https://learn.javascript.ru/arrow-functions-basics
// Стрелочные функции очень удобны для простых действий, особенно для однострочных.
// Они бывают двух типов:
// Без фигурных скобок: (...args) => expression – правая сторона выражение: функция вычисляет его и возвращает результат. Скобки можно не ставить, если аргумент только один: n => n * 2.
// С фигурными скобками: (...args) => { body } – скобки позволяют нам писать несколько инструкций внутри функции, но при этом необходимо явно вызывать return, чтобы вернуть значение.

//https://learn.javascript.ru/arrow-functions
// Стрелочные функции:
// Не имеют this.
// Не имеют arguments.
// Не могут быть вызваны с new.
// (У них также нет super, но мы про это не говорили. Про это будет в главе Наследование классов).
// Всё это потому, что они предназначены для небольшого кода, который не имеет своего «контекста», выполняясь в текущем. И они отлично справляются с этой задачей!


