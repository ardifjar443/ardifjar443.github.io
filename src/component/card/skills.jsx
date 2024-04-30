import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Skills = ({ namaSkill, img, penjelasan }) => {
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [belakang, setBelakang] = useState(false);

  useEffect(() => {
    let animationTimeout;

    if (isClick) {
      // Ketika isClick true, jalankan animasi in
      // Hentikan animasi setelah 2 detik
      animationTimeout = setTimeout(() => {
        setIsClick(false); // Set isClick menjadi false setelah 2 detik
        setBelakang(!belakang);
      }, 500);
    }

    return () => {
      // Bersihkan timeout jika komponen unmount sebelum animasi selesai
      clearTimeout(animationTimeout);
    };
  }, [isClick]);
  return (
    <>
      <motion.div
        className=" z-0"
        whileTap={{
          scale: 1.1,
        }}
        onClick={() => {
          setIsClick(!isClick);
        }}
      >
        <div
          className={`bg-[#D6E6F2] hover:bg-[#769FCD]  rounded-[15px]  flex  items-center flex-col shadow-lg  transition duration-300 text-[#769FCD] hover:text-[#F7FBFC] h-full ${
            isClick
              ? "animate__animated animate__flipOutY"
              : "animate__animated animate__flipInY"
          }`}
          onMouseOver={() => {
            setX(1.1);
            setY(1.1);
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
          <a className="w-full flex ">
            <div className="mt-[7px] w-full ms-[14px]  ">
              <p className="text-[14px]">Skills . {namaSkill}</p>
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
                      Flip
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-[#D6E6F2] text-[#D6E6F2] p-1 rounded-md">
                    Flip
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
                      src="./img/repeat.png"
                      alt=""
                      className="w-8 bg-fit "
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </a>
          <div className=" h-full w-full  flex items-center  ">
            {belakang ? (
              <>
                <div className="p-5">
                  <p>{penjelasan}</p>
                </div>
              </>
            ) : (
              <motion.div
                className="box flex justify-center"
                animate={{ scale: [null, x, y] }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img}
                  alt=""
                  className=" rounded-tl-md w-1/2 rounded-br-md m-5"
                />
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
