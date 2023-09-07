import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Content.css"; // Import file CSS dengan animasi
import "./ContentAnimation.css"; // Import file CSS animasi
import Home from "./content/home";
import Contact from "./content/contact";
import Algebra from "./content/Algebra";
import Quotes from "./content/quotes";

function Content({ activeTab, setActiveTab }) {
  return (
    <div className="content">
      <CSSTransition
        in={activeTab === "home"} // Aktifkan animasi jika activeTab adalah "home"
        timeout={300} // Durasi animasi (dalam milidetik)
        classNames="slide" // Nama kelas CSS untuk animasi
        unmountOnExit
      >
        <Home activeTab={activeTab} setActiveTab={setActiveTab} />
      </CSSTransition>

      <CSSTransition
        in={activeTab === "contact"} // Aktifkan animasi jika activeTab adalah "contact"
        timeout={300} // Durasi animasi (dalam milidetik)
        classNames="slide" // Nama kelas CSS untuk animasi
        unmountOnExit
      >
        <Contact activeTab={activeTab} setActiveTab={setActiveTab} />
      </CSSTransition>
      <CSSTransition
        in={activeTab === "Algebra"} // Aktifkan animasi jika activeTab adalah "contact"
        timeout={300} // Durasi animasi (dalam milidetik)
        classNames="slide" // Nama kelas CSS untuk animasi
        unmountOnExit
      >
        <Algebra activeTab={activeTab} setActiveTab={setActiveTab} />
      </CSSTransition>
      <CSSTransition
        in={activeTab === "Quotes"} // Aktifkan animasi jika activeTab adalah "contact"
        timeout={300} // Durasi animasi (dalam milidetik)
        classNames="slide" // Nama kelas CSS untuk animasi
        unmountOnExit
      >
        <Quotes />
      </CSSTransition>
    </div>
  );
}

export default Content;
