
// add(5)(9)(-4)(1) -> 11. How to implement?

function curry(func) {
  return function curried(...args) {
    console.log(args);
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        console.log(args2);
        console.log(this);
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

function sum(a, b, c, d) {
  return a + b + c + d;
}

let curriedSum = curry(sum);
curriedSum(5)(9)(-4)(1);  // => 11




