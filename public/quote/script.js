var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

console.log(document.getElementById("bahasa").value);

document.addEventListener("DOMContentLoaded", function () {
  let jsonSources = {
    IND: "https://gist.githubusercontent.com/ardifjar443/e7aaa6932e1a45211789600a3ffa093e/raw/a619065545f32882d4f353c2b26e53be5a01c5c3/indonesian.json",
    ENG: "https://gist.githubusercontent.com/ardifjar443/c576fba951542cf9fbb43d2e22aaa4cd/raw/85ab102fd4be69ba5db130e94fe1e27bff81ba75/english.json",
  };
  let apiURL = jsonSources.IND;

  const dataContainer = document.getElementById("data-container");
  const randomButton = document.getElementById("random-button");
  const indonesia = document.getElementById("indonesia");
  const inggris = document.getElementById("inggris");

  let quotesData = [];

  // Fungsi untuk menampilkan kutipan secara acak yang panjangnya kurang dari 200 karakter
  function displayRandomQuote() {
    const filteredQuotes = quotesData.quotes.filter(
      (quote) => quote.length < 100
    );

    if (filteredQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
      const randomQuote = filteredQuotes[randomIndex];
      var text = document.getElementById("text");
      var author = document.getElementById("author");

      text.textContent = randomQuote.text;
      author.textContent = "~" + randomQuote.source;
      changeColors();
    } else {
      dataContainer.innerHTML = "Tidak ada kutipan yang sesuai kriteria.";
    }
  }
  function changeJSONSource() {
    var buttonElement = document.getElementById("bahasa");

    let newSource = buttonElement.textContent;

    if (newSource && jsonSources[newSource]) {
      apiURL = jsonSources[newSource];
      fetchJSONData();
    } else {
      alert("Invalid language or source.");
    }
  }

  function fetchJSONData() {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        quotesData = data;
        displayRandomQuote(data);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }

  // Mengambil data JSON dari URL
  // fetch(apiURL)
  //   .then(response => response.json())
  //   .then(data => {
  //     quotesData = data; // Simpan data JSON dalam variabel
  //     displayRandomQuote(); // Tampilkan kutipan pertama kali
  //   })
  //   .catch(error => console.error(error));

  // Mengganti kutipan secara acak ketika tombol ditekan
  fetchJSONData();
  randomButton.addEventListener("click", displayRandomQuote);
  indonesia.addEventListener("click", changeJSONSource);
  inggris.addEventListener("click", changeJSONSource);
});

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function changeColors() {
  const newBackgroundColor = getRandomColor();

  document.body.style.backgroundColor = newBackgroundColor;
  const colorButtons = document.getElementsByClassName("button");
  for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].style.backgroundColor = newBackgroundColor;
  }
  document.getElementById("text").style.color = newBackgroundColor;
  document.getElementById("author").style.color = newBackgroundColor;

  document.getElementById("tandaPetik").style.color = newBackgroundColor;
  document.getElementById("footer").style.backgroundColor = newBackgroundColor;
  document.getElementById("bahasa").style.backgroundColor = newBackgroundColor;
}

function changeBahasa(bahasa1) {
  // document.getElementById(bahasa).value = bahasa1;
  var buttonElement = document.getElementById("bahasa");
  buttonElement.textContent = bahasa1;
}
