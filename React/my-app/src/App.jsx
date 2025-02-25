import { useState } from "react";
import "./App.css";
// import About from "./Component/About";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import Alert from "./Component/Alert";

function App() {
  const [mode, setMode] = useState("light");
  // const [modeChanger, setModeChanger] = useState(0);

  // const toggleMode = () => {
  //   setModeChanger(!modeChanger);
  // }

  // useEffect(()=>{
  //   modeChanger === 1 ? setMode("dark") : setMode("light");
  // },[modeChanger]);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Navbar
        Title="Shanu Jaiswal"
        Text1="Home"
        Text2="Contact Info"
        Text3="Brief Introduction"
        Text4="Age"
        Text5="Location"
        Text6="SomeThing Else"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextForm Heading="Enter the Text" />
      </div>
      {/* <div className="container">
        <About Heading="About Me" />
      </div> */}
      <Alert/>
      </>
  );
}

export default App;
