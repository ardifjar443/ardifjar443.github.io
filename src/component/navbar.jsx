import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { House, FolderGit2, PenSquare, Camera, Wrench } from "lucide-react";

const Navbar = ({ routes }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // DETECT SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // MENU
  const menus = [
    {
      name: "Home",
      path: "/",
      icon: <House size={20} />,
    },
    {
      name: "Project",
      path: "/project",
      icon: <FolderGit2 size={20} />,
    },
    // {
    //   name: "Writing",
    //   path: "/writing",
    //   icon: <PenSquare size={20} />,
    // },
    // {
    //   name: "Photo",
    //   path: "/photo",
    //   icon: <Camera size={20} />,
    // },
    {
      name: "Skills",
      path: "/skills",
      icon: <Wrench size={20} />,
    },
  ];

  if (routes === "/") {
    return (
      <header className="portfolio-nav">
        <a className="portfolio-brand" href="#home">ARDI FAJAR</a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#experience">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#photography">Photography</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="portfolio-nav-cv" href="/cv/cv.pdf" download>Download CV</a>
      </header>
    );
  }

  if (routes === "/project" || routes === "/skills") {
    return (
      <header className="portfolio-nav">
        <Link className="portfolio-brand" to="/">ARDI FAJAR</Link>
        <nav aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/project" aria-current={routes === "/project" ? "page" : undefined}>
            Projects
          </Link>
          <Link to="/skills" aria-current={routes === "/skills" ? "page" : undefined}>
            Skills
          </Link>
        </nav>
        <a className="portfolio-nav-cv" href="/cv/cv.pdf" download>Download CV</a>
      </header>
    );
  }

  return (
    <>
      {/* ========================= */}
      {/* DESKTOP NAVBAR */}
      {/* ========================= */}

      <div className="hidden lg:flex fixed top-0 w-full z-50 justify-center ">
        <motion.div
          animate={{
            y: isScrolled ? 0 : 10,
            opacity: 1,
          }}
          transition={{ duration: 0.3 }}
          className={`
            flex
            items-center
            gap-2
            px-3
            py-2
            rounded-2xl
            transition-all
            duration-500
            ${
              isScrolled
                ? "bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl"
                : "bg-transparent border border-transparent shadow-none"
            }
          `}
        >
          {menus.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`
                px-5
                py-3
                rounded-xl
                text-sm
                transition-all
                duration-300
                flex
                items-center
                gap-2
                ${
                  routes === item.path
                    ? isScrolled
                      ? "bg-white text-black"
                      : "bg-white/20 text-black"
                    : isScrolled
                      ? "text-white hover:bg-white/10"
                      : "text-black hover:bg-black/5"
                }
              `}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </motion.div>
      </div>

      {/* ========================= */}
      {/* MOBILE NAVBAR */}
      {/* ========================= */}

      <div
        className="
          fixed
          bottom-4
          left-1/2
          -translate-x-1/2
          z-50
          lg:hidden
          w-[95%]
          max-w-md
        "
      >
        <div
          className="
            bg-black/40
            backdrop-blur-2xl
            border
            border-white/10
            rounded-3xl
            px-2
            py-2
            shadow-2xl
          "
        >
          <div className="flex justify-around items-center">
            {menus.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-1
                  w-full
                "
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`
                    flex
                    flex-col
                    items-center
                    justify-center
                    px-4
                    py-2
                    rounded-2xl
                    transition-all
                    duration-300
                    ${
                      routes === item.path
                        ? "bg-white text-black"
                        : "text-white"
                    }
                  `}
                >
                  {item.icon}

                  <span className="text-[10px] mt-1">{item.name}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
