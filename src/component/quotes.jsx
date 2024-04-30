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
  const [language, setLanguage] = useState("id");
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state isLoading

  const jsonLinks = {
    en: "https://gist.githubusercontent.com/ardifjar443/c576fba951542cf9fbb43d2e22aaa4cd/raw/85ab102fd4be69ba5db130e94fe1e27bff81ba75/english.json",
    id: "https://gist.githubusercontent.com/ardifjar443/e7aaa6932e1a45211789600a3ffa093e/raw/a619065545f32882d4f353c2b26e53be5a01c5c3/indonesian.json",
  };

  const fetchData = (language) => {
    setIsLoading(true); // Set isLoading menjadi true saat memulai pengambilan data

    fetch(jsonLinks[language])
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false); // Set isLoading menjadi false saat data berhasil diambil
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false); // Set isLoading menjadi false jika terjadi kesalahan
      });
  };

  useEffect(() => {
    fetchData(language);
  }, [language]);

  return (
    <>
      <div className="App min-h-screen">
        {isLoading ? ( // Tampilkan pesan loading jika isLoading true
          <div
            className="min-vh-100 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#feefe8" }}
          >
            <div className="bg-light text-dark fs-3 p-5 rounded-4">
              {language === "en" ? "Loading..." : "Tunggu Sebentar..."}
            </div>
          </div>
        ) : (
          data && (
            <QuotesBox
              quotes={data.quotes}
              setLanguage={setLanguage}
              language={language}
            />
          )
        )}
      </div>
      <div
        style={
          isLoading
            ? { backgroundColor: "#feefe8" }
            : { backgroundColor: "#078080" }
        }
      ></div>
    </>
  );
}

export default Quotes;
