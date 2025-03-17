react-dom --> for website
react-native --> for mobile

# React

--> Javascript library for building user interfaces
--> Used to build single-page applications.
--> Allows us to create reusable UI components.
--> React creates a VIRTUAL DOM in memory.
--> Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
--> Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.

# To Create a new file

==> npx create-react-app my-react-app
--> Node.js is required to use create-react-app.
--> Create-react-app tool is an officially supported way to create React applications.
--> my-react-app == It is the name of new React project folder/directory. It can be replace with preferred project name.
--> A new browser window will pop up with localhost:3000
--> npm create vite@latest --> for vite create

==> npm start --> Start the development Server
==> npm run build --> Bundles the app into statics files for production
==> npm test --> Starts the test runner
==> npm run eject --> Removes this tool and copies build dependencies, configuration file and scripts into the app directory .If it is done , we can't go back.

# NPM -- node package manager

--> NPM is a package manager for JavaScript and is used to manage dependencies (libraries, frameworks, and tools) in Node.js projects.
--> For Running it we need to install Package globally
--> Installing Packages:
npm install package-name
--> Installing Packages Globally:
npm install -g package-name
--> Running Scripts:
You can define scripts in package.json and run them using:
npm run script-name

# Managing Project Dependencies:

--> package.json contains project dependencies and metadata.
--> node_modules/ stores installed packages.

# NPX -- node package executer

--> NPX is a tool that comes with NPM.
--> It is used to execute packages directly without installing them globally.
![Key Difference Between NPM and NPX](image.png)

# ES6

--> ES6 stands for ECMAScript 6.
--> Classes, Arrow Functions, Variables (let, const, var), Array Methods like .map(), Destructuring, Modules, Ternary Operator, Spread Operator
![Summary of ES6 Updates in React](image-1.png)

# React ES6 Classes(nowdays Function)

--> A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.
--> In modern React development, functional components with hooks have largely replaced ES6 class components.

==> Methods in function
--> Methods (or functions) are defined inside the component and do not require this like in class components.
--> Can use regular functions or arrow functions inside a functional component.

==> Inheritance Using Functional Components
--> instead of defining a class with methods, you create a functional component with state and props.
--> React does not use class inheritance. Instead, use composition and props.

# Arrow function

--> Arrow functions allow us to write shorter function syntax:
--> hello = () => {
return "Hello World!";
}
==> If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
--> Arrow Functions Return Value by Default:
hello = () => "Hello World!"; // works only if the function has only one statement.
==> If you have parameters, you pass them inside the parentheses:
--> Arrow Function With Parameters:
hello = (val) => "Hello " + val;
==> if have only one parameter, you can skip the parentheses as well:
--> Arrow Function Without Parentheses:
hello = val => "Hello " + val;

# React ES6 Variables

1. Variables (var x = 5.6;)

--> var has a function scope, not a block scope
--> Before ES6 there was only one way of defining variables: with the var keyword. If did not define them, they would be assigned to the global object. Unless it was in strict mode, then would get an error if variables were undefined.
--> With ES6, there are three ways of defining your variables: var, let, and const.
--> If you use var outside of a function, it belongs to the global scope.
--> If you use var inside of a function, it belongs to that function.
--> If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.

2. Const (const x = 5.6;)

--> const is a variable that once it has been created, its value can never change.
--> const has a block scope.
-->The keyword const is a bit misleading.It does not define a constant value. It defines a constant reference to a value.
==> Because of const we can NOT:
Reassign a constant value
Reassign a constant array
Reassign a constant object
==> But you CAN:
Change the elements of constant array
Change the properties of constant object

3. let (let x = 5.6;)

--> let has a block scope.
--> let is the block scoped version of var, and is limited to the block (or expression) where it is defined.
-->If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.

# React ES6 Array Methods

--> There are many JavaScript array methods.
--> One of the most useful in React is the .map() array method.
--> The .map() method allows you to run a function on each item in the array, returning a new array as the result.
--> In React, map() can be used to generate lists.

# React ES6 Destructuring

--> A convenient way to extract values from objects or arrays and use them directly in components. It simplifies code, making it cleaner and more readable.
--> When destructuring arrays, the order that variables are declared is important.If we want only item 1 and item 3, we can leave out item 2 but keep the comma for item 2 [ item1, , item3]
--> Using ES6 destructuring in React helps to: ✔ Reduce redundant props. and this.state. references
--> Make code more readable
--> Improve maintainability

# React ES6 Spread Operator

--> The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
--> The spread operator is often used in combination with destructuring.
--> The properties that did not match are combined, but the property that did match are overwritten by the last object that was passed

