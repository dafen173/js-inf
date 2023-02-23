// https://javascript.info/promise-basics




/*

A “producing code” that does something and takes time. For instance, some code that loads the data over a network. That’s a “singer”.
A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result. These are the “fans”.
A promise is a special JavaScript object that links the “producing code” and the “consuming code” together.

// A JavaScript Promise object contains both the producing code and calls to the consuming code:


The constructor syntax for a promise object is:
let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});
The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result.

Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.

When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

resolve(value) — if the job is finished successfully, with result value.
reject(error) — if an error has occurred, error is the error object.
So to summarize: the executor runs automatically and attempts to perform a job. 
When it is finished with the attempt, it calls resolve if it was successful 
or reject if there was an error.


The promise object returned by the new Promise constructor has these internal properties:
state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.


A Promise object serves as a link between the executor (the “producing code” or “singer”) and the consuming functions (the “fans”), which will receive the result or error. Consuming functions can be registered (subscribed) using the methods .then and .catch.


then
The most important, fundamental one is .then.

The syntax is:

promise.then(
  function(result) { /* handle a successful result },
  function(error) { /* handle an error }
);
The first argument of .then is a function that runs when the promise is resolved and receives the result.

The second argument of .then is a function that runs when the promise is rejected 
and receives the error.


For instance, here’s a reaction to a successfully resolved promise:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);




catch
If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly the same:

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second
The call .catch(f) is a complete analog of .then(null, f), it’s just a shorthand.




Cleanup: finally
Just like there’s a finally clause in a regular try {...} catch {...}, there’s finally in promises.

The call .finally(f) is similar to .then(f, f) in the sense that f runs always, when the promise is settled: be it resolve or reject.

The idea of finally is to set up a handler for performing cleanup/finalizing after the previous operations are complete.

E.g. stopping loading indicators, closing no longer needed connections, etc.

Think of it as a party finisher. No matter was a party good or bad, how many friends were in it, we still need (or at least should) do a cleanup after it.

The code may look like this:

new Promise((resolve, reject) => {
  /* do something that takes time, and then call resolve or maybe reject.......
})
// runs when the promise is settled, doesn't matter successfully or not
.finally(() => stop loading indicator)
// so the loading indicator is always stopped before we go on
.then(result => show result, err => show error)
Please note that finally(f) isn’t exactly an alias of then(f,f) though.

There are important differences:

A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. That’s all right, as our task is usually to perform “general” finalizing procedures.

Please take a look at the example above: as you can see, the finally handler has no arguments, and the promise outcome is handled by the next handler.

A finally handler “passes through” the result or error to the next suitable handler.


==============================

Promises chaining
Let’s return to the problem mentioned in the chapter Introduction: callbacks: we have a sequence of asynchronous tasks to be performed one after another — for instance, loading scripts. How can we code it well?

Promises provide a couple of recipes to do that.

In this chapter we cover promise chaining.

It looks like this:

new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});
The idea is that the result is passed through the chain of .then handlers.

Here the flow is:

The initial promise resolves in 1 second (*),
Then the .then handler is called (**), which in turn creates a new promise (resolved with 2 value).
The next then (***) gets the result of the previous one, processes it (doubles) and passes it to the next handler.
…and so on.


If a .then (or catch/finally, doesn’t matter) handler returns a promise, the rest of the chain waits until it settles. When it does, its result (or error) is passed further.






*/

