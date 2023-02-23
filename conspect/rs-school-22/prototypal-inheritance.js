

/*

_proto_ is a property of a specific OBJECT. This property contains a reference to an object
of its base class, that is, to the prototype of this object.

prototype is a property of the CONSTRUCTOR function.
This property contains a reference to an object that is the prototype of all objects of this class.

var animal = {
    eats: true
};
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype = animal;
var rabbit = new Rabbit("Кроль"); //  rabbit.__proto__ == animal
// alert( rabbit.eats ); // true

Rabbit.prototype  // => animal // => {eats: true}
rabbit.__proto__  // => animal // => {eats: true}

(0).__proto__ === Number.prototype &&
false.__proto__ === Boolean.prototype &&
"string".__proto__ === String.prototype &&
(new Date).__proto__ === Date.prototype &&
(function(){}/* new Function).__proto__ === Function.prototype

All data types are inherited from Object, which means that for example:
Number.prototype.__proto__ === Object.prototype
And finally:
Object.prototype.__proto__ === null

============================================

https://javascript.info/prototype-methods


Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]]
 and optional property descriptors.

let animal = {
  eats: true
};

// create a new object with animal as a prototype
let rabbit = Object.create(animal); // same as {__proto__: animal}

rabbit.__proto__; // {eats: true}
alert(rabbit.eats); // true
alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}



We can provide additional properties to the new object there, like this:
let animal = {
  eats: true
};

let rabbit = Object.create(animal, {
  jumps: {
    value: true
  }
});

alert(rabbit.jumps); // true



We can use Object.create to perform an object cloning more powerful than copying properties in for..in:
let clone = Object.create(
  Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)
);
This call makes a truly exact copy of obj, including all properties: enumerable and non-enumerable, data properties and setters/getters – everything, and with the right [[Prototype]].

=================================================

class Base {
    constructor (val) {
        this.val = val;
    }
    plus(...n) {
      this.val = n.reduce( (sum, item) => sum + item, this.val);
      return this.val;
    }
    get() {
        return this.val;
    }
}

=========================================

// rewriting class User in pure functions

// 1. Create constructor function
function User(name) {
  this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it

// 2. Add the method to prototype
User.prototype.sayHi = function() {
  alert(this.name);
};

// Usage:
let user = new User("John");
user.sayHi();


======================================

Another example:

//StringBuilder in ES5 style
function StringBuilder (val) {
    Object.assign(this, new Base(val || ''));
}
StringBuilder.prototype = Object.create(Base.prototype);
// StringBuilder.prototype.constructor = StringBuilder;  //=> this line no need here!!!!!

StringBuilder.prototype.multiply = function(n) {
  this.val = this.val.repeat(n);
  return this.val;
}

let strBuilder = new StringBuilder('Hello');
console.log(strBuilder.get());
console.log(strBuilder.multiply(3));







===================================================
// Всё верно, пару дополнений, для лучшего понимания:
// foo.prototype - не какой-то особый объект-прототип. Это самый обычный объект, который автоматически 
//идёт бонусом при объявлении function. Не важно, конструктор это или нет, у любой функции (кроме стрелочной) 
//есть это свойство, и там лежит почти пустой объект (там ссылка есть на foo в поле constructor).
// Object.create(foo.prototype) вызывается неявно при вызове new foo(). Опять же, не имеет значения, 
//конструктор это, или нет, js этих ваших абстракций не понимает.
// Таким образом, любой объект, созданный через new foo(), получит в своё свойство __proto__ ссылку 
//на foo.prototype, и при отсутствии искомого свойства в нём интерпретатор пойдёт по 
//ссылке __proto__ и будет искать в foo.prototype. Таким образом и получается пресловутое 
//прототипное наследование. Любое изменение свойств в foo.prototype будет доступно всем объектам, 
//созданным через new foo(), что и требовалось.


// Свойство __proto__

// Абсолютно любой объект в JavaScript имеет свойство __proto__. Это скрытое системное свойство, 
//и не во всех реализациях языка оно доступно пользователю.

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


// Свойство prototype
// А чем же тогда является свойство prototype? Это обычное свойство, ничем не
// отличающиеся от любых других свойств. За исключением двух особенностей:
// 1) Функции в JavaScript имеют свойство prototype. Оно по умолчанию является объектом с
//единственным свойством constructor, которое ссылается на саму функцию.
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

// Функцией-классом я называю функцию, к которой впоследствии ожидается применение оператора new.
//Такие функции принято именовать с заглавной буквы.






*/

