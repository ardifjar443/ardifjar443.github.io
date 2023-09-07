// src/components/Footer.js
import React, { useState } from "react";

function Contact({ activeTab, setActiveTab }) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsFormLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwaCi0prWnW8qFTYjbgD9-8JzDBuPk2mWWGsPYiWAjrh1XsOFVd_2NaDORwXwtD0AGa/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setIsFormLoading(false);
        setIsAlertVisible(true);
        form.reset();
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsFormLoading(false);
    }
  };
  return (
    <>
      <div className="   min-vh-100 d-flex justify-content-center align-items-center">
        <div className="bg-light container border border-5 border-black rounded-3 p-5">
          <h1 className="modal-title" style={{ color: "#183D3D" }}>
            Selamat Datang!
          </h1>
          <p className="modal-desc">Mari isi form dibawah ini</p>
          <div
            className={`alert alert-dismissible fade ${
              isAlertVisible ? "show" : "d-none"
            } my-alert text-center`}
            role="alert"
            style={{ backgroundColor: "#078080", color: "white" }}
          >
            <strong>Terima Kasih</strong> pesan anda sudah diterima{" "}
            <button
              type="button"
              className="btn-close"
              onClick={() => setIsAlertVisible(false)}
              aria-label="Close"
            ></button>
          </div>
          <form name="form" onSubmit={handleSubmit} className="">
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">
                name
              </label>
              <input
                type="text"
                className="form-control"
                id="nama"
                aria-describedby="name"
                name="nama(kontak)"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="email"
                name="email(kontak)"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="pesan" className="form-label">
                pesan
              </label>
              <textarea
                className="form-control"
                id="pesan"
                rows="3"
                name="pesan(kontak)"
                required
              ></textarea>
            </div>
            <div class="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-kirim mb-5"
                style={{ backgroundColor: "#078080", color: "white" }}
                size="lg"
              >
                {isFormLoading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </>
                ) : (
                  "kirim"
                )}
              </button>
              <button
                className="btn btn-loading d-none"
                size="lg"
                type="button"
                disabled
                style={{ backgroundColor: "#078080", color: "white" }}
              >
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className=" d-flex justify-content-center">
        <div className="container">
          <div className="d-grid gap-2">
            <a
              className={`fs-3 btn border border-black border-3 ${
                activeTab === "home"
                  ? "text-light rounded-2 p-2 border border-5 border-black"
                  : ""
              }`}
              href="#"
              id="content"
              onClick={() => handleTabClick("home")}
              style={{ backgroundColor: "#078080", color: "white" }}
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
