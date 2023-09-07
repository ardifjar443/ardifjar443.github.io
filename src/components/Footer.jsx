import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#feefe8" }}>
        <footer className="footer rounded-5">
          <div className="container">
            <br />
            <div className="row">
              <div className="col-md mb-5">
                <div className="footer-col">
                  <h4>Quotes</h4>
                  <p>
                    "Mulai setiap harimu dengan pikiran positif dan hati yang
                    bersyukur." - Roy T. Bennett.
                  </p>
                </div>
              </div>
              <div className="col-md mb-3">
                <div className="footer-col">
                  <h4>follow us</h4>
                  <div className="social-links">
                    <a
                      href="https://www.instagram.com/ardi_fj_ar/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.kaggle.com/ardifajararifin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-kaggle"></i>
                    </a>
                    <a
                      href="https://github.com/ardifjar443"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <footer
        className="text-center pb-1 pt-3 text-light rounded-top-5"
        style={{ backgroundColor: "#078080" }}
      >
        <p>
          Create with <i className="bi bi-heart-fill"></i> by{" "}
          <a
            href="https://www.instagram.com/ardi_fj_ar/"
            className="text-light fw-bold"
            style={{ textDecoration: "none" }}
          >
            Ardi Fajar Arifin
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