# React ES6 Modules

==> Modules
--> JavaScript modules allow us to break up code into separate files.
--> This makes it easier to maintain the code-base.
--> ES Modules rely on the import and export statements.
--> ES6 modules allow you to split code into reusable files and import/export them as needed. This improves code organization and maintainability.

# React ES6 Ternary Operator \*\*

--> The ternary operator is a simplified conditional operator like if / else.
--> Syntax(If there is one condition ) condition ? <expression if true> : <expression if false>
--> Syntax(If there is two or more condition ) condition1 ? <expression if true> : condition2 ? <expression if true> : condition3 ? <expression if true> : <expression if false>;

# React Render HTML

--> React renders HTML to the web page by using a function called createRoot() and its method render()
--> In React, HTML is rendered using JSX (JavaScript XML), which allows you to write HTML-like syntax inside JavaScript. React then converts JSX into standard JavaScript using React.createElement()
--> React requires elements to be wrapped in a single parent element, often using a <div> or <> (Fragment).

# The createRoot Function

--> The createRoot() function takes one argument, an HTML element.
--> The purpose of the function is to define the HTML element where a React component should be displayed.

# The render Method

--> The render() method is then called to define the React component that should be rendered.

# React JSX

--> JSX stands for JavaScript XML.
--> JSX allows us to write HTML in React.
--> JSX makes it easier to write and add HTML in React.
--> JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
--> can write expressions inside curly braces { }

==> To Be Known in React
--> {} --> To write javascript in jsx
--> {{}} --> to write object

# If writing code just after return there is no need for bracket , if we are writing code in next line then there is a bracket needed.

==> Expressions in JSX
--> The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:
--> To write HTML on multiple lines, put the HTML inside parentheses():
--> if write two paragraphs, you must put them inside a parent element, like a div element. Alternatively, you can use a "fragment"(A fragment looks like an empty HTML tag: <></>) to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.
--> JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.
==> Elements Must be Closed
--> JSX follows XML rules, and therefore HTML elements must be properly closed
==> Attribute class => className
--> The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX. Use attribute className instead.
==> Conditions - if statements
--> React supports if statements, but not inside JSX.
--> To be able to use conditional statements in JSX, should put the if statements outside of the JSX, or use a ternary expression instead

# React Components

--> Components are like functions that return HTML elements.
-->Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
--> When creating a React component, the component's name MUST start with an upper case letter.
--> A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.
==> Rendering a Component
--> rendering a component means displaying it inside the DOM. You can render a component using ReactDOM in a regular project or simply return it inside another component.

# React Props

--> Props (short for "properties") in React are used to pass data from a parent component to a child component as read-only values.
--> Props are like function arguments, and you send them into the component as attributes.
--> React Props are read-only! You will get an error if you try to change their value.

# React Events

--> Just like HTML DOM events, React can perform actions based on user events.
--> React has the same events as HTML: click, change, mouseover etc.
--> React events are written in camelCase syntax:( onClick instead of onclick. )
--> React event handlers are written inside curly braces:(onClick={shoot} instead of onclick="shoot()".)

==> Adding Events
--> Handling user interactions using event listeners, such as clicks, form submissions, key presses, etc. React uses synthetic events, which are wrappers around native browser events, ensuring consistency across different browsers.
==> Passing Arguments
--> To pass an argument to an event handler, use an arrow function.
==> React Event Object
--> Event handlers have access to the React event that triggered the function.

# React Conditional Rendering

--> In React, can conditionally render components.
-->There are several ways to do this
==> if Statement
--> Can use the "if" JavaScript operator to decide which component to render.
==> Logical && Operator
--> Another way to conditionally render a React component is by using the && operator.
==> Logical && Operator
--> Another way to conditionally render a React component is by using the && operator.
==> Ternary Operator
--> Another way to conditionally render elements is by using a ternary operator.
--> condition ? true : false

# React Lists

--> will render lists with some type of loop.
--> The JavaScript map() array method is generally the preferred method.

# Keys

--> Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.
--> Keys need to be unique to each sibling. But they can be duplicated globally.

# React Forms

