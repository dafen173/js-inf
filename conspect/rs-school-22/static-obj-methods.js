// https://javascript.info/static-properties-methods

/*
Static properties and methods
We can assign a method to the class as a whole, but not to any particular object of it.
Such methods are called static.

In a class declaration, they are prepended by static keyword, like this:
class User {
  static staticMethod() {
    alert(this === User);
  }
}
User.staticMethod(); // true


That actually does the same as assigning it as a property directly:
class User { }

User.staticMethod = function() {
  alert(this === User);
};

User.staticMethod(); // true



Static properties and methods are inherited.

For class B extends A the prototype of the class B itself points to A: B.[[Prototype]] = A.
So if a field is not found in B, the search continues in A.


*/


