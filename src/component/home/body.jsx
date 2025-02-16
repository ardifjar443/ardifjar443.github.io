import Foto from "../card/foto";
import Skills from "../card/skills";
import Web2 from "../card/web2";

const Body = () => {
  return (
    <>
      <div className=" ">
        <div className="min-h-screen grid grid-cols-2 lg:grid-cols-4  gap-5 p-4  ">
          <Web2
            namaProject={"PocketPlan"}
            img={"./img/PocketPlan.png"}
            link={"https://pocketplan.great-site.net/"}
          />
          <Foto
            link={"https://instagram.com/ardi_fj_ar/"}
            foto={"./img/profil.jpeg"}
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
            namaProject={"RocketLuncur"}
            img={"./img/rocketLuncur.png"}
            link={"https://rocketluncur.infinityfreeapp.com/berita"}
          />
        </div>
      </div>
    </>
  );
};

export default Body;
