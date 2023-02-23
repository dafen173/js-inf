export const classItem = 'https://learn.javascript.ru/class'

//Класс: базовый синтаксис
// В объектно-ориентированном программировании класс – 
// это расширяемый шаблон кода для создания объектов, 
// который устанавливает в них начальные значения (свойства) 
// и реализацию поведения (методы).

// На практике нам часто надо создавать много объектов 
//одного вида, например пользователей, товары или что-то ещё.
// Как мы уже знаем из главы Конструкторы, создание объектов 
//через "new", с этим может помочь new function.

// Но в современном JavaScript есть и более продвинутая 
//конструкция «class», которая предоставляет новые возможности,
//полезные для объектно-ориентированного программирования.

// Базовый синтаксис выглядит так:
// class MyClass {
//   // методы класса
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   method3() { ... }
//   ...
// }


// Затем используйте вызов new MyClass() для создания 
//нового объекта со всеми перечисленными методами.

// При этом автоматически вызывается метод constructor(), 
//в нём мы можем инициализировать объект.
// Например:
class User {
  constructor(name) {
    this.name = name;
  
  sayHi() {
    alert(this.name);
  }
}
// Использование:
let user = new User("Иван");
user.sayHi();
// Когда вызывается new User("Иван"):
// Создаётся новый объект.
// constructor запускается с заданным аргументом и 
//сохраняет его в this.name.
// …Затем можно вызывать на объекте методы, такие как 
//user.sayHi().

//В JavaScript класс – это разновидность функции.


// Методы в классе не разделяются запятой
// Частая ошибка начинающих разработчиков – ставить запятую 
//между методами класса, что приводит к синтаксической ошибке.
// Синтаксис классов отличается от литералов объектов, 
//не путайте их. Внутри классов запятые не требуются.


import { contents } from "./contents";
