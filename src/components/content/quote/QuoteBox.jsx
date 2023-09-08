import React, { useState, useEffect } from "react";
import "./quote.css";

const QuoteBox = ({ quotes, setLanguage, language }) => {
  const [randomQuote, setRandomQuote] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Set isLoading ke true saat halaman dimuat
    const timer = setTimeout(() => {
      setIsLoading(false); // Setelah 1 detik, matikan loading
      getRandomQuote(); // Ambil kutipan acak saat loading selesai
    }, 1000);

    return () => clearTimeout(timer); // Bersihkan timer saat komponen di-unmount
  }, []); // Efek ini hanya dijalankan sekali saat komponen dimuat

  const getRandomQuote = () => {
    setIsLoading(true); // Set isLoading kembali ke true saat tombol ditekan
    const filteredQuotes = quotes.filter((quote) => quote.length < 150);
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);

    setTimeout(() => {
      setRandomQuote(filteredQuotes[randomIndex]);
      setIsLoading(false); // Matikan loading setelah mendapatkan kutipan baru
    }, 1000);

    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    setBackgroundColor(randomColor);
  };

  return (
    <>
      {isLoading ? (
        // Tampilkan elemen loading saat isLoading bernilai true
        <div
          className="min-vh-100 d-flex align-items-center justify-content-center quote-container"
          style={{ backgroundColor: backgroundColor }}
        >
          <div
            className="bg-light p-5 rounded-4 fs-3"
            style={{ color: backgroundColor }}
          >
            {language == "en" ? "Loading..." : "Sebentar.."}
          </div>
        </div>
      ) : (
        <div
          style={{ backgroundColor: backgroundColor }}
          className="min-vh-100 d-flex align-items-center justify-content-center p-3 quote-container"
        >
          <div
            className={`quote ${
              randomQuote ? "fade-in" : ""
            } bg-light p-5 rounded-4`}
          >
            {randomQuote && (
              <div key={randomQuote.id}>
                <p
                  className="text-start fs-4"
                  style={{ color: backgroundColor }}
                >
                  <i className="fa fa-quote-left" id="tandaPetik"></i>{" "}
                  {randomQuote.text}
                </p>
                <p className="text-end fs-5" style={{ color: backgroundColor }}>
                  - {randomQuote.source}
                </p>
              </div>
            )}
            <button
              onClick={getRandomQuote}
              className="btn fs-4 fw-bold"
              style={{ backgroundColor: backgroundColor, color: "white" }}
            >
              {language == "en" ? "New Quote" : "Quote Baru"}
            </button>
          </div>
        </div>
      )}
      <div
        style={{ backgroundColor: backgroundColor }}
        className="quote-container"
      >
        <div
          className="p-2 rounded-top-5 "
          style={{ backgroundColor: "#078080" }}
        >
          <button
            onClick={() => {
              setLanguage("en");
            }}
            className=" fs-4"
            style={
              language === "en"
                ? { backgroundColor: "#078080", color: "white", border: "none" }
                : { backgroundColor: "#078080", border: "none" }
            }
          >
            English
          </button>
          <button
            onClick={() => setLanguage("id")}
            className=" fs-4"
            style={
              language === "id"
                ? { backgroundColor: "#078080", color: "white", border: "none" }
                : { backgroundColor: "#078080", border: "none" }
            }
          >
            Indonesian
          </button>
        </div>
      </div>
    </>
  );
};

export default QuoteBox;
