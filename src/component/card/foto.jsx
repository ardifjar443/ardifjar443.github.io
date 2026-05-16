import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import exifr from "exifr";
import { X } from "lucide-react";

const Foto = ({ foto }) => {
  const [meta, setMeta] = useState(null);
  const [isHover, setIsHover] = useState(false);
  const [open, setOpen] = useState(false);

  // =========================
  // FORMAT SHUTTER SPEED
  // =========================
  const formatShutterSpeed = (value) => {
    if (!value) return "-";

    if (value >= 1) {
      return `${value}s`;
    }

    return `1/${Math.round(1 / value)}`;
  };

  // =========================
  // FORMAT DATE
  // =========================
  const formatDate = (date) => {
    if (!date) return "-";

    const d = new Date(date);

    return d.toLocaleString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // =========================
  // GET EXIF
  // =========================
  useEffect(() => {
    const getExif = async () => {
      try {
        const data = await exifr.parse(foto);

        setMeta({
          camera: data?.Model,
          lens: data?.LensModel,
          iso: data?.ISO,
          aperture: data?.FNumber,
          shutter: data?.ExposureTime,
          focal: data?.FocalLength,
          date: data?.DateTimeOriginal,
        });
      } catch (err) {
        console.log(err);
      }
    };

    getExif();
  }, [foto]);

  return (
    <>
      {/* ========================= */}
      {/* CARD */}
      {/* ========================= */}

      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onContextMenu={(e) => e.preventDefault()}
        onClick={() => setOpen(true)}
        className="
          relative
          overflow-hidden
          rounded-3xl
          group
          cursor-pointer
          select-none
          w-full
          max-w-[420px]
          mx-auto
          aspect-[4/5]
          shadow-2xl
        "
      >
        {/* IMAGE */}
        <motion.img
          src={foto}
          alt=""
          draggable="false"
          animate={{
            scale: isHover ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            pointer-events-none
          "
        />

        {/* WATERMARK */}
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <p className="text-white text-[10px] tracking-[4px]">ARDI FAJAR</p>
          </div>
        </div>

        {/* DECORATION */}
        <div className="absolute top-4 right-4 z-10">
          <div
            className="
              w-10
              h-10
              rounded-full
              bg-white
              border
              border-white/40
              shadow-[0_0_30px_rgba(255,255,255,0.25)]
            "
          />
        </div>

        {/* OVERLAY */}
        <motion.div
          animate={{
            opacity: isHover ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/50"
        />

        {/* HOVER TEXT */}
        <motion.div
          animate={{
            opacity: isHover ? 1 : 0,
            y: isHover ? 0 : 20,
          }}
          className="
            absolute
            bottom-5
            left-5
            text-white
            z-20
          "
        >
          <h1 className="text-2xl font-bold">{meta?.camera || "Photo"}</h1>

          <p className="text-sm text-gray-300 mt-1">Click to view details</p>
        </motion.div>
      </motion.div>

      {/* ========================= */}
      {/* POPUP */}
      {/* ========================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="
              fixed
              inset-0
              z-[999]
              bg-black/80
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-3
              lg:p-5
            "
          >
            {/* CONTENT */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-7xl
                bg-[#0a0a0a]
                rounded-3xl
                overflow-hidden
                lg:grid
                lg:grid-cols-2
                shadow-2xl
                max-h-[95vh]
              "
            >
              {/* ========================= */}
              {/* IMAGE */}
              {/* ========================= */}

              <div className="relative bg-black">
                <img
                  src={foto}
                  alt=""
                  draggable="false"
                  className="
                    w-full
                    h-[55vh]
                    lg:h-[95vh]
                    object-cover
                    pointer-events-none
                  "
                />

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* WATERMARK */}
                <div className="absolute top-5 left-5">
                  <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <p className="text-white text-[10px] tracking-[4px]">
                      ARDI FAJAR
                    </p>
                  </div>
                </div>

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setOpen(false)}
                  className="
                    absolute
                    top-5
                    right-5
                    bg-black/40
                    border
                    border-white/10
                    backdrop-blur-md
                    p-3
                    rounded-full
                    text-white
                  "
                >
                  <X size={20} />
                </button>
              </div>

              {/* ========================= */}
              {/* METADATA */}
              {/* ========================= */}

              <div
                className="
                  text-white
                  p-6
                  lg:p-8
                  overflow-y-auto
                  max-h-[40vh]
                  lg:max-h-[95vh]
                "
              >
                {/* TITLE */}
                <div className="mb-8">
                  <p className="text-xs text-gray-400 tracking-[4px] mb-3">
                    EXIF METADATA
                  </p>

                  <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                    {meta?.camera || "Unknown Camera"}
                  </h1>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 gap-3">
                  {/* LENS */}
                  <div className="bg-white/5 rounded-3xl p-4 border border-white/10">
                    <p className="text-gray-400 text-xs mb-2">Lens</p>

                    <p className="font-semibold text-sm break-words">
                      {meta?.lens || "-"}
                    </p>
                  </div>

                  {/* ISO */}
                  <div className="bg-white/5 rounded-3xl p-4 border border-white/10">
                    <p className="text-gray-400 text-xs mb-2">ISO</p>

                    <p className="font-semibold text-sm">{meta?.iso || "-"}</p>
                  </div>

                  {/* APERTURE */}
                  <div className="bg-white/5 rounded-3xl p-4 border border-white/10">
                    <p className="text-gray-400 text-xs mb-2">Aperture</p>

                    <p className="font-semibold text-sm">
                      f/{meta?.aperture || "-"}
                    </p>
                  </div>

                  {/* SHUTTER */}
                  <div className="bg-white/5 rounded-3xl p-4 border border-white/10">
                    <p className="text-gray-400 text-xs mb-2">Shutter</p>

                    <p className="font-semibold text-sm">
                      {formatShutterSpeed(meta?.shutter)}
                    </p>
                  </div>

                  {/* FOCAL */}
                  <div className="bg-white/5 rounded-3xl p-4 border border-white/10">
                    <p className="text-gray-400 text-xs mb-2">Focal</p>

                    <p className="font-semibold text-sm">
                      {meta?.focal || "-"} mm
                    </p>
                  </div>

                  {/* DATE */}
                  <div className="bg-white/5 rounded-3xl p-4 border border-white/10">
                    <p className="text-gray-400 text-xs mb-2">Date</p>

                    <p className="font-semibold text-sm">
                      {formatDate(meta?.date)}
                    </p>
                  </div>
                </div>

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setOpen(false)}
                  className="
                    mt-8
                    w-full
                    bg-white
                    text-black
                    py-4
                    rounded-2xl
                    font-semibold
                    hover:opacity-90
                    transition-all
                  "
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Foto;
