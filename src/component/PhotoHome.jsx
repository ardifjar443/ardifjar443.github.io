import Foto from "./card/foto";

const PhotoHome = () => {
  const fotos = [
    "./img/ig/foto1.jpg",
    "./img/ig/foto2.jpg",
    "./img/ig/foto3.jpg",
    "./img/ig/foto4.jpg",
  ];

  const instagramUrl = "https://instagram.com/ardi_fj_ar/";

  return (
    <section className="px-5  pb-10 sm:px-8 lg:px-10">
      {/* HEADER */}
      <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-[#729BC8]">
            Personal · Photography
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#24384B] sm:text-4xl">
            Behind the Lens<span className="text-[#729BC8]">.</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#526B82] sm:text-base">
            A little glimpse into my world through photography. Capturing
            moments, exploring light, and finding beauty in everyday things.
          </p>
        </div>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#527DA8] transition-colors hover:text-[#24384B]"
        >
          More on Instagram
          <svg
            viewBox="0 0 24 24"
            width="17"
            height="17"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </a>
      </div>

      {/* MOBILE */}
      <div
        className="
          flex gap-4 overflow-x-auto
          snap-x snap-mandatory
          pb-4 lg:hidden scrollbar-hide
        "
      >
        {fotos.map((item, index) => (
          <div
            key={index}
            className="min-w-full snap-center flex justify-center"
          >
            <Foto link={instagramUrl} foto={item} />
          </div>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-4">
        {fotos.map((item, index) => (
          <Foto key={index} link={instagramUrl} foto={item} />
        ))}
      </div>
    </section>
  );
};

export default PhotoHome;
