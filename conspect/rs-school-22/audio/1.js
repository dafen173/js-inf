/*
My name is Alexander. I live with my family in Kyiv.
And lately I’m doing my best to become a full fledged IT switcher in the direction of web development.
About 4 years ago, I started learning front-end development.
I learned HTML and CSS using the HTML ACADEMY resource. Then I studied JS at FreeCodeCamp.
But I learned FrontEnd more fully in courses from Kottans.
Kottans is a large community of Ukrainian developers. The course from them was not limited by time
frames
and I went through almost all of this course. But on the last module,
I was distracted by an interesting test task for one of the vacancies.
And then there was another task, and then another one… And then, around March 2022,
there were practically no internships and vacancies for interns.
And just at that moment I found the RS-School with its large number of different courses!
I chose the JS course in order to structure and refresh my knowledge of basic technologies.
And I also hoped to get new useful skills and knowledge from this training.
My expectations were one hundred percent realized.
We still have a difficult situation with electricity. We have power cuts from 4 to 8 hours in one day.
And of course, the missile attacks continue,
this attacks knocks out the working rhythm even more than a power outage.
The “arguments” variable is a special array-like object that contains all arguments by their index.
In old times, rest parameters did not exist in the language, and using arguments was
the only way to get all arguments of the function. And it still works, we can find it
in the old code.
But the downside is that although arguments is both array-like and iterable, it’s not an array.
It does not support array methods, so we can’t call arguments.map(...) for example.
Also, it always contains all arguments. We can’t capture them partially,
like we did with rest parameters.
So when we need these features, then rest parameters are preferred.
Arrow functions do not have "arguments"
If we access the arguments object from an arrow function,
it takes them from the outer “normal” function.
As we remember, arrow functions don’t have their own this.
Now we know they don’t have the special arguments object either.
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished
In the example above, myDisplayer is a called a callback function.
It is passed to myCalculator() as an argument.
Where callbacks really shine are in asynchronous functions,
where one function has to wait for another function (like waiting for a file to load).
At first glance, it looks like a viable approach to asynchronous coding. And indeed it is.
For one or maybe two nested calls it looks fine.
But for multiple asynchronous actions that follow one after another,
we’ll have code named as Callback Hell:
As calls become more nested, the code becomes deeper and increasingly more difficult to manage,
especially if we have real code instead of ... that may include more loops,
conditional statements and so on.
That’s sometimes called “callback hell” or “pyramid of doom.”
The “pyramid” of nested calls grows to the right with every asynchronous action.
Soon it spirals out of control. So this way of coding isn’t very good.
In object-oriented programming, a class is an extensible code template for creating objects
that sets in them initial values (properties) and implementation behaviors (methods).
Then use new MyClass to create a new object with all the listed methods.
The constructor() method is called automatically by new, so we can initialize the object there.
When new User("John") is called:
A new object is created.
The constructor runs with the given argument and assigns it to this.name.
…Then we can call object methods, such as user.sayHi().
To extend a class:
class Child extends Parent:
That means Child.prototype.__proto__ will be Parent.prototype, so methods are inherited.
When overriding a constructor:
We must call parent constructor as super() in Child constructor before using this.
Closures
a closure gives you access to an outer function's scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.
to use a closure, you just need to define a function inside another function;
A closure is a function that remembers its outer variables and can access them.
A closure is the combination of a function bundled together (enclosed) with references
to its lexical environment.

Constructor, operator "new"
The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.
That can be done using constructor functions and the "new" operator.
Constructor function
Constructor functions technically are regular functions. There are two conventions though:
They are named with capital letter first.
They should be executed only with "new" operator.
When a function is executed with new, it does the following steps:
A new empty object is created and assigned to this.
The function body executes. Usually it modifies this, adds new properties to it.
The value of this is returned.
In other words, new User(...) does something like:
the main purpose of constructors – to implement reusable object creation code.
Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.
But if there is a return statement, then the rule is simple:
If return is called with an object, then the object is returned instead of this.
If return is called with a primitive, it’s ignored.
In other words, return with an object returns that object, in all other cases this is returned.
For instance, here return overrides this by returning an object:
Usually constructors don’t have a return statement. Here we mention the special behavior with returning objects mainly for the sake of completeness.
Methods in constructor
Using constructor functions to create objects gives a great deal of flexibility. The constructor function may have parameters that define how to construct the object, and what to put in it.
Of course, we can add to this not only properties, but methods as well.
For instance, new User(name) below creates an object with the given name and the method sayHi:

Summary
Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.
Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.
We can use constructor functions to make multiple similar objects.
JavaScript provides constructor functions for many built-in language objects: like Date for dates, Set for sets and others 

*/
