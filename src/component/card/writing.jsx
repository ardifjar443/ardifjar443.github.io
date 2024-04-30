import { motion, useScroll } from "framer-motion";
import { useState } from "react";
const Writing = ({ judul, tanggal, isi, link }) => {
  const [isHover, setIsHover] = useState(false);
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <>
      <motion.div
        onHoverStart={(e) => {
          setIsHover(true);
          setX(1.05);
          setY(1.05);
          setA(-10);
          setB(-5);
        }}
        onHoverEnd={(e) => {
          setX(1);
          setY(1);
          setA(0);
          setB(0);
          setIsHover(false);
        }}
        whileTap={{ scale: 1.1 }}
      >
        <a
          className="bg-[#D6E6F2] hover:bg-[#769FCD]  rounded-[15px]   flex  items-center flex-col shadow-lg transition duration-300 text-[#769FCD] hover:text-[#F7FBFC] h-full"
          href={link}
          target="_blank"
        >
          <div className="w-full flex ">
            <div className="mt-[7px] w-full ms-[14px]  ">
              <p className="text-[14px]">Writing . Blog</p>
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
                      View
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-[#D6E6F2] text-[#D6E6F2] p-1 rounded-md">
                    View
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
          <motion.div
            className="box flex justify-end items-end h-full  mt-2"
            // animate={{ x, y, rotate }}
            // transition={{ type: "spring" }}
            animate={{ scale: [null, x, y] }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={` p-2 rounded-[15px]  mt-2 transition duration-300  ${
                isHover && "bg-white shadow-md"
              }`}
            >
              <h1 className="text-[16px] text-black font-bold">{judul}</h1>
              <p className="text-[14px] text-[#827B7B]  ">{tanggal}</p>
              <p className="text-black text-[16px] text-justify">{isi}</p>
            </div>
          </motion.div>
        </a>
      </motion.div>
    </>
  );
};

export default Writing;
