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
      <div className="flex  w-full fixed z-50">
        <div className="navbar px-5">
          <div className="navbar-start lg:hidden">
            <div className="dropdown bg-[#B9D7EA] bg-opacity-40 backdrop-blur-sm rounded-xl">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content  mt-3 w-52 p-2 shadow flex  rounded-[5px] z-[200]  bg-[#B9D7EA] bg-opacity-40 backdrop-blur-sm text-bold`}
              >
                <li>
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
                </li>
                <li>
                  <Link
                    to={"/project"}
                    className={`px-3 hover:bg-[#769FCD] rounded-sm  ${
                      routes === "/project"
                        ? "text-black"
                        : "text-[#6D6666] hover:text-white "
                    }`}
                  >
                    Project
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/writing"}
                    className={`px-3 hover:bg-[#769FCD] rounded-sm  ${
                      routes === "/writing"
                        ? "text-black"
                        : "text-[#6D6666] hover:text-white "
                    }`}
                  >
                    Writing
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/photo"}
                    className={`px-3 hover:bg-[#769FCD] rounded-sm  ${
                      routes === "/photo"
                        ? "text-black"
                        : "text-[#6D6666] hover:text-white "
                    }`}
                  >
                    Photo
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/skills"}
                    className={`px-3 hover:bg-[#769FCD] rounded-sm  ${
                      routes === "/skills"
                        ? "text-black"
                        : "text-[#6D6666] hover:text-white "
                    }`}
                  >
                    Skills
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-start hidden lg:flex ">
            <ul
              className={`menu menu-horizontal px-1 flex  rounded-[5px] z-[200]  ${
                routes == "/quote"
                  ? "bg-white "
                  : isVisible
                  ? "bg-[#B9D7EA] bg-opacity-40 backdrop-blur-sm"
                  : "bg-white  bg-opacity-70 backdrop-blur-lg"
              }`}
            >
              <li>
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
              </li>
              <li>
                <Link
                  to={"/project"}
                  className={`px-3 hover:bg-[#769FCD] rounded-sm  ${
                    routes === "/project"
                      ? "text-black"
                      : "text-[#6D6666] hover:text-white "
                  }`}
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  to={"/writing"}
                  className={`px-3 hover:bg-[#769FCD] rounded-sm  ${
                    routes === "/writing"
                      ? "text-black"
                      : "text-[#6D6666] hover:text-white "
                  }`}
                >
                  Writing
                </Link>
              </li>
              <li>
                <Link
                  to={"/photo"}
                  className={`px-3 hover:bg-[#769FCD] rounded-sm  ${
                    routes === "/photo"
                      ? "text-black"
                      : "text-[#6D6666] hover:text-white "
                  }`}
                >
                  Photo
                </Link>
              </li>

              <li>
                <Link
                  to={"/skills"}
                  className={`px-3 hover:bg-[#769FCD] rounded-sm  ${
                    routes === "/skills"
                      ? "text-black"
                      : "text-[#6D6666] hover:text-white "
                  }`}
                >
                  Skills
                </Link>
              </li>
            </ul>
          </div>
          <div className=" w-full lg:flex md:flex navbar-end hidden  ">
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
      </div>
    </>
  );
};

export default Navbar;
