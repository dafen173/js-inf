export const closureTest = ''



// var a = 10;
// function f1() { console.log(a); }
// function f2() {
//    var a = 20;
//    f1();
//    console.log(a)
// }
// f2();



// var a = 10;
// function f1() { console.log(a); }
// function f2() {
//   //function f1() { console.log(a); }
//    var a = 20;
//    f1();
// }
// f2();




// var a = 10;
// (function() {
//   //var a = 110;
//    function f1() { console.log(a); } // берет переменную а из внешнего лексического окружения
//    function f2() {
//       var a = 20;
//       f1();
//    }
//    f2();
// })(); //10



// var x = 10;
// (function() {
//    function f() { console.log(x); }
//    function g() {
//       var x = 20;
//       f();
//    }
//    g();
// }); // Nothing, не указан немедленный вызов этой ИФИ


// var a = 10;
// function f1() {
//    var a = 20;
//    return function() {
//       console.log(a);
//    }
// }
// var f2 = f1();
// f2(); //20



// var a = 10;
// function f1() {
//    return function() {
//       console.log(a);
//    }
// }
// var f2 = f1();
// f2(); //10


// var a = 10;
// function f1() {
//    return function() {
//       console.log(a);
//    }
//    var a = 20;
// }
// var f2 = f1();
// f2(); // undefined. т.к. поднимается только объявление переменной, 
//       //инициализация переменной НЕ поднимается!



// var a = 1;
// function f1() {
//    var b = 2;
//    function f2() { console.log(a, b); }
//    return f2;
// }
// var f2 = f1();
// var b = 3;
// function f3() {
//    a = 5;
//    f2();
// }
// f3(); // 5 2



// let name = "Вася";

// setTimeout(function() {
//   let name = "Петя";
//   function sayHi() {
//     alert(name);
//   } // где ф-ция определена, оттуда она и забирает данные из переменной 
//   sayHi();
// }, 1000); // Петя




// let name = "Вася";

// function sayHi() {
//   alert(name);
// } // где ф-ция определена, оттуда она и забирает данные из переменной 

// setTimeout(function() {
//   let name = "Петя";
//   sayHi();
// }, 1000); // Вася







