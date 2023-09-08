import React, { useState, useEffect } from "react";
import "./quote.css";

const QuoteBox = ({ quotes, setLanguage, language }) => {
  const [randomQuote, setRandomQuote] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("white");

  const getRandomQuote = () => {
    const filteredQuotes = quotes.filter((quote) => quote.length < 150);
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);

    setRandomQuote(filteredQuotes[randomIndex]);

    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    setBackgroundColor(randomColor);
  };

  useEffect(() => {
    getRandomQuote();
  }, [quotes]);

  return (
    <>
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
              <p className="text-start fs-4" style={{ color: backgroundColor }}>
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
            New Quote
          </button>
        </div>
      </div>
      <div
        style={{ backgroundColor: backgroundColor }}
        className="quote-container"
      >
        <div
          className="p-2 rounded-top-5 "
          style={{ backgroundColor: "#078080" }}
        >
          <button
            onClick={() => setLanguage("en")}
            className=" fs-4"
            style={
              language == "en"
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
              language == "id"
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
