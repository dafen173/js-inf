// https://javascript.info/localstorage


/*

Web storage objects localStorage and sessionStorage allow to save key/value pairs in the browser.

What’s interesting about them is that the data survives a page refresh (for sessionStorage)
and even a full browser restart (for localStorage).

Unlike cookies, web storage objects are not sent to server with each request.
Because of that, we can store much more. Most modern browsers allow at least 5 megabytes of data
 (or more) and have settings to configure that.
Also unlike cookies, the server can’t manipulate storage objects via HTTP headers.
Everything’s done in JavaScript.
The storage is bound to the origin (domain/protocol/port triplet).
That is, different protocols or subdomains infer different storage objects,
they can’t access data from each other.


Both storage objects provide the same methods and properties:

setItem(key, value) – store key/value pair.
getItem(key) – get the value by key.
removeItem(key) – remove the key with its value.
clear() – delete everything.
key(index) – get the key on a given position.
length – the number of stored items.


The main features of localStorage are:
Shared between all tabs and windows from the same origin.
The data does not expire. It remains after the browser restart and even OS reboot.


Please note that both key and value must be strings.

We can use JSON to store objects though:

localStorage.user = JSON.stringify({name: "John"});

// sometime later
let user = JSON.parse( localStorage.user );
alert( user.name ); // John


Also it is possible to stringify the whole storage object, e.g. for debugging purposes:

// added formatting options to JSON.stringify to make the object look nicer
alert( JSON.stringify(localStorage, null, 2) );



sessionStorage
The sessionStorage object is used much less often than localStorage.

Properties and methods are the same, but it’s much more limited:

The sessionStorage exists only within the current browser tab.
Another tab with the same page will have a different storage.
But it is shared between iframes in the same tab (assuming they come from the same origin).
The data survives page refresh, but not closing/opening the tab.




*/