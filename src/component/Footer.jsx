const Footer = () => {
  return (
    <>
      <div className=" mt-10 pt-10 flex justify-center items-center flex-col gap-4">
        <h1 className="text-[#769FCD] text-2xl">
          Ardi Fajar Arifin{" "}
          <span className="bg-[#769FCD] text-[#F7FBFC] p-1 rounded-lg hover:bg-[#F7FBFC] hover:text-[#769FCD] transition duration-300 ">
            Portfolio
          </span>
        </h1>
        <span className="text-center">
          "The death of a person is not just some number. Every one of their
          lives must have some meaning.” ~ Ango Sakaguchi
        </span>
        <div className="flex py-5 pb-10 gap-5">
          {" "}
          <a
            className="flex gap-2 opacity-50 hover:opacity-100"
            href="https://medium.com/@ardifjar443"
            target="_blank"
          >
            <span>Medium</span>
            <img src="./img/medium.png" alt="" className="w-[20px] h-[20px]" />
          </a>
          <a
            className="flex gap-2 opacity-50 hover:opacity-100"
            href="https://github.com/ardifjar443"
            target="_blank"
          >
            <span>Github</span>
            <img src="./img/github.png" alt="" className="w-[20px] h-[20px]" />
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
        </div>
      </div>
    </>
  );
};

export default Footer;
