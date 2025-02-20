// import { useState } from "react";
import React, { useState } from "react";

export default function TextForm(props) {
  const handleLowerToUpperCase = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  // text = "new text"; -- Wrong way to change the state
  // setText = "new text"; //-- Correct way to change the state
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example TextArea</label> */}
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleLowerToUpperCase}>
        Convert to Uppercase{" "}
      </button>
    </div>
    <div className="container my-3">
      <h1>Your text Summary </h1>
      <p>{text.split(" ").length} words and {text.length} characters </p>
    </div>
    </>
  );
}
