var a = 5

function f() {
    if(a) {
        console.log(a)
        var a = 10
    }
}

f() //undefined 
    //переменная а уже есть в области видимости ф-ции f но ее значение в блоке if равно undefined


//C:\Sublimegit\projects\me-dom-task\index.html


