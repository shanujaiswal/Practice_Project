import "./App.css";
import Myday from "./Component/Myday";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route
            path="/MyDay"
            element={
              <div>
                <Myday/>;
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
