import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  const slides = [
    {
      image: "./img/quotes.png",
      title: "Quotes Generator",
      description:
        "Ini adalah sebuah generator quotes yang terdiri dari dua basa yaitu indonesia dan inggris",
      judul: "Quotes",
      tipe: "WEB",
      teknologi: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: "./img/quotes.png",
      title: "Tugas",
      description: "This is a second description",
      clickEvent: "sliderClick",
      judul: "Tugas",
      tipe: "WEB",
      teknologi: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: "./img/quotes.png",
      title: "This is a third title",
      description: "This is a third description",
      clickEvent: "sliderClick",
      judul: "Quotes",
      tipe: "WEB",
      teknologi: ["HTML", "CSS", "JavaScript"],
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
              <p>{slide.title}</p>
              <p>{slide.description}</p>
              <div className="d-grid gap-2">
                <a
                  className="btn"
                  style={{ color: "white", backgroundColor: "#078080" }}
                >
                  lihat Project
                </a>
              </div>
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
