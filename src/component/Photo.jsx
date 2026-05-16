import Foto from "./card/foto";

const Photo = () => {
  return (
    <>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 p-5 pt-20 gap-4 ">
        <Foto
          link={"https://instagram.com/ardi_fj_ar/"}
          foto={"./img/ig/foto1.jpeg"}
        />
        <Foto
          link={"https://instagram.com/ardi_fj_ar/"}
          foto={"./img/ig/foto2.jpeg"}
        />
        <Foto
          link={"https://instagram.com/ardi_fj_ar/"}
          foto={"./img/ig/foto3.jpg"}
        />
        <Foto
          link={"https://instagram.com/ardi_fj_ar/"}
          foto={"./img/ig/foto4.jpg"}
        />
        <Foto
          link={"https://instagram.com/ardi_fj_ar/"}
          foto={"./img/ig/foto5.jpg"}
        />
        {/* <Foto
          link={"https://instagram.com/ardi_fj_ar/"}
          foto={"./img/ig/foto6.jpeg"}
        /> */}
      </div>
    </>
  );
};

export default Photo;
