import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import Destination from "./components/Destination";
import Missions from "./components/Missions";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dest" element={<Destination/>} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/tech" element={<Technology />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
