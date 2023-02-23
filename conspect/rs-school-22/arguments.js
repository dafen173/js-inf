// https://javascript.info/rest-parameters-spread


/*
The “arguments” variable is a special array-like object that contains all arguments by their index.

For instance:

function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );

  // it's iterable
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

In old times, rest parameters did not exist in the language, and using arguments was
the only way to get all arguments of the function. And it still works, we can find it
in the old code.

But the downside is that although arguments is both array-like and iterable, it’s not an array.
It does not support array methods, so we can’t call arguments.map(...) for example.

Also, it always contains all arguments. We can’t capture them partially,
like we did with rest parameters.

So when we need these features, then rest parameters are preferred.

Arrow functions do not have "arguments"
If we access the arguments object from an arrow function,
it takes them from the outer “normal” function.

Here’s an example:

function f() {
  let showArg = () => alert(arguments[0]);
  showArg();
}

f(1); // 1
As we remember, arrow functions don’t have their own this.
Now we know they don’t have the special arguments object either.

*/
