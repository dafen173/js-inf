// https://www.wallarm.com/what/a-simple-explanation-of-what-a-websocket-is



/*

A WebSocket is a computer communications protocol that provides full-duplex communication channels over a single TCP connection. The IETF standardized the WebSocket protocol as RFC 6455 in 2011. The current specification is known as the HTML Living Standard. Unlike HTTP/HTTPS, WebSockets are stateful protocols, which means the connection established between the server and the client will be alive unless terminated by the server or client; once a WebSocket connection is closed by one end, it extends to the other end.

WebSocket allows us to create “real-time” applications which are faster and require less overhead than traditional API protocols. Sometimes referred to as a high-end computer communication protocol, WebSocket is needed to establish the client-server communication channel. 


As per the conventional definition, WebSocket is a duplex protocol used mainly in the client-server communication channel. It’s bidirectional in nature which means communication happens to and fro between client-server. 

The connection, developed using the WebSocket, lasts as long as any of the participating parties lays it off. Once one party breaks the connection, the second party won’t be able to communicate as the connection breaks automatically at its front.

WebSocket need support from HTTP to initiate the connection.


A WebSocket connection is initiated by sending a WebSocket handshake request from a browser’s HTTP connection to a server to upgrade the connection.


From that point, the connection is binary and does not conform to HTTP protocol. A server application is aware of all WebSocket connections and can communicate with each one individually. As WebSocket remains open, either the server or the user can send messages at any time until one of them closes the session.

WebSocket connection:
1. http request
2. handshake
3. WebSocket two-diection connection




*/
