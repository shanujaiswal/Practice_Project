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



// Comparison Operators
console.log("Is your age is greater than 18?? ");
console.log(age > 18); // true
console.log("Is your age is less than 18?? ");
console.log(age < 18); // false
console.log("Is your age is equal to 18?? "); 
console.log(age === 18); // false
console.log("Is your age is not equal to 18?? ");   
console.log(age !== 18); // true
console.log("Is your age is greater than or equal to 18?? ");
console.log(age >= 18); // true
console.log("Is your age is less than or equal to 18?? "); 
console.log(age <= 18); // false
// Logical Operators
console.log("Is your age is greater than 18 and has license?? ");
console.log(age > 18 && hasLicense); // true
console.log("Is your age is greater than 18 or has license?? ");
console.log(age > 18 || hasLicense); // true
console.log("Is your age is greater than 18 and has insurance?? ");
console.log(age > 18 && hasInsurance); // false
console.log("Is your age is greater than 18 or has insurance?? ");
console.log(age > 18 || hasInsurance); // true
console.log("Is your age is greater than 18 and has license and insurance?? ");
console.log(age > 18 && hasLicense && hasInsurance); // false
console.log("Is your age is greater than 18 or has license or insurance?? ");
console.log(age > 18 || hasLicense || hasInsurance); // true
// Ternary Operator
let canDrive = (age >= 18 && hasLicense) ? "You can drive." : "You cannot drive.";
console.log(canDrive); // "You can drive."
// Nullish Coalescing Operator
let userName = null;
let defaultName = "Guest";
let displayName = userName ?? defaultName; 
console.log(displayName); // "Guest"
// Typeof Operator
console.log(typeof age); // "number"
console.log(typeof hasLicense); // "boolean"
console.log(typeof userName); // "object"
console.log(typeof displayName); // "string"
// Instanceof Operator
let date = new Date();
console.log(date instanceof Date); // true
console.log(date instanceof Object); // true
console.log(date instanceof Array); // false
console.log(date instanceof String); // false
// Equality Operators
console.log("Is your age is equal to 25?? ");
console.log(age == 25); // true
console.log("Is your age is not equal to 25?? ");
console.log(age != 25); // false
console.log("Is your age is equal to 25 with type coercion?? ");
console.log(age == "25"); // true
console.log("Is your age is equal to 25 with strict equality?? ");
console.log(age === "25"); // false
console.log("Is your age is not equal to 25 with type coercion?? ");
console.log(age != "25"); // false
console.log("Is your age is not equal to 25 with strict inequality?? ");
console.log(age !== "25"); // true
// Bitwise Operators
let a = 5; // 0101 in binary
let b = 3; // 0011 in binary
console.log("Bitwise AND of a and b: ", a & b); // 1 (0001 in binary)
console.log("Bitwise OR of a and b: ", a | b); // 7 (0111 in binary)
console.log("Bitwise XOR of a and b: ", a ^ b); // 6 (0110 in binary)
console.log("Bitwise NOT of a: ", ~a); // -6 (inverts all bits)
console.log("Left shift a by 1: ", a << 1); // 10 (1010 in binary)
console.log("Right shift a by 1: ", a >> 1); // 2 (0010 in binary)
console.log("Unsigned right shift a by 1: ", a >>> 1); //
// 2 (0010 in binary, same as >> for positive numbers)
console.log("Left shift b by 1: ", b << 1); // 6 (0110 in binary)
console.log("Right shift b by 1: ", b >> 1); // 1 (0001 in binary)
console.log("Unsigned right shift b by 1: ", b >>> 1); //
// 1 (0001 in binary, same as >> for positive numbers)
// Assignment Operators
let x = 10;
let y = 5;
x += y; // x = x + y
console.log("After +=, x: ", x); // 15
y -= 2; // y = y - 2
console.log("After -=, y: ", y); // 3
x *= 2; // x = x * 2
console.log("After *=, x: ", x); // 30
y /= 3; // y = y / 3
console.log("After /=, y: ", y); // 1
x %= 4; // x = x % 4
console.log("After %=, x: ", x); // 2
y **= 2; // y = y ** 2
console.log("After **=, y: ", y); // 1
// x = 2, y = 1
x <<= 1; // x = x << 1
console.log("After <<=, x: ", x); // 4 (0100 in binary)
y >>= 1; // y = y >> 1
console.log("After >>=, y: ", y); // 0 (0000 in binary)
x >>>= 1; // x = x >>> 1
console.log("After >>>=, x: ", x); // 2 (0010 in binary)
y &= 1; // y = y & 1
console.log("After &=, y: ", y); // 0 (0000 in binary
console.log("After |=, x: ", x | y); // 2 (0010 in binary)
console.log("After ^=, x: ", x ^ y); // 2 (0010 in binary)
console.log("After ^=, y: ", y ^ 1); // 1 (0001 in binary)
console.log("After ^=, x: ", x ^ 1); // 3 (0011 in binary)
// Conditional (Ternary) Operator
let ageCheck = (age >= 18) ? "You are an adult." : "
You are a minor.";
console.log(ageCheck); // "You are an adult."  
// Nullish Coalescing Operator
let userInput = null;
let defaultInput = "Default Value";
let finalInput = userInput ?? defaultInput;
console.log(finalInput); // "Default Value"
// Typeof Operator
console.log(typeof age); // "number"
console.log(typeof hasLicense); // "boolean"
console.log(typeof userName); // "object"
console.log(typeof displayName); // "string"
// Instanceof Operator
let dateInstance = new Date();  
