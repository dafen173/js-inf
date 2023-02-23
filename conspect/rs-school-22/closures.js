

/*


Closures

a closure gives you access to an outer function's scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.

to use a closure, you just need to define a function inside another function;


A closure is a function that remembers its outer variables and can access them.


A closure is the combination of a function bundled together (enclosed) with references
to its lexical environment.


//example
function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      alert(name); // use variable declared in the parent function
    }
    displayName();
}
init();




*/
