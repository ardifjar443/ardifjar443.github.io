import Foto from "./card/foto";

const Photo = () => {
  return (
    <>
      <div className="min-h-screen grid grid-cols-2 lg:grid-cols-4 p-5 pt-20 gap-4 ">
        <Foto
          link={"https://instagram.com/ardi_fj_ar/"}
          foto={"./img/ig/foto1.jpeg"}
        />
        <Foto
          link={"https://instagram.com/ardi_fj_ar/"}
          foto={"./img/ig/foto3.jpeg"}
        />
        <Foto
          link={"https://instagram.com/ardi_fj_ar/"}
          foto={"./img/ig/foto2.jpeg"}
        />
        <Foto
          link={"https://instagram.com/ardi_fj_ar/"}
          foto={"./img/ig/foto4.jpeg"}
        />
        <Foto
          link={"https://instagram.com/ardi_fj_ar/"}
          foto={"./img/ig/foto5.jpeg"}
        />
        <Foto
          link={"https://instagram.com/ardi_fj_ar/"}
          foto={"./img/ig/foto6.jpeg"}
        />
      </div>
    </>
  );
};

export default Photo;
