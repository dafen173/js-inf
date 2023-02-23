// https://javascript.info/destructuring-assignment



/*

Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

Here’s an example of how an array is destructured into variables:

// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith


But the array itself is not modified.
It’s just a shorter way to write:

// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];



Ignore elements using commas
Unwanted elements of the array can also be thrown away via an extra comma:

// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert( title ); // Consul
In the code above, the second element of the array is skipped, the third one is assigned to title, and the rest of the array items is also skipped (as there are no variables for them).



let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// now titles = ["Consul", "of the Roman Republic"]

=======================================

Object destructuring
The destructuring assignment also works with objects.

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200


Properties options.title, options.width and options.height are assigned to the corresponding variables.

The order does not matter. This works too:

// changed the order in let {...}
let {height, width, title} = { title: "Menu", height: 200, width: 100 }


If we want to assign a property to a variable with another name, for instance, make options.width go into the variable named w, then we can set the variable name using a colon:

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
The colon shows “what : goes where”. In the example above the property width goes to w, property height goes to h, and title is assigned to the same name.



The rest pattern “…”
What if the object has more properties than we have variables? Can we take some and then assign the “rest” somewhere?

We can use the rest pattern, just like we did with arrays. It’s not supported by some older browsers (IE, use Babel to polyfill it), but works in modern ones.

It looks like this:

let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = property named title
// rest = object with the rest of properties
let {title, ...rest} = options;

// now title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100
Gotcha if there’s no let
In the examples above variables were declared right in the assignment: let {…} = {…}. Of course, we could use existing variables too, without let. But there’s a catch.

This won’t work:

let title, width, height;

// error in this line
{title, width, height} = {title: "Menu", width: 200, height: 100};
The problem is that JavaScript treats {...} in the main code flow (not inside another expression) as a code block. Such code blocks can be used to group statements, like this:

{
  // a code block
  let message = "Hello";
  // ...
  alert( message );
}
So here JavaScript assumes that we have a code block, that’s why there’s an error. We want destructuring instead.

To show JavaScript that it’s not a code block, we can wrap the expression in parentheses (...):

let title, width, height;

// okay now
({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu



*/




