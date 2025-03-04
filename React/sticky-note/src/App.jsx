import "./App.css";
import Myday from "./Component/Myday";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="d-flex ">
        <div className="flex-grow-1">
          <Navbar />
        </div>
        <div className="container mt-3">
          <Routes>
            <Route path="/MyDay" element={<Myday />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
