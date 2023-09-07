import React, { useState, useEffect } from "react";

const Percobaan = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("./algebra/proportions.html")
      .then((response) => response.text())
      .then((data) => setHtmlContent(data));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Percobaan;
