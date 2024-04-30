import Foto from "../card/foto";
import Skills from "../card/skills";
import Web2 from "../card/web2";

const Body = () => {
  return (
    <>
      <div className=" ">
        <div className="grid grid-cols-4 gap-5 px-28 ">
          <Foto
            link={"https://instagram.com/ardi_fj_ar/"}
            foto={"./img/profil.jpeg"}
          />
          <Web2
            namaProject={"Car Rental"}
            img={"./img/projectRental.png"}
            link={"https://github.com/ardifjar443/rentalMobil"}
          />
          <Skills
            namaSkill={"FullStack Developer"}
            img={"./img/iconFullstack.png"}
          />
          <Skills namaSkill={"Python"} img={"./img/python.png"} />
          <Skills
            namaSkill={"Data Scientist"}
            img={"./img/data-scientist.png"}
          />
          <Web2
            namaProject={"News Web"}
            img={"./img/berita.png"}
            link={"https://web-berita-lime.vercel.app/"}
          />
        </div>
      </div>
    </>
  );
};

export default Body;
