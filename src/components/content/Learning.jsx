import React, { useState, useEffect, useRef } from "react";
import PDFViewer from "./pdf";

const Learning = ({ activeTab, setActiveTab, pdfSource, setPdfSource }) => {
  const htmlRef = useRef();

  const scroolToHtml = () => {
    htmlRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const slides = [
    {
      title: "Proportions",
      html: "proportions",
      materi: "Algebra",
    },

    { title: "solving for x", html: "solving-for-x", materi: "Algebra" },
    {
      title: "solving for x extra",
      html: "solving-for-x-extra",
      materi: "Algebra",
    },
    {
      title: "Fractions and Decimal",
      html: "Fractions-and-Decimals",
      materi: "Algebra",
    },

    {
      title: "Pandas",
      pdf: "./cheatSheet/Pandas_Cheat_Sheet.pdf",
      materi: "cheatSheet",
    },
    {
      title: "Numpy",
      pdf: "./cheatSheet/Numpy_Cheat_Sheet.pdf",
      materi: "cheatSheet",
    },
    {
      title: "Matplotlib",
      pdf: "./cheatSheet/cheatsheetsMatplotlib.pdf",
      materi: "cheatSheet",
    },
    {
      title: "Matplotlib for beginner",
      pdf: "./cheatSheet/handout-beginner.pdf",
      materi: "cheatSheet",
    },
    {
      title: "Matplotlib for intermediate",
      pdf: "./cheatSheet/handout-intermediate.pdf",
      materi: "cheatSheet",
    },
    {
      title: "Matplotlib tips",
      pdf: "./cheatSheet/handout-tips.pdf",
      materi: "cheatSheet",
    },
    {
      title: "Sympy",
      pdf: "./cheatSheet/gloo13_sympy.pdf",
      materi: "cheatSheet",
    },
    {
      title: "linear algebra with Sympy",
      pdf: "./cheatSheet/linear-algebra-sympy.pdf",
      materi: "cheatSheet",
    },
    {
      title: "Java Script",
      pdf: "./cheatSheet/js.pdf",
      materi: "cheatSheet",
    },
  ];

  const slidesFilter = slides.filter((item) => item.materi === activeTab);

  const [htmlContent, setHtmlContent] = useState(null);

  const loadHtmlContent = (fileName) => {
    fetch(`./${activeTab.toLowerCase()}/${fileName}.html`)
      .then((response) => response.text())
      .then((data) => setHtmlContent(data));
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleChangeSource = (source) => {
    setPdfSource(source); // Ganti sumber PDF saat tombol diklik
  };

  useEffect(() => {
    // Memuat konten HTML saat komponen dimuat
    loadHtmlContent("proportions");
  }, []);

  const handleClick = (fileName) => {
    loadHtmlContent(fileName);
  };

  return (
    <>
      <div className="min-vh-100 d-flex align-items-center">
        <div className="container bg-light rounded-4 border border-5 border-black">
          <p className="mt-3 fw-bold fs-3 text-center">{activeTab}</p>
          <div className="row ">
            {slidesFilter.map((slides, index) => (
              <div className="col-lg-3 col-6 mb-3" key={index}>
                <div className=" d-grid">
                  {activeTab === "Algebra" ? (
                    <button
                      onClick={() => {
                        handleClick(slides.html);
                        scroolToHtml();
                      }}
                      className="btn"
                      style={{ backgroundColor: "#078080", color: "white" }}
                    >
                      {slides.title}
                    </button>
                  ) : (
                    <>
                      <button
                        className="btn"
                        onClick={() => {
                          handleChangeSource(slides.pdf);
                          handleTabClick("pdfViewer");
                        }}
                        style={{ backgroundColor: "#078080", color: "white" }}
                      >
                        {slides.title}
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="" style={{ height: "100px" }}></div>

      {activeTab === "Algebra" ? (
        <>
          <div ref={htmlRef} style={{ height: "100px" }}></div>
          <div className=" p-3 rounded-top-5">
            <div className="container bg-light rounded-5 border border-5 border-black">
              {htmlContent && (
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="container m-5"></div>
      )}
    </>
  );
};

export default Learning;
