
export const thisContext = 'this at JS'

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


