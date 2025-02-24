import "./App.css";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";

function App() {
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
      />
      <div className="container my-3">
        <TextForm Heading="Enter the Text" />
      </div>
      <div className="container">
        <About Heading="About Me" />
      </div>
    </>
  );
}

export default App;
