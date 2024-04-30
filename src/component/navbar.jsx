import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
const Navbar = ({ routes }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Function to handle scroll event

    const handleScroll = () => {
      // Cek posisi scroll saat ini
      if (window.scrollY > 50) {
        setIsVisible(false); // Sembunyikan tombol jika scroll ke bawah lebih dari 100px
      } else {
        setIsVisible(true); // Tampilkan tombol jika scroll ke atas kurang dari atau sama dengan 100px
      }
    };

    // Tambahkan event listener untuk mendengarkan event scroll saat komponen dimount
    window.addEventListener("scroll", handleScroll);

    // Cleanup function untuk menghapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="flex w-full fixed z-50">
        <div className="w-[375px]   mt-8 ms-28">
          <div className=" flex bg-[#B9D7EA]  rounded-[5px] z-[200] bg-opacity-40 backdrop-blur-sm">
            <div className="flex gap-3 w-full items-center justify-center text-[16px] mx-5 m-1">
              <Link
                to={"/"}
                className={`px-3 hover:bg-[#769FCD] rounded-sm ${
                  routes === "/"
                    ? "text-black"
                    : "text-[#769FCD] hover:text-white"
                }`}
              >
                Home
              </Link>

              <Link
                to={"/quote"}
                className={`px-3 hover:bg-[#769FCD] rounded-sm  ${
                  routes === "/project"
                    ? "text-black"
                    : "text-[#6D6666] hover:text-white "
                }`}
              >
                Project
              </Link>

              <button
                className={`px-3 hover:bg-[#769FCD] rounded-sm  ${
                  routes === "/writing"
                    ? "text-black"
                    : "text-[#6D6666] hover:text-white "
                }`}
              >
                Writing
              </button>
              <button
                className={`px-3 hover:bg-[#769FCD] rounded-sm  ${
                  routes === "/skills"
                    ? "text-black"
                    : "text-[#6D6666] hover:text-white "
                }`}
              >
                Skills
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-end items-center">
          <div className="me-32 flex gap-3">
            {isVisible && (
              <>
                <a
                  className="flex gap-2 opacity-50 hover:opacity-100"
                  href="https://medium.com/@ardifjar443"
                  target="_blank"
                >
                  <span>Medium</span>
                  <img
                    src="./img/medium.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </a>
                <a
                  className="flex gap-2 opacity-50 hover:opacity-100"
                  href="https://github.com/ardifjar443"
                  target="_blank"
                >
                  <span>Github</span>
                  <img
                    src="./img/github.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </a>
                <a
                  className="flex gap-2 opacity-50 hover:opacity-100"
                  href="https://www.linkedin.com/in/ardi-fajar-arifin/"
                  target="_blank"
                >
                  <span>Linkedin</span>
                  <img
                    src="./img/linkedin.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
