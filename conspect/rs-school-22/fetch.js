// https://javascript.info/fetch



/*

A typical fetch request consists of two await calls:

let response = await fetch(url, options); // resolves with response headers
let result = await response.json(); // read body as json
Or, without await:

fetch(url, options)
  .then(response => response.json())
  .then(result => /* process result )

  Response properties:

  response.status – HTTP code of the response,
  response.ok – true if the status is 200-299.
  response.headers – Map-like object with HTTP headers.
  Methods to get response body:

  response.text() – return the response as text,
  response.json() – parse the response as JSON object,
  response.formData() – return the response as FormData object (multipart/form-data encoding, see the next chapter),
  response.blob() – return the response as Blob (binary data with type),
  response.arrayBuffer() – return the response as ArrayBuffer (low-level binary data),
  Fetch options so far:

  method – HTTP-method,
  headers – an object with request headers (not any header is allowed),
  body – the data to send (request body) as string, FormData, BufferSource, Blob or UrlSearchParams object.



For example:


(async () => {
let user = {
  name: 'John',
  surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);
})()





Here’s the full list of all possible fetch options with their default values (alternatives in comments):

let promise = fetch(url, {
  method: "GET", // POST, PUT, DELETE, etc.
  headers: {
    // the content type header value is usually auto-set
    // depending on the request body
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams
  referrer: "about:client", // or "" to send no Referer header,
  // or an url from the current origin
  referrerPolicy: "strict-origin-when-cross-origin", // no-referrer-when-downgrade, no-referrer, origin, same-origin...
  mode: "cors", // same-origin, no-cors
  credentials: "same-origin", // omit, include
  cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
  redirect: "follow", // manual, error
  integrity: "", // a hash, like "sha256-abcdef1234567890"
  keepalive: false, // true
  signal: undefined, // AbortController to abort request
  window: window // null
});



*/