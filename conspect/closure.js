export const closure = 'https://frontend-stuff.com/blog/javascript-cheatsheet/#%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2%D1%8B-%D0%B8-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D0%B5'


//https://learn.javascript.ru/closure#iife

//замыкание (closures): создаются всякий раз, когда к переменной, определенной вне текущей области, осуществляется доступ из внутренней области - это дает нам доступ к области внешней функции из внутренней функции;
//чтобы использовать замыкание, просто определи функцию внутри другой функции;

//example
function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      alert(name); // use variable declared in the parent function
    }
    displayName();
}
init();





// что выведет этот код???????
var f = function() {
  console.log(1);
}

var execute = function(f) {
  setTimeout(f, 1000);
}

execute(f); // что выведет в консоль и почему

f = function() {
  console.log(2);
}








