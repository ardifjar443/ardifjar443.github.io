// src/App.js
import React, { useState } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./component/navbar";
import {
  BrowserRouter as Router,
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
function App() {
  const location = useLocation();

  return (
    <div className="bg-[#F7FBFC]  ">
      <Navbar routes={location.pathname} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quotes />} />
        <Route path="/project" element={<Project />} />
        <Route path="/writing" element={<Write />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/skills" element={<Skill />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
