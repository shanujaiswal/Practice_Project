# npm start --> Start the development Server
# npm run build --> Bundles the app into statics files for production 
# npm test --> Starts the test runner 
# npm run eject --> Removes this tool and copies build dependencies, configuration file and scripts into the app directory .If it is done , we can't go back.

# Extension to Download in vscode 
1. Thunder Client --> For API
2. ES7+ React/Redux/React-Native snippets by dsznajder    ----> For Full Form

# NPM -- node package manager
--> NPM is a package manager for JavaScript and is used to manage dependencies (libraries, frameworks, and tools) in Node.js projects.
-->For Running it we need to install Package globally 
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

# To Create a new file 
npx create-react-app
npm create vite@latest


# Props
--> Props (short for "properties") in React are used to pass data from a parent component to a child component as read-only values.

# Onchange 
--> An event handler used primarily with form elements like <input>, <textarea>, and <select>. 
--> It triggers when the value of the element changes, allowing you to update the component’s state or perform other actions based on user input.
--> Works with different input types (text, checkbox, radio, select, etc.)

react-dom --> for website 
react-native  --> for mobile 


# if writing code just after return there is no need  for bracket , if we are writing code  in next line then there is a bracket needed. 

{} --> To write javascript in jsx
{{}} --> to write object 