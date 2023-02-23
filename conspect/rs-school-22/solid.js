/*

//The single-responsibility principle (SRP)
"A class should have only one reason to change".
Classes, software components and microservices that have only one responsibility are much easier
to explain, understand and implement than the ones that provide a solution for everything.


//Open/Closed Principle
“Software entities (classes, modules, functions, etc.) should be open for extension,
ut closed for modification.”
It tells you to write your code so that you will be able to add new functionality without
changing the existing code. That prevents situations in which a change to one of your
classes also requires you to adapt all depending classes.


//The Liskov substitution principle (LSP)
It is stating that an object (such as a class) may be replaced by a sub-object
(such as a class that extends the first class) without breaking the program.
The principle defines that objects of a superclass shall be replaceable with objects of its
 subclasses without breaking the application. That requires the objects of your subclasses
  to behave in the same way as the objects of your superclass.



//The Interface Segregation Principle или ISP
"Clients should not be forced to depend upon interfaces that they do not use.” — Robert Martin, paper

The Interface Segregation Principle (ISP) states that a client should not be exposed to methods it doesn’t need. Declaring methods in an interface that the client doesn’t need pollutes the interface and leads to a “bulky” or “fat” interface.

Interfaces should not be excessively “large” if the application forms an interface that is too big,
then there is a high probability that this happens due to the fact that
this interface has too many different responsibilities,
which means that it is most logical to decompose a complex interface into several simple ones.



//The Dependency inversion principle
The dependency inversion principle is a design principle that states that high-level modules
should depend on abstractions rather than concrete implementations. This helps decouple the
high-level and low-level modules, making it easier to change the low-level ones without
affecting the high-level ones.

This principle tells us that High-level modules, which provide complex logic,
should be easily reusable and unaffected by changes in low-level modules,
 which provide utility features. To achieve that, you need to introduce an abstraction that
 decouples the high-level and low-level modules from each other.

Upper-level modules should not depend on lower-level modules.
Both types of modules must depend on abstractions.
Abstractions should not depend on details. Details should depend on abstractions.





*/
