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
    <div className=" relative">
      <div
        style={{ backgroundColor: backgroundColor }}
        className="min-h-screen flex items-center justify-center p-3 quote-container "
      >
        <div
          className={`quote ${
            randomQuote ? "fade-in" : ""
          } bg-white p-5 rounded-2xl`}
        >
          {randomQuote && (
            <div key={randomQuote.id}>
              <p
                className="text-start fs-4 "
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
            className="p-2 rounded-xl"
            style={{ backgroundColor: backgroundColor, color: "white" }}
          >
            New Quote
          </button>
        </div>
      </div>
      <div className="quote-container absolute bottom-0 left-0 right-0">
        <div className="p-2 rounded-top-5 gap-6  ">
          <button
            onClick={() => setLanguage("en")}
            className={`fs-4 ms-7 me-7 p-2 rounded-xl ${
              language == "en" ? "bg-white " : ""
            }`}
            style={
              language == "en"
                ? { color: "black", border: "none" }
                : { color: "white", border: "none" }
            }
          >
            English
          </button>
          <button
            onClick={() => setLanguage("id")}
            className={`fs-4 ms-7 me-7 p-2 rounded-xl ${
              language == "id" ? "bg-white " : ""
            }`}
            style={
              language == "id"
                ? { color: "black", border: "none" }
                : { color: "white", border: "none" }
            }
          >
            Indonesian
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
