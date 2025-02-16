const Skills = ({ namaSkill, img, penjelasan }) => {
  return (
    <>
      <div>
        <div className="cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className=" backface-hidde w-full h-full">
              <div className="bg-[#D6E6F2]  shadow-lg rounded-[15px]  ">
                {/* front content */}
                <a className="w-full flex ">
                  <div className="mt-[7px] w-full ms-[14px]  ">
                    <p className="text-[14px]">Skills . {namaSkill}</p>
                  </div>
                  <div className="flex  w-full justify-end">
                    <div className=" w-7 h-7 mt-[7px] me-[10px] bg-[#F7FBFC] rounded-full shadow-inner z-50"></div>
                  </div>
                </a>
                <div className=" h-full w-full  flex items-center justify-center ">
                  <img
                    src={img}
                    alt=""
                    className=" rounded-tl-md w-1/2 rounded-br-md m-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
