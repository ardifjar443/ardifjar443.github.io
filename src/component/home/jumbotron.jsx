import { useState } from "react";
import { motion } from "framer-motion";
import Web2 from "../card/web2";
import Skills from "../card/skills";
import Writing from "../card/writing";
import Quotes from "../quotes";
const Jumbotron = () => {
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  return (
    <>
      <div className="flex justify-center mb-20 ">
        <div className=" w-1/2 ps-36 p-20">
          <div className="flex gap-4">
            <h1 className=" text-5xl">Hello I'm</h1>
            <h1 className=" text-[#769FCD] text-5xl">Ardi</h1>
          </div>

          <p className="text-2xl text-[#6D6666] mt-[24px]">
            I am quick at learning new things, such as programming languages,
            frameworks, and libraries, which makes me quicker at adapting. I
            also like solving problems in coding.
          </p>
          <p className="text-2xl text-[#6D6666] mt-[24px]">
            I also like solving problems in coding.
          </p>
          <p className="text-2xl text-[#6D6666] mt-[24px]">
            If I find code that has an error, I don't give up and will continue
            to look for a solution to the problem.
          </p>
        </div>
        <div className="w-1/2">
          <div className="grid grid-cols-2 gap-5 p-16 pe-28">
            <Web2
              namaProject={"Quotes Generator"}
              img={"./img/quotes.png"}
              link={"/quote"}
            />
            <Skills
              namaSkill={"Machine Learning"}
              img={"./img/iconML.png"}
              penjelasan={"lorem lkj lkj ancmn aslkdfj "}
            />
            <Writing
              judul={
                "Penerapan Algoritma Machine Learning pada Visualisasi Data"
              }
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
      </div>
    </>
  );
};

export default Jumbotron;
