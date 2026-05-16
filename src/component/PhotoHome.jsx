import Foto from "./card/foto";

const PhotoHome = () => {
  const fotos = [
    "./img/ig/foto1.jpeg",
    "./img/ig/foto2.jpeg",
    "./img/ig/foto3.jpg",
    "./img/ig/foto4.jpg",
  ];

  return (
    <>
      {/* MOBILE */}
      <div
        className="
          flex
          gap-4
          overflow-x-auto
          snap-x
          snap-mandatory
          px-5
          pt-20
          lg:hidden
          scrollbar-hide
        "
      >
        {fotos.map((item, index) => (
          <div
            key={index}
            className="
              min-w-full
              snap-center
              flex
              justify-center
            "
          >
            <Foto link={"https://instagram.com/ardi_fj_ar/"} foto={item} />
          </div>
        ))}
      </div>

      {/* DESKTOP */}
      <div
        className="
          hidden
          lg:grid
          grid-cols-4
          gap-4
          p-5
          pt-20
        "
      >
        {fotos.map((item, index) => (
          <Foto
            key={index}
            link={"https://instagram.com/ardi_fj_ar/"}
            foto={item}
          />
        ))}
      </div>
    </>
  );
};

export default PhotoHome;
