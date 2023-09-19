import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Content.css"; // Import file CSS dengan animasi
import "./ContentAnimation.css"; // Import file CSS animasi
import Home from "./content/home";
import Contact from "./content/contact";
import Learning from "./content/Learning";
import Quotes from "./content/quotes";
import PDFViewer from "./content/pdf";

function Content({ activeTab, setActiveTab }) {
  const [pdfSource, setPdfSource] = useState(
    "./cheatSheet/Pandas_Cheat_Sheet.pdf"
  );
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
        <Learning activeTab={activeTab} setActiveTab={setActiveTab} />
      </CSSTransition>

      <CSSTransition
        in={activeTab === "cheatSheet"} // Aktifkan animasi jika activeTab adalah "contact"
        timeout={300} // Durasi animasi (dalam milidetik)
        classNames="slide" // Nama kelas CSS untuk animasi
        unmountOnExit
      >
        <Learning
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          pdfSource={pdfSource}
          setPdfSource={setPdfSource}
        />
      </CSSTransition>

      <CSSTransition
        in={activeTab === "Quotes"} // Aktifkan animasi jika activeTab adalah "contact"
        timeout={300} // Durasi animasi (dalam milidetik)
        classNames="slide" // Nama kelas CSS untuk animasi
        unmountOnExit
      >
        <Quotes activeTab={activeTab} setActiveTab={setActiveTab} />
      </CSSTransition>
      <CSSTransition
        in={activeTab === "pdfViewer"} // Aktifkan animasi jika activeTab adalah "contact"
        timeout={300} // Durasi animasi (dalam milidetik)
        classNames="slide" // Nama kelas CSS untuk animasi
        unmountOnExit
      >
        <PDFViewer
          document={pdfSource}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </CSSTransition>
      <CSSTransition
        in={activeTab === "cv"} // Aktifkan animasi jika activeTab adalah "contact"
        timeout={300} // Durasi animasi (dalam milidetik)
        classNames="slide" // Nama kelas CSS untuk animasi
        unmountOnExit
      >
        <PDFViewer
          document={"./cv/cv.pdf"}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </CSSTransition>
    </div>
  );
}

export default Content;
