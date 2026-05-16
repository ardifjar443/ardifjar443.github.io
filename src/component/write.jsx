import Writing from "./card/writing";

const Write = () => {
  return (
    <>
      <div className="pt-20 min-h-screen">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:px-28 px-4 ">
          <Writing
            judul={"Penerapan Algoritma Machine Learning pada Visualisasi Data"}
            tanggal={"Feb 12, 2024"}
            isi={
              " Machine Learning adalah cabang dari AI yang dimana kita mengajari machine  ......"
            }
            link={
              "https://medium.com/@ardifjar443/penerapan-algoritma-machine-learning-pada-visualisasi-data-9abdcc874e63"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Write;
