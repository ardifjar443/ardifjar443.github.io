import Foto from "./card/foto";
import Skills from "./card/skills";
import Web2 from "./card/web2";

const Project = () => {
  return (
    <>
      <div className="pt-20 ">
        <div className="grid grid-cols-4 gap-5 px-28 ">
          <Web2
            namaProject={"Car Rental"}
            img={"./img/projectRental.png"}
            link={"https://github.com/ardifjar443/rentalMobil"}
          />

          <Web2
            namaProject={"News Web"}
            img={"./img/berita.png"}
            link={"https://web-berita-lime.vercel.app/"}
          />
          <Web2
            namaProject={"Quotes Generator"}
            img={"./img/quotes.png"}
            link={"/quote"}
          />
          <Web2
            namaProject={"Angka Boom"}
            img={"./img/angkaBoom.png"}
            link={"/angka-boom"}
          />
          <Web2
            namaProject={"IoT  Green House"}
            img={"./img/greenhouse.png"}
            link={"https://wokwi.com/projects/386816792253478913"}
          />
          <Web2
            namaProject={"Front end Development Libraries"}
            img={"./img/frontend.png"}
            link={"https://wokwi.com/projects/386816792253478913"}
          />
        </div>
      </div>
    </>
  );
};

export default Project;
