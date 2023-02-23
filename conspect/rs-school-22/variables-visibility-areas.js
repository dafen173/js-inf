


/*

All variables and constants in JavaScript have a place within which they operate.
All variables and constants that are declared outside of functions are global.
They can be accessed from anywhere in the code.

JavaScript uses curly braces { } to define local scope, which creates a block of code.
This block of code may be unnamed, may be named, such as a function,
or may represent a conditional or looping constructions.
Variables and constants defined inside a function are only visible (that is, can be used)
inside that function.
With variables that are defined in unnamed code blocks, as well as in loops and conditional constructs,
the situation is a little more complicated.

A variable declared with var can be used outside of a block.
Let and Const variables defined inside a code block can only be used inside that code block.


// function bar(){
//     foo = "25";
// }
// bar();
// console.log(foo);   // 25

===================================

// var z = 89;
// function print(){
//     var z = 10;
//     console.log(z); // 10
// }
// print(); // 10

====================================
let z = 89;
function print(){
    let z = 10;
     console.log(z); // 10
 }
 print(); // Uncaught SyntaxError: Identifier 'z' has already been declared




*/