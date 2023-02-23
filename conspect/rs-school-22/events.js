// https://javascript.info/introduction-browser-events



/*

To react on events we can assign a handler – a function that runs in case of an event.

Handlers are a way to run JavaScript code in case of user actions.

There are 3 ways to assign event handlers:

HTML attribute: onclick="...".
DOM property: elem.onclick = function.
Methods: elem.addEventListener(event, handler[, phase]) to add, removeEventListener to remove.

No matter how you assign the handler – it gets an event object as the first argument.
That object contains the details about what’s happened.


<input type="button" value="Click me" id="elem">

<script>
  elem.onclick = function(event) {
    // show event type, element and coordinates of the click
    alert(event.type + " at " + event.currentTarget);
    alert("Coordinates: " + event.clientX + ":" + event.clientY);
  };
</script>




Bubbling
The bubbling principle is simple.

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

The process is called “bubbling”, because events “bubble” from the inner element up through parents like a bubble in the water.

Almost all events bubble.
For instance, a focus event does not bubble. But still it’s an exception, rather than a rule,
most events do bubble.



event.target
A handler on a parent element can always get the details about where it actually happened.

The most deeply nested element that caused the event is called a target element, accessible as event.target.

Note the differences from this (=event.currentTarget):

event.target – is the “target” element that initiated the event, it doesn’t change through the bubbling process.
this – is the “current” element, the one that has a currently running handler on it.


For instance, if we have a single handler form.onclick, then it can “catch” all clicks inside the form. No matter where the click happened, it bubbles up to <form> and runs the handler.

In form.onclick handler:

this (=event.currentTarget) is the <form> element, because the handler runs on it.
event.target is the actual element inside the form that was clicked.

==================================================

But any handler may decide that the event has been fully processed and stop the bubbling.
The method for it is event.stopPropagation().

event.stopImmediatePropagation()
If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute.
In other words, event.stopPropagation() stops the move upwards, but on the current element all other handlers will run.
To stop the bubbling and prevent handlers on the current element from running, there’s a method event.stopImmediatePropagation(). After it no other handlers execute.

=====================================

The standard DOM Events describes 3 phases of event propagation:

Capturing phase – the event goes down to the element.
Target phase – the event reached the target element.
Bubbling phase – the event bubbles up from the element.

To catch an event on the capturing phase, we need to set the handler capture option to true:
elem.addEventListener(..., {capture: true})
// or, just "true" is an alias to {capture: true}
elem.addEventListener(..., true)


To remove the handler, removeEventListener needs the same phase
If we addEventListener(..., true), then we should mention the same phase in removeEventListener(..., true) to correctly remove the handler.

====================================================================


https://javascript.info/event-delegation


Event delegation
Capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation.

The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
In the handler we get event.target to see where the event actually happened and handle it.


let selectedTd;

table.onclick = function(event) {
  let target = event.target; // where was the click?

  if (target.tagName != 'TD') return; // not on TD? Then we're not interested

  highlight(target); // highlight it
};

function highlight(td) {
  if (selectedTd) { // remove the existing highlight if any
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); // highlight the new td
}


===================================


Browser default actions
Many events automatically lead to certain actions performed by the browser.

For instance:

A click on a link – initiates navigation to its URL.
A click on a form submit button – initiates its submission to the server.
Pressing a mouse button over a text and moving it – selects the text.
If we handle an event in JavaScript, we may not want the corresponding browser action to happen, and want to implement another behavior instead.

Preventing browser actions
There are two ways to tell the browser we don’t want it to act:

The main way is to use the event object. There’s a method event.preventDefault().
If the handler is assigned using on<event> (not by addEventListener), then returning false also works the same.
In this HTML, a click on a link doesn’t lead to navigation; the browser doesn’t do anything:

<a href="/" onclick="return false">Click here</a>
or
<a href="/" onclick="event.preventDefault()">here</a>


















*/
