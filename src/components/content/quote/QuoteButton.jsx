import React from "react";

const QuoteButton = ({ onClick, bahasa }) => {
  return (
    <div className="btn-group mb-2">
      <button
        type="button"
        className="btn dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        id="bahasa"
        style={{ color: "white", height: "40px" }}
      >
        {bahasa}
      </button>
      <ul className="dropdown-menu" style={{ width: "50px !important" }}>
        <li>
          <a
            className="dropdown-item"
            onClick={() => onClick("IND")}
            id="indonesia"
          >
            IND
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            onClick={() => onClick("ENG")}
            id="inggris"
          >
            ENG
          </a>
        </li>
        {/* Tambahkan bahasa lain di sini jika diperlukan */}
      </ul>
    </div>
  );
};

export default QuoteButton;
