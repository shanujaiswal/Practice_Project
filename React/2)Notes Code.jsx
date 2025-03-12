// // 1. Destructuring Props in Functional Components
// //    --> Instead of accessing props with props.name, props.age, etc., you can destructure them directly in the function parameter.
// const User = ({ name, age }) => {
//   return (
//     <h1>
//       Hello, {name}! You are {age} years old.
//     </h1>
//   );
// };
// // 2. Destructuring Props Inside the Function
// //    can also destructure inside the function body.

// const User = (props) => {
//   const { name, age } = props;
//   return (
//     <h1>
//       Hello, {name}! You are {age} years old.
//     </h1>
//   );
// };

// // 3. Destructuring State in Functional Components (useState) When using useState, destructuring allows easy access to state values.

// import { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// // 4. Destructuring in useEffect Hook
// //If you receive an object inside useEffect, you can destructure it.

// import { useEffect } from "react";

// const UserProfile = ({ user }) => {
//   useEffect(() => {
//     const { name, age } = user;
//     console.log(`User: ${name}, Age: ${age}`);
//   }, [user]);

//   return <div>Profile Loaded</div>;
// };

// // Conditions - if statements
// // Write "Hello" if x is less than 10, otherwise "Goodbye":

// const x = 5;
// let text = "Goodbye";
// if (x < 10) {
//   text = "Hello";
// }

// const myElement = <h1>{text}</h1>;

// // Use ternary expressions instead:
// const x = 5;
// const myElement = <h1>{x < 10 ? "Hello" : "Goodbye"}</h1>;

// React Routing the page 
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


// Create multiple state Hooks:

import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}



// Create a single Hook that holds an object:

import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}



// Use the JavaScript spread operator to update only the color of the car:

import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}



// Use setTimeout() to count 1 second after initial render:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

