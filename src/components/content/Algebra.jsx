import React, { useState, useEffect } from "react";

const Algebra = () => {
  const [htmlContent, setHtmlContent] = useState(null);

  const loadHtmlContent = (fileName) => {
    fetch(`./algebra/${fileName}.html`)
      .then((response) => response.text())
      .then((data) => setHtmlContent(data));
  };

  useEffect(() => {
    // Memuat konten HTML saat komponen dimuat
    loadHtmlContent("proportions");
  }, []);

  const handleClick = (fileName) => {
    loadHtmlContent(fileName);
  };

  return (
    <div>
      <div className="" style={{ height: "100px" }}></div>
      <button onClick={() => handleClick("solving-for-x")}>
        Muat Konten 1
      </button>
      <button onClick={() => handleClick("proportions")}>Muat Konten 2</button>
      <div
        className=" p-3 rounded-top-5"
        style={{ backgroundColor: "#feefe8" }}
      >
        <div className="container bg-light rounded-5 border border-5 border-black">
          {htmlContent && (
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Algebra;
