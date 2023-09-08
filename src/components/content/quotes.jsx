import React, { useState, useEffect } from "react";
import QuotesBox from "./quote/QuoteBox";

function Quotes({ activeTab, setActiveTab }) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [data, setData] = useState(null);
  const [language, setLanguage] = useState("en");

  const jsonLinks = {
    en: "https://gist.githubusercontent.com/ardifjar443/c576fba951542cf9fbb43d2e22aaa4cd/raw/85ab102fd4be69ba5db130e94fe1e27bff81ba75/english.json",
    id: "https://gist.githubusercontent.com/ardifjar443/e7aaa6932e1a45211789600a3ffa093e/raw/a619065545f32882d4f353c2b26e53be5a01c5c3/indonesian.json",
  };

  const fetchData = (language) => {
    fetch(jsonLinks[language])
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetchData(language);
  }, [language]);

  return (
    <>
      <div className="App">
        {data && (
          <QuotesBox
            quotes={data.quotes}
            setLanguage={setLanguage}
            language={language}
          />
        )}
      </div>
      <div style={{ backgroundColor: "#078080" }}>
        <div className=" d-grid">
          <button
            className="rounded-top-5 p-2 fs-3"
            style={{ backgroundColor: "#feefe8", border: "none" }}
            onClick={() => handleTabClick("home")}
          >
            Back To Home
          </button>
        </div>
      </div>
    </>
  );
}

export default Quotes;
