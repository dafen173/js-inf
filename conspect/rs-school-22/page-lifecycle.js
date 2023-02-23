// https://medium.com/swlh/what-the-heck-is-repaint-and-reflow-in-the-browser-b2d0fb980c08






/*

When you hit enter on some link or URL browser make an HTTP request to that page and the corresponding server provides (often) HTML document in response.

When the user enters the URL, It will fetch the HTML source code from the server
Browser Parse the HTML source code and convert into the Tokens <, TagName, Attribute, AttributeValue, >
The Tokens will convert into the nodes and will construct the DOM Tree
The CSSOM Tree will generate from the CSS rules
The DOM and CSSOM tree will combine into the RenderTree
The RenderTree are constructed as below:
Start from the root of the dom tree and compute which elements are visible and their computed styles
RenderTree will ignore the not visible elements like (meta, script, link) and display:none
It will match the visible node to the appropriate CSSOM rules and apply them
Reflow: Calculate the position and size of each visible node
Repaint: now, the browser will paint the renderTree on the screen


Repaint and Reflow
The Repaint occurs when changes are made to the appearance of the elements that change the visibility, but doesn't affect the layout
Eg: Visibility, background color, outline
Reflow means re-calculating the positions and geometries of elements in the document. The Reflow happens when changes are made to the elements, that affect the layout of the partial or whole page. The Reflow of the element will cause the subsequent reflow of all the child and ancestor elements in the DOM
Both Reflow and Repaints are an expensive operation

What Causes the Reflows and Repaints
Reflow will happen when Adding, Removing, Updating the DOM nodes
Hiding DOM Element with display: none will cause both reflow and repaint
Hiding DOM Element with visibility: hidden will cause the only repaint, because no layout or position change
Moving, animating a DOM node will trigger reflow and repaint
Resizing the window will trigger reflow
Changing font-style alters the geometry of the element. That means that it may affect the position or size of other elements on the page, both of which require the browser to perform reflow. Once those layout operations have completed any damaged pixels will need to be a repaint
Adding or removing Stylesheet will cause the reflow/repaint
Script manipulating the DOM is the expensive operation because they have recalculated each time the document, or part of the document modified. As we have seen from all the many things that trigger a reflow, it can occur thousands and thousands of times per second


*/