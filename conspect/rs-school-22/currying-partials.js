// https://javascript.info/currying-partials
/*
Currying is a process of functional programming where we can convert a
function with multiple arguments into sequences of nested functions -
it returns a new function that assumes the next nested argument.

Currying doesn’t call a function. It just transforms it.

We’ll create a helper function curry(f) that performs currying for a two-argument f.
In other words, curry(f) for two-argument f(a, b) translates it into a function that runs as f(a)(b):

function curry(f) { // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}
// usage
function sum(a, b) {
  return a + b;
}
let curriedSum = curry(sum);
alert( curriedSum(1)(2) ); // 3

===========================================
Partials

// let's look at an example
function curry(func) {
  return function curried(...args) {
    // console.log(args);
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        // console.log(args2);
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

function log(date, importance, message) {
  alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

let curriedLog = curry(log);
curriedLog(new Date())("DEBUG")("some debug");

// logNow will be the partial of log with fixed first argument
let logNow = curriedLog(new Date());

// use it
logNow("INFO", "message"); // [HH:mm] INFO message
// Now logNow is log with fixed first argument, in other words “partially applied function” or “partial” for short.
// We can go further and make a convenience function for current debug logs:

let debugNow = logNow("DEBUG");
debugNow("message"); // [HH:mm] DEBUG message

// So:
// We didn’t lose anything after currying: log is still callable normally.
// We can easily generate partial functions such as for today’s logs.



*/



