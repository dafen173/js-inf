// https://javascript.info/cookie
/*
Cookies are small strings of data that are stored directly in the browser.
They are a part of the HTTP protocol.
Cookies are usually set by a web-server using the response Set-Cookie HTTP-header.
Then, the browser automatically adds them to (almost) every request
to the same domain using the Cookie HTTP-header.

One of the most widespread use cases is authentication:

Upon sign in, the server uses the Set-Cookie HTTP-header in the response
 to set a cookie with a unique “session identifier”.
Next time when the request is sent to the same domain,
the browser sends the cookie over the net using the Cookie HTTP-header.
So the server knows who made the request.

We can also access cookies from the browser, using document.cookie property.

A write operation to document.cookie updates only cookies mentioned in it,
but doesn’t touch other cookies.

For instance, this call sets a cookie with the name user and value John:
document.cookie = "user=John"; // update only cookie named 'user'
alert(document.cookie); // show all cookies

Technically, name and value can have any characters.
To keep the valid formatting, they should be escaped using a built-in encodeURIComponent function:
// special characters (spaces), need encoding
let name = "my name";
let value = "John Smith"
// encodes the cookie as my%20name=John%20Smith
document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

alert(document.cookie); // ...; my%20name=John%20Smith

Limitations
There are few limitations:
The name=value pair, after encodeURIComponent, should not exceed 4KB.
So we can’t store anything huge in a cookie.
The total number of cookies per domain is limited to around 20+,
the exact limit depends on the browser.

Cookies have several options, many of them are important and should be set.
The options are listed after key=value, delimited by ;, like this:
document.cookie = "user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"

path
path=/mypath
The url path prefix must be absolute. It makes the cookie accessible for pages under that path.
By default, it’s the current path.

If a cookie is set with path=/admin, it’s visible at pages /admin and /admin/something,
but not at /home or /adminpage.
Usually, we should set path to the root: path=/ to make the cookie accessible from all website pages.


domain
domain=site.com
A domain defines where the cookie is accessible. In practice though, there are limitations.
We can’t set any domain.
There’s no way to let a cookie be accessible from another 2nd-level domain,
so other.com will never receive a cookie set at site.com.
It’s a safety restriction, to allow us to store sensitive data in cookies
that should be available only on one site.
By default, a cookie is accessible only at the domain that set it.

Please note, by default a cookie is also not shared to a subdomain as well,
such as forum.site.com.
// if we set a cookie at site.com website...
document.cookie = "user=John"
// ...we won't see it at forum.site.com
alert(document.cookie); // no user
…But this can be changed. If we’d like to allow subdomains like forum.site.com
to get a cookie set at site.com, that’s possible.
For that to happen, when setting a cookie at site.com, we should explicitly set the
domain option to the root domain: domain=site.com. Then all subdomains will see such cookie.
For example:
// at site.com
// make the cookie accessible on any subdomain *.site.com:
document.cookie = "user=John; domain=site.com"
// later
// at forum.site.com
alert(document.cookie); // has cookie user=John


expires, max-age
By default, if a cookie doesn’t have one of these options, it disappears when the browser is closed.
Such cookies are called “session cookies”
To let cookies survive a browser close, we can set either the expires or max-age option.
expires=Tue, 19 Jan 2038 03:14:07 GMT

Expires option defines the time, when the browser will automatically delete it.
max-age=3600
It’s an alternative to expires and specifies the cookie’s expiration in seconds from the current moment.


secure
The cookie should be transferred only over HTTPS.
By default, if we set a cookie at http://site.com, then it also appears at https://site.com and vice versa.
That is, cookies are domain-based, they do not distinguish between the protocols.

With this option, if a cookie is set by https://site.com, then it doesn’t appear when the same site is accessed by HTTP, as http://site.com.
So if a cookie has sensitive content that should never be sent over unencrypted HTTP, the secure flag is the right thing.
// assuming we're on https:// now
// set the cookie to be secure (only accessible over HTTPS)
document.cookie = "user=John; secure";


samesite
Samesite is another security attribute. It’s designed to protect from
so-called XSRF (cross-site request forgery) attacks.
XSRF is a type of malicious exploit of a website or web application
where unauthorized commands are submitted from a user that the web application trusts

*/