--> Just like in HTML, React uses forms to allow users to interact with the web page.
==> Adding Forms in React
--> Add a form with React like any other element:
==> Handling Forms
--> Handling forms is about how handle the data when it changes value or gets submitted.
--> In HTML, form data is usually handled by the DOM.In React, form data is usually handled by the components.
--> When the data is handled by the components, all the data is stored in the component state.Can control changes by adding event handlers in the onChange attribute.
--> use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.
==> Submitting Forms
--> Can control the submit action by adding an event handler in the onSubmit attribute for the <form>:
==> Multiple Input Fields
--> You can control the values of more than one input field by adding a name attribute to each element.
--> To access the fields in the event handler use the event.target.name and event.target.value syntax.
--> To update the state, use square brackets [bracket notation] around the property name.
==> Textarea
--> The textarea element in React is slightly different from ordinary HTML.
--> In HTML the value of a textarea was the text between the start tag <textarea> and the end tag </textarea> In React the value of a textarea is placed in a value attribute. We'll use the useState Hook to manage the value of the textarea:
==> Select
--> A drop down list, or a select box, in React is also a bit different from HTML.
--> In HTML, the selected value in the drop down list was defined with the selected attribute.In React, the selected value is defined with a value attribute on the select tag:

# React Router

--> React Router is a popular library used to enable client-side navigation in React applications.
--> It allows users to switch between different views (pages) without reloading the browser.

# Add React Router

--> To add React Router in your application, run this in the terminal from the root directory of the application:
npm i -D react-router-dom
npm i -D react-router-dom@latest //for upgrading the react router
==> Basic Usage
--> See Example
--> We wrap our content first with <BrowserRouter>.
--> Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one.
--> <Route>s can be nested. The first <Route> has a path of / and renders the Layout component.
--> The nested <Route>s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.
--> The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.
--> Setting the path to \* will act as a catch-all for any undefined URLs. This is great for a 404 error page
==> Pages / Components
--> The Layout component has <Outlet> and <Link> elements.
--> The <Outlet> renders the current route selected.
--> <Link> is used to set the URL and keep track of browsing history.
--> Anytime we link to an internal path, we will use <Link> instead of <a href="">.
--> The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.

# React Memo

# Styling React Using CSS

--> There are many ways to style React with CSS,will take a closer look at three common ways:

Inline styling
CSS stylesheets
CSS Modules

==> Inline Styling
--> To style an element with the inline style attribute, the value must be a JavaScript object:
--> n JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling is written inside two sets of curly braces {{}}.

==> camelCased Property Names
--> Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax:
--> Use backgroundColor instead of background-color:

# Styling React Using Sass(Read it sepreatly from w3school )

--> Sass is a CSS pre-processor.
--> Sass files are executed on the server and sends CSS to the browser
--> Install Sass by running this command in your terminal:
npm i sass
==> Create a Sass file
--> Create a Sass file the same way as you create CSS files, but Sass files have the file extension .scss
--> In Sass files you can use variables and other Sass functions:

# React Hooks

--> Hooks were added to React in version 16.8.
--> Hooks allow function components to have access to state and other React features.
--> Because of this, class components are generally no longer needed.
--> Hooks generally replace class components, there are no plans to remove classes from React.
--> Must import Hooks from react.
--> State generally refers to application data or properties that need to be tracked.
--> using the **useState** Hook to keep track of the application state.

# Hook Rules

--> There are 3 rules for hooks:

1. Hooks can only be called inside React function components.
2. Hooks can only be called at the top level of a component.
3. Hooks cannot be conditional

==> Custom Hooks
If have stateful logic that needs to be reused in several components, can build our own custom Hooks.

# React useState Hook

--> Allows us to track state in a function component.
--> Generally refers to data or properties that need to be tracking in an application

==> Import useState
--> To use the useState Hook, we first need to import it into our component.At the top of our component, import the useState Hook.
import { useState } from "react";

==> Initialize useState
--> Initialize our state by calling useState in our function component.
--> useState accepts an initial state and returns two values:

1. The current state.
2. A function that updates the state.

==> Initialize state at the top of the function component.
import { useState } from "react";
function FavoriteColor() {
const [color, setColor] = useState("");
}
--> As we are destructuring the returned values from useState.
--> The first value, color, is our current state.
--> The second value, setColor, is the function that is used to update our state.

--> These names are variables that can be named anything would like.
--> Lastly, we set the initial state to an empty string: useState("")

==> Update State
--> To update our state, we use our state updater function.
--> We should never directly update state. Ex: color = "red" is not allowed.
--> const [color, setColor] = useState("red"); // Initializes state with "red", setColor updates it.

==> What Can State Hold
--> The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
--> We could create multiple state Hooks to track individual values
--> Or, we can just use one state and include an object instead!

==> Updating Objects and Arrays in State
--> When state is updated, the entire state gets overwritten.
--> What if we only want to update the color of our car?(refer to example)
--> If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.
--> We can use the JavaScript spread operator to help us.

