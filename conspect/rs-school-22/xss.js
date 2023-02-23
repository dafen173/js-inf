

/*

Definition
Cross site scripting (XSS) is an attack in which an attacker injects malicious executable scripts into the code of a trusted application or website. Attackers often initiate an XSS attack by sending a malicious link to a user and enticing the user to click it. If the app or website lacks proper data sanitization, the malicious link executes the attacker’s chosen code on the user’s system. As a result, the attacker can steal the user’s active session cookie.

XSS can take place using any client-side language.

To carry out a cross site scripting attack, an attacker injects a malicious script into user-provided input. Attackers can also carry out an attack by modifying a request. If the web app is vulnerable to XSS attacks, the user-supplied input executes as code. For example, in the request below, the script displays a message box with the text “xss.”

http://www.site.com/page.php?var=<script>alert('xss');</script>

There are many ways to trigger an XSS attack. For example, the execution could be triggered automatically when the page loads or when a user hovers over specific elements of the page (e.g., hyperlinks).

Potential consequences of cross site scripting attacks include these:

Capturing the keystrokes of a user.
Redirecting a user to a malicious website.
Running web browser-based exploits (e.g., crashing the browser).
Obtaining the cookie information of a user who is logged into a website (thus compromising the victim’s account).
In some cases, the XSS attack leads to a complete compromise of the victim’s account. Attackers can trick users into entering credentials on a fake form, which provides all the information to the attacker.






*/


