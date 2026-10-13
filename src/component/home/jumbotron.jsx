import { useState } from "react";
import { motion } from "framer-motion";
import Web2 from "../card/web2";
import Skills from "../card/skills";
import Writing from "../card/writing";
import Quotes from "../quotes";
import Foto from "../card/foto";
import SosialCards from "../card/SocialCards";
import AllProjectsCard from "../card/allProjectCard";
const Jumbotron = () => {
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const cvUrl =
    "https://drive.google.com/file/d/1Mu_HuWQw27czvZpqVp8CdVB_VM2ajwLF/view?usp=sharing";

  return (
    <>
      <div className="flex flex-col lg:flex-row md:flex-row justify-center  ">
        <div className=" w-full p-4  lg:py-20 lg:pl-20">
          <div className="lg:flex md:flex  gap-4">
            <h1 className=" text-5xl">Hello I'm</h1>
            <h1 className=" text-[#769FCD] text-5xl">Ardi</h1>
          </div>
          <p>AI/ML Enthusiast · Full-Stack Developer · Network Engineer</p>
          <p className="text-2xl text-[#6D6666] mt-[24px]">
            I build intelligent solutions, modern web applications, and reliable
            network systems. I enjoy turning complex technical problems into
            practical solutions through machine learning, software engineering,
            and network infrastructure. Currently exploring AI-driven
            applications, data-centric systems, and scalable web technologies.
          </p>
          <p className="text-2xl text-[#6D6666] mt-[24px] font-bold">
            Let's build something meaningful.
          </p>

          <SosialCards />

          <div className=" grid grid-cols-1 lg:grid-cols-2  gap-5 py-4  ">
            <Foto
              link={"https://instagram.com/ardi_fj_ar/"}
              foto={"./img/profil.jpeg"}
            />

            <div className="flex flex-col gap-4 h-full">
              {/* Card Download CV */}
              <div className="bg-[#D6E6F2] shadow-lg rounded-[15px] flex-1 min-h-[280px] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lihat dan download CV Ardi Fajar"
                  className="w-full flex items-start justify-between"
                >
                  <div className="mt-[7px] ms-[14px]">
                    <p className="text-sm text-[#729BC8] font-medium">
                      Personal · Resume
                    </p>
                  </div>

                  <div className="w-7 h-7 mt-[7px] me-[10px] bg-[#F7FBFC] rounded-full shadow-inner flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#527DA8]"
                    >
                      <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
                      <path d="M14 3v5h5M9 13h6M9 17h6" />
                    </svg>
                  </div>
                </a>

                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center text-center p-5"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F7FBFC] shadow-sm mb-3 transition-transform duration-300 group-hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#527DA8]"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                      <path d="M14 2v6h6M8 13h8M8 17h5" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-[#24384B]">
                    Download My CV
                  </h3>

                  <p className="mt-2 max-w-[240px] text-sm text-[#526B82]">
                    Explore my experience, technical skills, and selected
                    projects.
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#F7FBFC] px-4 py-2 text-sm font-semibold text-[#365F86] shadow-sm transition-colors group-hover:bg-[#527DA8] group-hover:text-white">
                    View Resume
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Card My Skills */}
              <a
                href="/skills"
                className="group relative flex min-h-[150px] flex-col justify-between overflow-hidden rounded-[15px] bg-[#D6E6F2] p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                aria-label="Lihat halaman Skills"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <p className="text-sm font-medium text-[#729BC8]">
                    Expertise · Skills
                  </p>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F7FBFC] shadow-inner">
                    <svg
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#527DA8] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-center gap-4 mt-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#F7FBFC] text-[#527DA8] shadow-sm transition-all duration-300 group-hover:bg-[#527DA8] group-hover:text-white">
                    <svg
                      viewBox="0 0 24 24"
                      width="30"
                      height="30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
                      <path d="m4.3 7.7 7.7 4.4 7.7-4.4M12 12.1V21" />
                      <path d="m8.5 5 8 4.5" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#24384B]">
                      My Skills
                    </h3>
                    <p className="mt-1 text-sm text-[#526B82]">
                      AI/ML, Web Development & Networking
                    </p>
                    <p className="mt-2 text-xs font-semibold text-[#527DA8]">
                      Explore my expertise →
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className=" hidden lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 p-16   ">
            <Web2
              namaProject={"Web Paramuda Radio"}
              img={"./img/paramuda.png"}
              link={"https://www.paramudaradio.com/"}
            />{" "}
            <Web2
              namaProject={
                "Research on LLM capabilities in translating human language to SQL."
              }
              img={"./img/text2sql.png"}
              link={"https://github.com/ardifjar443/text2sql"}
            />{" "}
            <Web2
              namaProject={"Web Ramafm Radio"}
              img={"./img/rama.png"}
              link={"https://ramafm.com/"}
            />{" "}
          </div>
        </div>
      </div>
      <div className="p-4 lg:px-20  ">
        <AllProjectsCard />
      </div>
    </>
  );
};

export default Jumbotron;
