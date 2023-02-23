// https://javascript.info/property-descriptors


/*

Object properties, besides a value, have three special attributes (so-called “flags”):

writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

When we create a property “the usual way”, all of them are true. But we also can change them anytime.


The method Object.getOwnPropertyDescriptor allows to query the full information about a property.

let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

obj
The object to get information from.

propertyName
The name of the property.

The returned value is a so-called “property descriptor” object: it contains the value and all the flags.


To change the flags, we can use Object.defineProperty.

The syntax is:

Object.defineProperty(obj, propertyName, descriptor)
obj, propertyName
The object and its property to apply the descriptor.
descriptor
Property descriptor object to apply.
If the property exists, defineProperty updates its flags. Otherwise, it creates the property with the given value and flags; in that case, if a flag is not supplied, it is assumed false.


let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );

// =>
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}



Non-writable
Let’s make user.name non-writable (can’t be reassigned) by changing writable flag:

let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name'

==================================

Here’s the same example, but the property is created from scratch:

let user = { };

Object.defineProperty(user, "name", {
  value: "John",
  // for new properties we need to explicitly list what's true
  enumerable: true,
  configurable: true
});

alert(user.name); // John
user.name = "Pete"; // Error



====================================
Non-enumerable
Now let’s add a custom toString to user.

Normally, a built-in toString for objects is non-enumerable, it does not show up in for..in. But if we add a toString of our own, then by default it shows up in for..in, like this:

let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

// By default, both our properties are listed:
for (let key in user) alert(key); // name, toString
If we don’t like it, then we can set enumerable:false. Then it won’t appear in a for..in loop, just like the built-in one:

let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

Object.defineProperty(user, "toString", {
  enumerable: false
});

// Now our toString disappears:
for (let key in user) alert(key); // name
Non-enumerable properties are also excluded from Object.keys:

alert(Object.keys(user)); // name


=========================

Non-configurable
The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.

A non-configurable property can’t be deleted, its attributes can’t be modified.

For instance, Math.PI is non-writable, non-enumerable and non-configurable:

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

alert( JSON.stringify(descriptor, null, 2 ) );
//=>
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}


So, a programmer is unable to change the value of Math.PI or overwrite it.

Math.PI = 3; // Error, because it has writable: false

// delete Math.PI won't work either
We also can’t change Math.PI to be writable again:

// Error, because of configurable: false
Object.defineProperty(Math, "PI", { writable: true });
There’s absolutely nothing we can do with Math.PI.

Making a property non-configurable is a one-way road. We cannot change it back with defineProperty.

Please note: configurable: false prevents changes of property flags and its deletion, while allowing to change its value.

Here user.name is non-configurable, but we can still change it (as it’s writable):

let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  configurable: false
});

user.name = "Pete"; // works fine
delete user.name; // Error



The only attribute change possible: writable true → false
There’s a minor exception about changing flags.

We can change writable: true to false for a non-configurable property, thus preventing its value modification (to add another layer of protection). Not the other way around though.




*/