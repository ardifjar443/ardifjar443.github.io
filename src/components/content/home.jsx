// src/components/Footer.js
import React from "react";
import "./home/Home.css";
import Slider from "./home/sd";
import Skills from "./home/Skills";
import Content from "./home/Content";

function Home() {
  return (
    <>
      <section
        className="min-vh-100 d-flex align-items-center py-lg-0"
        id="home"
      >
        <div className="container">
          <div className="row align-items-center g-lg-0">
            <div className="col-lg-7 order-lg-1 order-2 container-nama rounded-5 fs-4 p-3 border border-black border-5">
              <p className="text-muted fs-5 mt-1 ms-2">Hello I'm</p>
              <h1
                className="fs-1 fw-bold"
                style={{ color: "#232323" }}
                id="nama"
              >
                Ardi Fajar Arifin
              </h1>
              <p style={{ color: "#222525" }} className="fs-4">
                Mahasiswa IT
              </p>
              <a
                href="#about"
                className="btn fs-5"
                style={{ backgroundColor: "#078080", color: "white" }}
                id="ehe"
              >
                About Me
              </a>
            </div>
            <div className="col-lg-5 order-lg-2 order-1 mb-5 mt-5 rounded-5 container-foto border border-black border-5">
              <img
                className="my-foto"
                alt="My Photo"
                id="myFoto"
                src="./img/profil.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="about p-5 text-center rounded-top-5 mt-5"
        style={{ backgroundColor: "#feefe8" }}
        id="about"
      >
        <div className="r rounded-5">
          <br />
          <div className="row">
            <div className="col-md mb-5 rounded-5">
              <div className="container">
                <p className="fs-1">ABOUT ME</p>
                <p
                  style={{ height: "300px" }}
                  className="d-flex align-items-center"
                >
                  Aku adalah seorang ultramen yang tinggal di indonesia lebih
                  tepat nya saya tinggal di garut yang sedang menyamar menjadi
                  mahasiswa di sebuah universitas di Bandung yang pastinya bukan
                  ITB atau UNPAD, pada saat malam hari saya berubah menjadi
                  ultramen dan mencari kejahatan di seluruh dunia.
                </p>
              </div>
            </div>
            <div className="col-md mb-3">
              <p className="fs-1">Project</p>
              <Slider />
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <Content />
    </>
  );
}

export default Home;
