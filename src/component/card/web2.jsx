import { motion } from "framer-motion";
import { useState } from "react";

const Web2 = ({ namaProject, img, link }) => {
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <motion.div
        whileTap={{
          scale: 1.1,
        }}
        className="col-span-2 z-0"
      >
        <a
          href={link}
          target="_blank"
          className="  bg-[#D6E6F2] hover:bg-[#8ba7c7]  rounded-[15px]  flex  items-center flex-col shadow-lg  transition duration-300 text-[#769FCD] hover:text-[#F7FBFC] "
          onMouseOver={() => {
            setX(1.05);
            setY(1.05);
            setA(-10);
            setB(-5);
            setIsHover(true);
          }}
          onMouseOut={() => {
            setX(1);
            setY(1);
            setA(0);
            setB(0);
            setIsHover(false);
          }}
        >
          <div className="w-full flex z-50">
            <div className="mt-[7px] w-full ms-[14px]  ">
              <p className="text-[14px]">Project . {namaProject}</p>
            </div>
            <div className="flex  w-full justify-end">
              <div className="flex items-center me-2 p-1">
                {isHover ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-[#D6E6F2] text-black p-1 rounded-md">
                      View Project{" "}
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-[#D6E6F2] text-[#D6E6F2] p-1 rounded-md">
                    View Project{" "}
                  </div>
                )}
              </div>
              <div className=" w-7 h-7 mt-[7px] me-[10px] bg-[#F7FBFC] rounded-full shadow-inner z-50">
                {isHover && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.1 }}
                  >
                    <img
                      src="./img/right-up.png"
                      alt=""
                      className="w-8 bg-fit"
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
          <div className=" h-full w-full  flex items-end justify-end z-0  ">
            <motion.div
              className="box flex justify-center mt-2"
              // animate={{ x, y, rotate }}
              // transition={{ type: "spring" }}
              animate={{ scale: [null, x, y] }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img}
                alt=""
                className={` w-3/4 rounded-[15px] z-0 ${
                  isHover &&
                  "rounded-[15px] rounded-tl-[15px] transition duration-300"
                }`}
              />
            </motion.div>
          </div>
        </a>
      </motion.div>
    </>
  );
};

export default Web2;
