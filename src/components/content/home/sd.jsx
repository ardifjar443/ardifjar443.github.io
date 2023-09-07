import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider({ activeTab, setActiveTab }) {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const slides = [
    {
      image: "./img/quotes.png",
      title: "Quotes Generator",
      description:
        "Ini adalah sebuah generator quotes yang terdiri dari dua bahasa yaitu Indonesia dan Inggris",
      judul: "Quotes",
      tipe: "WEB",
      teknologi: ["HTML", "CSS", "JavaScript"],
      link: () => {
        // Fungsi yang akan dipanggil saat diklik
        handleTabClick("percobaan");
      }, // Ini adalah tautan ke halaman web
    },
    {
      image: "./img/projectRental.png",
      title: "Tugas PBO",
      description: "Ini adalah sebuah Aplikasi untuk rental Mobil",
      clickEvent: "sliderClick",
      judul: "Tugas",
      tipe: "Desktop APP",
      teknologi: ["Java", "SQL"],
      link: "https://github.com/ardifjar443/rentalMobil", // Tidak ada tautan karena ini bukan tautan ke halaman web
    },
    {
      image: "./img/webPorto.png",
      title: "Web Portofolio",
      description: "Yaps web ini sendiri",
      clickEvent: "sliderClick",
      judul: "Portofolio",
      tipe: "WEB",
      teknologi: ["HTML", "CSS", "JavaScript", "React js"],
      link: null,
    },
  ];

  return (
    <Carousel showIndicators={false} showStatus={false} showThumbs={false}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div className="bg-light rounded-4 isiProject">
            <div className="p-3">
              <span className="judul fs-3 fw-bold">{slide.judul}</span>
              <span className="tipe fs-5">{slide.tipe}</span>
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="fotoProject"
              />
              <p className="fs-5 fw-bold">{slide.title}</p>
              <p>{slide.description}</p>

              {slide.link && typeof slide.link === "string" ? (
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  <div className="d-grid gap-2">
                    <button
                      className="btn"
                      style={{ color: "white", backgroundColor: "#078080" }}
                    >
                      Lihat Project
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
                      style={{ color: "white", backgroundColor: "#078080" }}
                    >
                      lihat Project
                    </button>
                  </div>
                )
              )}
            </div>
            <div className=" listStack rounded-bottom-3 p-1 text-light listBtnProject">
              <div>
                {slide.teknologi.map((tech, techIndex) => (
                  <a
                    key={techIndex}
                    className="btn m-2 btn-secondary btnProject"
                  >
                    {tech}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Slider;
