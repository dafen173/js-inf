

/*


When a value is passed as a function parameter, it’s also called an argument.

In other words, to put these terms straight:

A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
An argument is the value that is passed to the function when it is called (it’s a call time term).
We declare functions listing their parameters, then call them passing arguments.

In the example below, one might say: "the function showMessage is declared with two parameters, then called with two arguments: from and "Hello"".


function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello   //  argument 'from' is passed by reference,
// argument 'Hello' is passed by value

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann



It is always easier to understand a function which gets parameters, 
works with them and returns a result than a function which gets no parameters, 
but modifies outer variables as a side effect.



let sum = (...valuesToAdd) => {
  //result: [ 1, 2, 3, 4, 5 ] //real array
  console.log(valuesToAdd);
  //result: 3
  console.log(valuesToAdd[2])

}

sum(1,2,3,4)
// => [1, 2, 3, 4]
// => 3

================================================

We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given








*/





