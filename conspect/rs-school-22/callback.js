// https://www.w3schools.com/js/js_callback.asp


/*

A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished

Function Sequence
JavaScript functions are executed in the sequence they are called

Example:
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
myCalculator(5, 5, myDisplayer);

In the example above, myDisplayer is a called a callback function.
It is passed to myCalculator() as an argument.

Where callbacks really shine are in asynchronous functions,
where one function has to wait for another function (like waiting for a file to load).

==========================================


https://javascript.info/callbacks

At first glance, it looks like a viable approach to asynchronous coding. And indeed it is.
For one or maybe two nested calls it looks fine.
But for multiple asynchronous actions that follow one after another,
we’ll have code named as Callback Hell:

// loadScript('1.js', function(error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...
//     loadScript('2.js', function(error, script) {
//       if (error) {
//         handleError(error);
//       } else {
//         // ...
//         loadScript('3.js', function(error, script) {
//           if (error) {
//             handleError(error);
//           } else {
//             // ...и так далее, пока все скрипты не будут загружены (*)
//           }
//         });

//       }
//     })
//   }
// });


In the code above:

We load 1.js, then if there’s no error…
We load 2.js, then if there’s no error…
We load 3.js, then if there’s no error – do something else (*).

As calls become more nested, the code becomes deeper and increasingly more difficult to manage,
especially if we have real code instead of ... that may include more loops,
conditional statements and so on.

That’s sometimes called “callback hell” or “pyramid of doom.”
The “pyramid” of nested calls grows to the right with every asynchronous action.
Soon it spirals out of control. So this way of coding isn’t very good.

*/
