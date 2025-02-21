import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let handleUpClick = text.toUpperCase();
    setText(handleUpClick);
  };
  const handleLoClick = () => {
    console.log("lowercase was clicked" + text);
    let handleLoClick = text.toLowerCase();
    setText(handleLoClick);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div>
        <h1>{props.Heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary my-4 " onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary my-4 mx-4" onClick={handleLoClick}>
          Convert To lowerCase
        </button>
      </div>
      <div className="container  my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length}words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