# React useEffect Hooks

--> The useEffect Hook allows you to perform side effects in your components.
--> Some examples of side effects are: fetching data, directly updating the DOM, and timers.
--> useEffect accepts two arguments. The second argument is optional.
--> useEffect(<function>, <dependency>)
--> useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

1. No dependency passed:

useEffect(() => {
//Runs on every render
});

2. An empty array:

useEffect(() => {
//Runs only on the first render
}, []);

3. Props or state values:

useEffect(() => {
//Runs on the first render
//And any time any dependency value changes
}, [prop, state]);

--> If there are multiple dependencies, they should be included in the useEffect dependency array.

==> Effect Cleanup
--> Some effects require cleanup to reduce memory leaks.
--> Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
--> Do this by including a return function at the end of the useEffect Hook.

# React useContext Hook

--> React Context is a way to manage state globally.
--> It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

==> The Problem
--> State should be held by the highest parent component in the stack that requires access to the state.
--> If, we have many nested components. The component at the top and bottom of the stack need access to the state.To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

==> The Solution
--> The solution is to create context.
==> Create Context
--> To create context, you must Import createContext and initialize it:

# React useRef Hook

--> The useRef Hook allows you to persist values between renders.
--> It can be used to store a mutable value that does not cause a re-render when updated.
--> It can be used to access a DOM element directly.

==> Does Not Cause Re-renders
--> If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
--> To avoid this, we can use the useRef Hook.
--> useRef() only returns one item. It returns an Object called current.
--> When we initialize useRef we set the initial value: useRef(0).
==> Accessing DOM Elements
--> In general, we want to let React handle all DOM manipulation.
--> But there are some instances where useRef can be used without causing issues.
--> In React, we can add a ref attribute to an element to access it directly in the DOM.
==> Tracking State Changes
--> The useRef Hook can also be used to keep track of previous state values.
--> This is because we are able to persist useRef values between renders.

# React useReducer Hook

--> The useReducer Hook is similar to the useState Hook.
--> It allows for custom state logic.
--> If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
==> Syntax
--> The useReducer Hook accepts two arguments.
--> useReducer(<reducer>, <initialState>)
--> The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
--> The useReducer Hook returns the current stateand a dispatchmethod.

# React Custom Hooks(Read through video)

--> Hooks are reusable functions.
--> When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
--> Custom Hooks start with "use". Example: useFetch.
\\ ==> Build a Hook
--> Will use the JSONPlaceholder service to fetch fake data. This service is great for testing applications when there is no existing data.

# JavaScript JSON --- Used for database

--> JSON is a format for storing and transporting data.
--> Often used when data is sent from a server to a web page.
--> JSON stands for JavaScript Object Notation
--> JSON is a lightweight data interchange format
--> JSON is language independent \*
--> JSON is "self-describing" and easy to understand
--> The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

==> JSON Example
This JSON syntax defines an employees object: an array of 3 employee records (objects):

{
"employees":[
{"firstName":"John", "lastName":"Doe"},
{"firstName":"Anna", "lastName":"Smith"},
{"firstName":"Peter", "lastName":"Jones"}
]
}

==> The JSON Format Evaluates to JavaScript Objects
--> The JSON format is syntactically identical to the code for creating JavaScript objects.

--> Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects.

==> JSON Syntax Rules
--> Data is in name/value pairs
--> Data is separated by commas
--> Curly braces hold objects
--> Square brackets hold arrays

==> JSON Data - A Name and a Value
--> JSON data is written as name/value pairs, just like JavaScript object properties.
--> A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

--> JSON names require double quotes. JavaScript names do not.

==> JSON Objects
--> JSON objects are written inside curly braces.
--> Just like in JavaScript, objects can contain multiple name/value pairs:
{"firstName":"John", "lastName":"Doe"}
==> JSON Arrays
--> JSON arrays are written inside square brackets.

--> Just like in JavaScript, an array can contain objects:
"employees":[
{"firstName":"John", "lastName":"Doe"},
{"firstName":"Anna", "lastName":"Smith"},
{"firstName":"Peter", "lastName":"Jones"}
]
In the example above, the object "employees" is an array. It contains three objects.

--> Each object is a record of a person (with a first name and a last name).

==> Converting a JSON Text to a JavaScript Object
--> A common use of JSON is to read data from a web server, and display the data in a web page.
--> For simplicity, this can be demonstrated using a string as input.
--> First, create a JavaScript string containing JSON syntax:

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

==> Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:

const obj = JSON.parse(text);
Finally, use the new JavaScript object in your page:

Example

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
</script>
