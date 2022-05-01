export const protoVcPrototype = 'https://habr.com/ru/post/140810/'



// prototype - это свойство функции-КОНСТРУКТОРА. В этом свойстве находится ссылка на объект, являющийся прототипом всех объектов данного класса.
// Ссылку на этот объект конструктор пропишет в свойство _proto_ создаваемого объекта, когда вызовет функцию Object.create. Первым параметром ей как-раз передаётся ссылка на прототип создаваемого объекта.
// _proto_ - это свойство конкретного ОБЪЕКТА. В этом свойстве находится ссылка на объект его базового класса, т.е. на прототип этого объекта.

// Всё верно, пару дополнений, для лучшего понимания:
// foo.prototype - не какой-то особый объект-прототип. Это самый обычный объект, который автоматически идёт бонусом при объявлении function. Не важно, конструктор это или нет, у любой функции (кроме стрелочной) есть это свойство, и там лежит почти пустой объект (там ссылка есть на foo в поле constructor).
// Object.create(foo.prototype) вызывается неявно при вызове new foo(). Опять же, не имеет значения, конструктор это, или нет, js этих ваших абстракций не понимает.
// Таким образом, любой объект, созданный через new foo(), получит в своё свойство __proto__ ссылку на foo.prototype, и при отсутствии искомого свойства в нём интерпретатор пойдёт по ссылке __proto__ и будет искать в foo.prototype. Таким образом и получается пресловутое прототипное наследование. Любое изменение свойств в foo.prototype будет доступно всем объектам, созданным через new foo(), что и требовалось.



// Свойство __proto__

// Абсолютно любой объект в JavaScript имеет свойство __proto__. Это скрытое системное свойство, и не во всех реализациях языка оно доступно пользователю.
// При обращении к любому свойству объекта, оно в первую очередь ищется в самом объекте:
// var obj = {ownProperty: 1};
// console.log(obj.ownProperty);// 1
// Но если его там нет, поиск происходит в свойстве __proto__:
// obj.__proto__ = {propertyOfProto: 2};
// console.log(obj.propertyOfProto);// 2
// Если его нет и там, оно ищется дальше по цепочке:
// obj.__proto__.__proto__ = {propertyOfProtosProto: 3};
// console.log(obj.propertyOfProtosProto);// 3
// Эта цепочка называется цепочкой прототипов (prototype chain).



// __proto__ любого значения (кроме null и undefined) ссылается на prototype соответствующего ему типу данных:
// (0).__proto__ === Number.prototype &&
// false.__proto__ === Boolean.prototype &&
// "string".__proto__ === String.prototype &&
// (new Date).__proto__ === Date.prototype &&
// (function(){}/* new Function */).__proto__ === Function.prototype
// Все типы данных наследуются от Object, это означает что к примеру:
// Number.prototype.__proto__ === Object.prototype
// И наконец, завершение цепочки:
// Object.prototype.__proto__ === null

// Свойство prototype

// А чем же тогда является свойство prototype? Это обычное свойство, ничем не отличающиеся от любых других свойств. За исключением двух особенностей:

// 1) Функции в JavaScript имеют свойство prototype. Оно по умолчанию является объектом с единственным свойством constructor, которое ссылается на саму функцию.



// 2) Свойство prototype используется при создании новых объектов оператором new.

// Оператор new

// Этот оператор делает следущее:

// 1) Создает пустой объект:
// var instance = {};

// 2) Устанавливает __proto__ этому объекту ссылкой на prototype функции-класса:
// instance.__proto__ = FnClass.prototype;

// 3) Применяет функцию-класс к нашему новосозданному объекту:
// constructorReturns = FnClass.apply(instance, arguments);
// (т.е. исполняет функцию FnClass, передавая ей instance в качестве this и аргументы в виде массива arguments)

// 4) Возвращает экземпляр функции-класса, но если FnClass нам вернул обьект, тогда его:
// return constructorReturns instanceof Object ? constructorReturns : instance;

// Функцией-классом я называю функцию, к которой впоследствии ожидается применение оператора new. Такие функции принято именовать с заглавной буквы.




