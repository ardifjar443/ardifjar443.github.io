import Cardskill from "./card/skills";
import Skills from "./card/skills";

const Skill = () => {
  return (
    <>
      <div className="pt-20 min-h-screen">
        <div className="grid grid-cols-4 gap-5 px-28 ">
          <Skills
            namaSkill={"Machine Learning"}
            img={"./img/iconML.png"}
            penjelasan={"lorem lkj lkj ancmn aslkdfj "}
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
        </div>
      </div>
    </>
  );
};

export default Skill;
