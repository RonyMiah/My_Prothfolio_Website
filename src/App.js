
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import Apartment from "./Components/ProjectDetils/Apartment";
import MackBook from "./Components/ProjectDetils/MackBook";
import TeamProject from "./Components/ProjectDetils/TeamProject";
import Travel from "./Components/ProjectDetils/Travel";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/mackbook" element={<MackBook />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/team" element={<TeamProject />} />
          
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
