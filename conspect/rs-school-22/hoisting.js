


/*

var has function scope;
var declarations are hoisted but not initialized.

console.log(name); // undefined
var name = "Alex";
The code above is equivalent to the code below due to hoisting.
var name;
console.log(name); // undefined
name = "Alex";


const and let have block scope

The difference between var / function declarations and let / const / class declarations is the initialization.
The former are initialized with the undefined value undefined. However, the second lexically declared variables remain uninitialized.
This means that a ReferenceError is thrown when you try to access them. They will only be initialized after the let / const / class statements have been defined. Everything before is called a temporary dead zone.

The temporary dead zone is not a syntactic location, but the time between the creation of the variable (scope) and initialization.
Reference to a variable in the code above the declaration is not an error if that code is not executed (like the body of a function or just dead code), but an error will be thrown if we request access to the variable before it is initialized.





*/