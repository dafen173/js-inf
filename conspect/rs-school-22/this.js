


/*

this has different meanings depending on where it is used:
By itself, this refers to the global object (window).
In a method, this refers to the parent object.
In a function, this refers to the global object.
In a function in 'strict mode' this = undefined.
In an arrow function, this refers to the context where the function was created.
In an event, this refers to the element that fired the event.

When using the new keyword, a new pure context is created.
new func() // this = {} (new object)

The context is always the value of the this keyword, which is a reference to the object that
launched the method. A context is an object that "owns" the executable code.
And this always refers to the object (context) that launched the method.


Each function call has both a scope and a context associated with it. Scope is based on where the function is called (what variables are available to it), and context is based on who the function is called on (which object). In other words, scope refers to a function's access to variables when it is called, and is unique for each call. The context is always the value of the this keyword, which is a reference to the object that "owns" the currently executing code.

================================

https://javascript.info/reference-type


Reference type explained

A dynamically evaluated method call can lose this.

For instance:

let user = {
  name: "John",
  hi() { alert(this.name); },
  bye() { alert("Bye"); }
};

user.hi(); // works

// now let's call user.hi or user.bye depending on the name
(user.name == "John" ? user.hi : user.bye)(); // Error!



If we put these operations on separate lines, then this will be lost for sure:

let user = {
  name: "John",
  hi() { alert(this.name); }
};

// split getting and calling the method in two lines
let hi = user.hi;
hi(); // Error, because this is undefined
Here hi = user.hi puts the function into the variable, and then on the last line it is completely standalone, and so there’s no this.


To make user.hi() calls work, JavaScript uses a trick – the dot '.' returns not a function, but a value of the special Reference Type.

The Reference Type is a “specification type”. We can’t explicitly use it, but it is used internally by the language.

The value of Reference Type is a three-value combination (base, name, strict), where:

base is the object.
name is the property name.
strict is true if use strict is in effect.
The result of a property access user.hi is not a function, but a value of Reference Type. For user.hi in strict mode it is:

// Reference Type value
(user, "hi", true)
When parentheses () are called on the Reference Type, they receive the full information about the object and its method, and can set the right this (user in this case).

Reference type is a special “intermediary” internal type, with the purpose to pass information from dot . to calling parentheses ().

Any other operation like assignment hi = user.hi discards the reference type as a whole, takes the value of user.hi (a function) and passes it on. So any further operation “loses” this.

So, as the result, the value of this is only passed the right way if the function is called directly using a dot obj.method() or square brackets obj['method']() syntax (they do the same here). There are various ways to solve this problem such as func.bind().


===============================

https://javascript.info/bind#losing-this


When passing object methods as callbacks, for instance to setTimeout, there’s a known problem: "losing this".

let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Hello, undefined!
As we can see, the output shows not “John” as this.firstName, but undefined!

That’s because setTimeout got the function user.sayHi, separately from the object. The last line can be rewritten as:

let f = user.sayHi;
setTimeout(f, 1000); // lost user context

The method setTimeout in-browser is a little special: it sets this=window for the function call (for Node.js, this becomes the timer object, but doesn’t really matter here). So for this.firstName it tries to get window.firstName, which does not exist. In other similar cases, usually this just becomes undefined.

let user = {
  firstName: "John"
};

function func(phrase) {
  alert(phrase + ', ' + this.firstName);
}

// bind this to user
let funcUser = func.bind(user);

funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)



Now let’s try with an object method:

let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

let sayHi = user.sayHi.bind(user); // (*)

// can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// even if the value of user changes within 1 second
// sayHi uses the pre-bound value which is reference to the old user object
user = {
  sayHi() { alert("Another user in setTimeout!"); }
};

==========================================

person.logInfo.call(lena, 'Frontend', '8-999-6656-4333')
// the call method immediately calls the given logInfo function, so you don't need to add "()" for it


person.logInfo.apply(lena, ['Frontend', '8-999-6656-4333'])
// the apply method differs from call only in the way parameters are passed for the function, they are passed in an array





*/