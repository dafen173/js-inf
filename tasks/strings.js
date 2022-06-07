export const strings = ''




// //Строки с двойными кавычками не могут занимать несколько строк.


// str.indexOf
// Первый метод — str.indexOf(substr, pos).
// Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений.
// Например:
// let str = 'Widget with id';
// alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
// alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру
// alert( str.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)
// Необязательный второй аргумент позволяет начать поиск с определённой позиции.
// Например, первое вхождение "id" — на позиции 1. Для того, чтобы найти следующее, начнём поиск с позиции 2:
// let str = 'Widget with id';
// alert( str.indexOf('id', 2) ) // 12



// How can we extract "Pizza" from the string str = "Pizza Lover"?
// str.slice(0, 5)
// т.к. str.slice(start [, end])
//Возвращает часть строки от start до (не включая) end



// let str = "Mango Apple  Orange"
// str.split() // ["Mango Apple  Orange"]
//If split() is called on a string without an argument, it returns an array with 
//exactly one element that is the string itself.



// {} + 1 + 2
// //3

// [] + 1 + 2
// //'12'




