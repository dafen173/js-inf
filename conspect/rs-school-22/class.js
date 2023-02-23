// https://javascript.info/class



/*

In object-oriented programming, a class is an extensible code template for creating objects
that sets in them initial values (properties) and implementation behaviors (methods).

The basic syntax is:

class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}


Then use new MyClass() to create a new object with all the listed methods.

The constructor() method is called automatically by new, so we can initialize the object there.

For example:

class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

// Usage:
let user = new User("John");
user.sayHi();


When new User("John") is called:
A new object is created.
The constructor runs with the given argument and assigns it to this.name.
…Then we can call object methods, such as user.sayHi().



============================


Super


Summary
To extend a class:
class Child extends Parent:
That means Child.prototype.__proto__ will be Parent.prototype, so methods are inherited.
When overriding a constructor:
We must call parent constructor as super() in Child constructor before using this.

(optional)
When overriding another method:
We can use super.method() in a Child method to call Parent method.
Internals:
Methods remember their class/object in the internal [[HomeObject]] property.
That’s how super resolves parent methods.
So it’s not safe to copy a method with super from one object to another.
Also:
Arrow functions don’t have their own this or super, so they transparently fit into the surrounding context.




*/








