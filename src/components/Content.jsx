import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Content.css"; // Import file CSS dengan animasi
import "./ContentAnimation.css"; // Import file CSS animasi
import Home from "./content/home";
import Contact from "./content/contact";
import Percobaan from "./content/percobaan";

function Content({ activeTab, setActiveTab }) {
  return (
    <div className="content">
      <CSSTransition
        in={activeTab === "home"} // Aktifkan animasi jika activeTab adalah "home"
        timeout={300} // Durasi animasi (dalam milidetik)
        classNames="slide" // Nama kelas CSS untuk animasi
        unmountOnExit
      >
        <Home />
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
        in={activeTab === "percobaan"} // Aktifkan animasi jika activeTab adalah "contact"
        timeout={300} // Durasi animasi (dalam milidetik)
        classNames="slide" // Nama kelas CSS untuk animasi
        unmountOnExit
      >
        <Percobaan />
      </CSSTransition>
    </div>
  );
}

export default Content;
