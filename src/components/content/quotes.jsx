import React, { useState, useEffect } from "react";

const Quotes = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("./quote/index.html")
      .then((response) => response.text())
      .then((data) => setHtmlContent(data));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Quotes;
