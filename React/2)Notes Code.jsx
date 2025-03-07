// 1. Destructuring Props in Functional Components
//    --> Instead of accessing props with props.name, props.age, etc., you can destructure them directly in the function parameter.
const User = ({ name, age }) => {
  return (
    <h1>
      Hello, {name}! You are {age} years old.
    </h1>
  );
};
// 2. Destructuring Props Inside the Function
//    can also destructure inside the function body.

const User = (props) => {
  const { name, age } = props;
  return (
    <h1>
      Hello, {name}! You are {age} years old.
    </h1>
  );
};

// 3. Destructuring State in Functional Components (useState) When using useState, destructuring allows easy access to state values.

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// 4. Destructuring in useEffect Hook
//If you receive an object inside useEffect, you can destructure it.

import { useEffect } from "react";

const UserProfile = ({ user }) => {
  useEffect(() => {
    const { name, age } = user;
    console.log(`User: ${name}, Age: ${age}`);
  }, [user]);

  return <div>Profile Loaded</div>;
};
