import React, { useState } from "react";

export default function Task() {
  //   const [text, setText] = useState("");
  const [placeholder, setPlaceholder] = useState("Add a task");

  const handleOnClick = () => {
    setPlaceholder("Start typing...");
  };

  //   const handleOnChange = (event) => {
  //     setText(event.targetl.value);
  //   };

  return (
    <div>
      <div>
        <input
          //   value={text}
          placeholder={placeholder}
          onFocus={handleOnClick}
          //   onChange={handleOnChange}
        />
      </div>
    </div>
  );
}
