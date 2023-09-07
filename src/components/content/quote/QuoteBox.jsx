import React from "react";

const QuoteBox = ({ text, author, onClick }) => {
  return (
    <div
      className="container min-vh-100 d-flex justify-content-center align-items-center"
      id="quote-box"
    >
      <div
        className="justify-content-center align-items-center "
        style={{ backgroundColor: "white", width: "90%" }}
      >
        <div className="text fs-3 m-5 mb-2" id="quote-text">
          <i className="fa fa-quote-left" id="tandaPetik"></i>{" "}
          <span id="text">{text}</span>
        </div>
        <div
          className="author justify-content-end d-flex me-5 fs-5"
          id="author"
        >{`~${author}`}</div>
        <div className="buttons mb-2 ms-2">
          <div className="d-flex m-3 d-flex justify-content-center align-items-center mt-5">
            <div className="w-100">
              <button
                className="btn mb-2"
                style={{ color: "white", width: "50px", height: "40px" }}
                onClick={onClick}
              >
                New quotes
              </button>
              {/* Tambahkan tombol-tombol lain di sini */}
            </div>
            <div className="" style={{ width: "50%", justifyContent: "end" }}>
              <button
                className="btn button"
                style={{ color: "white", height: "100%", width: "100%" }}
              >
                Lihat Content
              </button>
            </div>
          </div>
          <div
            className="footer justify-content-center align-item-center d-flex p-3"
            id="footer"
            style={{ color: "white" }}
          >
            By Ardi Fajar Arifin
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
