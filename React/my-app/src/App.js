import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Shanu" text1="SuperAdmin" text2="Org Admin" />
      <div className="container my-3">
        <TextForm heading="Enter the Text"/>
      </div>
    </>
  );
}

export default App;
