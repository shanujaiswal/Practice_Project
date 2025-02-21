import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";

function App() {
  return (
    <>
      <Navbar
        Title="Shanu Jaiswal"
        Text1="Home"
        Text2="Contacts "
        Text3="Brief Introduction"
        Text4="Age"
        Text5="Location"
        Text6="SomeThing Else"
      />
      <div className="container my-3">
        <TextForm Heading="Enter the Text"/>
      </div>
    </>
  );
}

export default App;
