export const thisContext = 'this at JS'

// https://learn.javascript.ru/object-methods

// https://learn.javascript.ru/bind






/*

https://wp-kama.ru/note/this-in-js

this — это ключевое слово в JavaScript которое содержит в себе объект (контекст) выполняемого кода.

Мне кажется что проще всего представить что this — это уникальная переменная, которая хранит в себе контекст исполняемого кода.
И наоборот — контекст — это значение ключевого слова this.

this имеет различные значения в зависимости от того, где используется:
Сама по себе this относится к глобальному объекту (window).
В методе this относится к родительскому объекту.
В функции this относится к глобальному объекту.
В функции в 'strict mode' this = undefined.
В стрелочной функции this относится к контексту где функция была создана.
В событии this ссылается на элемент запустивший событие.

Контекст — это всегда значение ключевого слова this, которое является ссылкой на объект, который
 запустил метод (функцию). Контекст — это объект "владеющий" исполняемым кодом. А this всегда ссылаться на объект (контекст)
 запустивший функцию.

Область видимости (scope) и Контекст
Кроме контекста нужно еще понимать что такое область видимости. Эти понятия часто путают. Называя одно другим. 
Однако контекст и область видимости это разные вещи.

Каждый вызов функции имеет как область видимости, так и контекст, связанный с ней. Область видимости
основана на том где функция вызывается (какие переменные ей доступны), а контекст основан на том, кем функция
вызывается (каким объектом). Другими словами, область видимости относится к доступу функции к переменным при ее
 вызове и является уникальной для каждого вызова. Контекст - это всегда значение ключевого слова this, которое
  является ссылкой на объект, "владеющий" текущим исполняемым кодом.



Итого про this
Значение this устанавливается в зависимости от того, как вызвана функция:

При вызове функции в качестве метода, контекстом будет вызываемый объект:

obj.func(...)    // this = obj
obj["func"](...) // this = obj
При обычном вызове, контекстом будет глобальный объект она будет вызвана без контекста:

func(...) // this = window (ES3) / undefined (ES5 - 'use strict')

При использовании ключевого слова new, создается новый чистый контекст.
new func() // this = {} (новый объект)
*/







function hello() {
    console.log('Hello', this)
}

hello() // Контекст обозначается ключевым словом this, тут он ссылается на глобальный объект Window
hello() // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
window.hello // указывает на тот же самый глобальный объект Window. {window: Window, self: Window, document: document, name: '', location: Location, …}
            // this указывает на тот объект который стоит слева от "точки" 
            // this указывает на тот объект, в контексте которого он был вызван

const person = {
    name: 'Kurt',
    age: 27,
    sayHello: hello,
    sayHelloWindow: hello.bind(window), // метод bind привязавает нужный контекст к ф-ции
    sayHelloDocument: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`) //это тоже самое что и запись ниже
        //console.log(`Name is ${person.name}`)
        
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}


person.sayHello()   // Hello {name: 'Kurt', age: 27, sayHello: ƒ}
                    // this указывает на тот объект который стоит слева от "точки" 
                    // this указывает на тот объект, в контексте которого он был вызван

person.sayHelloWindow()  // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

this === window // true. На самом верхнем уровне this указывает на глобальный объект Window

person.sayHelloDocument()

person.logInfo()

const lena = {
    name: 'Elena',
    age: 23
}

person.logInfo.bind(lena)()  // метод bind возвращает новую ф-цию, которая уже привязала к себе новый контекст, 
                            // поэтому ее можно сразу вызвать добавив "()"


const fnLenaInfolog = person.logInfo.bind(lena, 'Frontend', '8-999-6656-4333')
fnLenaInfolog()

person.logInfo.call(lena, 'Frontend', '8-999-6656-4333') // метод call сразу вызывает заданную ф-цию logInfo, поэтому "()" добавлять для него не надо 

person.logInfo.apply(lena, ['Frontend', '8-999-6656-4333']) // метод apply отличается от call только способом передачи параметров для ф-ции

//==============================


//пример добавления метода к прототипам Array
const array = [1,2,3,4,5]

function multBy(arr, n) {
    return arr.map(function(i) {
        return i * n
    })
}
console.log(multBy(array, 5))


Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}

console.log(array.multBy(3))




import { contents } from "./contents"
