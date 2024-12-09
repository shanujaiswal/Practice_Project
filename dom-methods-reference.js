// Element Selection Methods
document.getElementById('id')               // Returns element with matching ID
document.getElementsByClassName('class')    // Returns HTMLCollection of elements with matching class
document.getElementsByTagName('tag')        // Returns HTMLCollection of elements with matching tag
document.querySelector('selector')          // Returns first element matching CSS selector
document.querySelectorAll('selector')      // Returns NodeList of all elements matching CSS selector

// Element Creation and Modification
document.createElement('tag')               // Creates new element
element.appendChild(node)                   // Adds node as last child
element.removeChild(node)                  // Removes child node
element.replaceChild(newNode, oldNode)     // Replaces oldNode with newNode
element.insertBefore(newNode, referenceNode) // Inserts newNode before referenceNode
element.cloneNode(deep)                    // Creates copy of node (deep=true includes children)

// Element Content Manipulation
element.innerHTML                          // Gets/sets HTML content
element.textContent                        // Gets/sets text content (no HTML parsing)
element.innerText                          // Gets/sets displayed text content
element.value                              // Gets/sets form input value

// Attribute Methods
element.getAttribute('attr')               // Gets attribute value
element.setAttribute('attr', 'value')      // Sets attribute value
element.removeAttribute('attr')            // Removes attribute
element.hasAttribute('attr')               // Checks if attribute exists
element.toggleAttribute('attr')            // Toggles boolean attribute

// Class Methods
element.classList.add('class')             // Adds class
element.classList.remove('class')          // Removes class
element.classList.toggle('class')          // Toggles class
element.classList.contains('class')        // Checks if class exists
element.classList.replace('old', 'new')    // Replaces old class with new

// Style Methods
element.style.property                     // Gets/sets inline style
getComputedStyle(element)                  // Gets all applied styles

// Element Size and Position
element.getBoundingClientRect()            // Gets element size and position
element.offsetWidth                        // Gets element width including padding and border
element.offsetHeight                       // Gets element height including padding and border
element.clientWidth                        // Gets element content width including padding
element.clientHeight                       // Gets element content height including padding
element.scrollWidth                        // Gets element content width including overflow
element.scrollHeight                       // Gets element content height including overflow

// Event Handling
element.addEventListener('event', handler)  // Adds event listener
element.removeEventListener('event', handler) // Removes event listener
element.dispatchEvent(event)               // Triggers event programmatically

// DOM Traversal
element.parentNode                         // Gets parent node
element.parentElement                      // Gets parent element
element.children                           // Gets child elements
element.childNodes                         // Gets child nodes (including text nodes)
element.firstChild                         // Gets first child node
element.lastChild                          // Gets last child node
element.nextSibling                        // Gets next sibling node
element.previousSibling                    // Gets previous sibling node
element.nextElementSibling                 // Gets next sibling element
element.previousElementSibling             // Gets previous sibling element

// Document Methods
document.write()                           // Writes text to document
document.createDocumentFragment()          // Creates document fragment
document.createTextNode()                  // Creates text node
document.createComment()                   // Creates comment node

// Form Methods
form.submit()                              // Submits form
form.reset()                               // Resets form
form.checkValidity()                       // Checks form validity
form.reportValidity()                      // Reports form validity

// Focus Methods
element.focus()                            // Sets focus to element
element.blur()                             // Removes focus from element

// Scroll Methods
element.scrollIntoView()                   // Scrolls element into view
element.scrollTo(x, y)                     // Scrolls to specific coordinates
element.scrollBy(x, y)                     // Scrolls by specific amount

// Data Attributes
element.dataset                            // Gets/sets data attributes

// Custom Elements
customElements.define()                    // Defines custom element
customElements.get()                       // Gets custom element constructor
customElements.whenDefined()               // Returns promise that resolves when element is defined
