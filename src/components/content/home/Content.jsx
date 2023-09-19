import React, { useState } from "react";
import "./project.css";

const Content = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const handleViewMore = () => {
    setIsExpanded(!isExpanded);
    const expandableDiv = document.getElementById("expandableDiv");
    const viewMoreBtn = document.getElementById("viewMoreBtn");

    if (!isExpanded) {
      expandableDiv.style.maxHeight = expandableDiv.scrollHeight + "px";
      viewMoreBtn.textContent = "View Less";
    } else {
      expandableDiv.style.maxHeight = "450px"; // Initial height
      viewMoreBtn.textContent = "View More";
      window.location.href = "#content";
    }
  };
  const slides = [
    {
      image: "./img/headhunting.png",
      title: "CV Bisa Dilihat atau Didownload",
      link: () => {
        handleTabClick("cv");
        scrollToTop();
      },
    },
    {
      image: "./img/algebra.png",
      title: "Belajar Algebra Menggunakan Python",
      link: () => {
        // Fungsi yang akan dipanggil saat diklik
        handleTabClick("Algebra");
        scrollToTop();
      },
    },
    {
      image: "./img/cheating.png",
      title: "Cheat Sheets",
      link: () => {
        handleTabClick("cheatSheet");
        scrollToTop();
      },
    },
    {
      image: "./img/machine-learning.png",
      title: "Belajar Machine Learning",
      link: null,
    },
  ];

  return (
    <>
      <div id="content">
        <br />
        <br />
      </div>
      <section
        className="about text-center rounded-top-5 pe-5 ps-5"
        style={{ backgroundColor: "#feefe8" }}
      >
        <div>
          <br />
          <h1 className="fw-bold text-center" style={{ color: "#232323" }}>
            Contents
          </h1>
          <div className="expandable-div" id="expandableDiv">
            <div className="row">
              {slides.map((slide, index) => (
                <div className="col-md-6 mb-3" key={index}>
                  <div className="">
                    <div className="card-body bg-light rounded-4 p-4">
                      <div
                        className="  fs-5 w-100 text-start mb-3 text-center"
                        href="./cv/ilovepdf_merged.pdf"
                        style={{ height: "300px" }}
                      >
                        <h4 className="card-title mb-3">{slide.title}</h4>
                        <img
                          src={slide.image}
                          width="150px"
                          height="150px"
                          alt=""
                          className=""
                        />
                        <div className="d-grid gap-2 mt-5">
                          {slide.link && typeof slide.link === "string" ? (
                            <a
                              href={slide.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="d-grid gap-2">
                                <button
                                  className="btn"
                                  style={{
                                    color: "white",
                                    backgroundColor: "#078080",
                                  }}
                                >
                                  Lihat Content
                                </button>
                              </div>
                            </a>
                          ) : (
                            slide.link &&
                            typeof slide.link === "function" && (
                              <div className="d-grid gap-2">
                                <button
                                  onClick={slide.link}
                                  className="btn"
                                  style={{
                                    color: "white",
                                    backgroundColor: "#078080",
                                  }}
                                >
                                  lihat Content
                                </button>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <button
            className="btn text-light mt-3 mb-5"
            id="viewMoreBtn"
            style={{ backgroundColor: "#f45d48" }}
            onClick={handleViewMore}
          >
            {isExpanded ? "View Less" : "View More"}
          </button>
        </div>
      </section>
    </>
  );
};

export default Content;
