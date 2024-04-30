import { motion, useScroll } from "framer-motion";
import { useState } from "react";

const Foto = ({ foto, link }) => {
  const [isHover, setIsHover] = useState(false);
  const [x, setX] = useState(-40);
  const [y, setY] = useState(1);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  return (
    <>
      <motion.div
        whileTap={{ scale: 1.1 }}
        className="z-40 bg-[#769FCD] rounded-[15px]"
      >
        <a
          className=" w-full h-full  "
          onMouseOver={() => {
            setX(0);
            setY(1.05);
            setA(-10);
            setB(-5);
            setIsHover(true);
          }}
          onMouseOut={() => {
            setX(-40);
            setY(1);
            setA(0);
            setB(0);
            setIsHover(false);
          }}
        >
          <div className="w-full flex  ">
            <div className="mt-[7px] w-full ms-[14px]  ">
              <p className="text-[14px] text-[#F7FBFC]">Photo . instagram</p>
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
              <div className=" w-7 h-7 mt-[7px] me-[10px] bg-[#F7FBFC] rounded-full shadow-inner  ">
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
            className=" w-full h-full rounded-[15px] z-40"
            animate={{ y: x }}
            transition={{ duration: 0.3 }}
          >
            <div
              style={{ backgroundImage: `url(${foto})` }}
              className="w-full h-full rounded-[15px] bg-cover"
            ></div>
          </motion.div>
        </a>
      </motion.div>
    </>
  );
};

export default Foto;
