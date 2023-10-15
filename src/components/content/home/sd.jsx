import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider({ activeTab, setActiveTab }) {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const slides = [
    {
      image: "./img/berita.png",
      title: "Web Berita",
      description:
        "Sebuah web berita interaktif meskipun masih sedikit untuk fitur nya",
      judul: "Web Berita",
      tipe: "WEB",
      teknologi: ["REACT JS", "LARAVEL","TAILWIND"],
      link:  "https://web-berita-lime.vercel.app/", // Ini adalah tautan ke halaman web
    },
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
        handleTabClick("Quotes");
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
    {
      image: "./img/frontEnd.png",
      title: "certification FE FreeCodeCamp",
      description: "source code sertifikasi front end di freecodecamp",
      clickEvent: "sliderClick",
      judul: "certification",
      tipe: "WEB",
      teknologi: ["HTML","CSS","React js"],
      link: "https://github.com/ardifjar443/Front-End-Development-Libraries-certification-freeCodeCamp", // Tidak ada tautan karena ini bukan tautan ke halaman web
    },
    {
      image: "./img/angkaBoom.png",
      title: "Angka Boom",
      description: "Sebuah Project sederhana untuk permainan angka boom dimana user tidak boleh menebak angka boom tersebut",
      clickEvent: "sliderClick",
      judul: "AngkaBoom",
      tipe: "WEB",
      teknologi: ["HTML","CSS","React js"],
      link: "https://ardifjar443.github.io/angka-boom/", // Tidak ada tautan karena ini bukan tautan ke halaman web
    },
  ];

  const styleTech = (value) => {
    const text = value.toUpperCase()
    return {
      backgroundColor : text === "HTML" ? "#FFA500" :
              text === "CSS" ? '#0066CC':
              text === "JAVASCRIPT" ? "#4CBB17": 
              text === "REACT JS" ? "#61DBFB" :
              text === "JAVA" ? "red" : text === "LARAVEL" ? "red": text === "TAILWIND" ? "#06b6d4":  "black" ,
              
              

      color : "white"
              

    }
  }

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
                    className="btn m-2 btnProject"
                    style={styleTech(tech)}
                    
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
