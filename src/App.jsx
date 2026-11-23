import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./component/navbar";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Quotes from "./component/quotes";
import Home from "./component/home/home";
import Footer from "./component/Footer";
import Project from "./component/project";
import Write from "./component/write";
import Skill from "./component/skill";
import Photo from "./component/Photo";
import SmoothScroll from "./component/common/SmoothScroll";

function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <div
        className={
          location.pathname === "/" ||
          location.pathname === "/project" ||
          location.pathname === "/skills"
            ? "portfolio-app"
            : "bg-[#F7FBFC]"
        }
      >
        <Navbar routes={location.pathname} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quotes />} />
          <Route path="/project" element={<Project />} />
          <Route path="/writing" element={<Write />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/skills" element={<Skill />} />
        </Routes>
        {location.pathname !== "/" && <Footer />}
      </div>
    </SmoothScroll>
  );
}

export default App;
