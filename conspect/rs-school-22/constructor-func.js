/*

https://javascript.info/constructor-new


Constructor, operator "new"
The regular {...} syntax allows us to create one object. But often we need to create many
similar objects, like multiple users or menu items and so on.

That can be done using constructor functions and the "new" operator.

Constructor function
Constructor functions technically are regular functions. There are two conventions though:

They are named with capital letter first.
They should be executed only with "new" operator.


For instance:

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");
alert(user.name); // Jack
alert(user.isAdmin); // false

When a function is executed with new, it does the following steps:
A new empty object is created and assigned to this.
The function body executes. Usually it modifies this, adds new properties to it.
The value of this is returned.


In other words, new User(...) does something like:

function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}


the main purpose of constructors – to implement reusable object creation code.


Usually, constructors do not have a return statement.
Their task is to write all necessary stuff into this, and it automatically becomes the result.

But if there is a return statement, then the rule is simple:

If return is called with an object, then the object is returned instead of this.
If return is called with a primitive, it’s ignored.
In other words, return with an object returns that object, in all other cases this is returned.

For instance, here return overrides this by returning an object:

function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- returns this object
}

alert( new BigUser().name );  // Godzilla, got that object

And here’s an example with an empty return (or we could place a primitive after it, doesn’t matter):
function SmallUser() {
  this.name = "John";
  return; // <-- returns this
}

alert( new SmallUser().name );  // John
Usually constructors don’t have a return statement.
Here we mention the special behavior with returning objects mainly for the sake of completeness.


Methods in constructor
Using constructor functions to create objects gives a great deal of flexibility.
The constructor function may have parameters that define how to construct the object,
and what to put in it.

Of course, we can add to this not only properties, but methods as well.

For instance, new User(name) below creates an object with the given name and the method sayHi:

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John


// john = {
//    name: "John",
//    sayHi: function() { ... }
// }


Summary
Constructor functions or, briefly, constructors, are regular functions,
but there’s a common agreement to name them with capital letter first.
Constructor functions should only be called using new.
Such a call implies a creation of empty this at the start and returning the populated one at the end.
We can use constructor functions to make multiple similar objects.

JavaScript provides constructor functions for many built-in language objects:
like Date for dates, Set for sets and others.





*/
