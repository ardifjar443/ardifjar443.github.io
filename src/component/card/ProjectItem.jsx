import { motion } from "framer-motion";

const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M14 3h7v7" />
    <path d="M10 14 21 3" />
    <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
  </svg>
);

export default function ProjectItem({ project, index }) {
  const links = [
    project.github && {
      label: "GitHub",
      href: project.github,
    },
    project.demo && {
      label: project.demoLabel || "Live Demo",
      href: project.demo,
    },
  ].filter(Boolean);

  return (
    <motion.article
      className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-8 lg:gap-12"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: (index % 2) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* LEFT: Project Preview */}
      <motion.a
        href={project.demo || project.github || undefined}
        target={project.demo || project.github ? "_blank" : undefined}
        rel={project.demo || project.github ? "noopener noreferrer" : undefined}
        aria-label={`Preview ${project.name}`}
        className={`group relative flex min-h-[250px] items-center justify-center overflow-hidden rounded-[15px] border border-[#D9E4F0] bg-[#EAF3FF] p-4 shadow-sm sm:min-h-[320px] ${
          index % 2 !== 0 ? "md:order-2" : ""
        }`}
        whileHover={{
          y: -6,
          scale: 1.015,
          boxShadow: "0 20px 35px -10px rgba(37, 99, 235, 0.18)",
        }}
        whileTap={{ scale: 0.985 }}
        transition={{ duration: 0.25 }}
      >
        <span className="absolute left-4 top-4 z-10 text-sm font-medium text-[#2563EB]">
          Project . {project.name}
        </span>

        <div className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#F8FBFF] shadow-inner">
          <ExternalLinkIcon />
        </div>

        <img
          src={project.img}
          alt={`Screenshot ${project.name}`}
          loading="lazy"
          className="mt-7 max-h-[290px] w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </motion.a>

      {/* RIGHT: Project Details */}
      <div
        className={`flex flex-col justify-center py-2 md:py-6 ${
          index % 2 !== 0 ? "md:order-1" : ""
        }`}
      >
        <p className="text-sm font-medium tracking-wide text-[#2563EB]">
          {project.category}
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#17283F] sm:text-3xl">
          {project.name}
        </h2>

        <p className="mt-4 text-sm leading-7 text-[#62748B] sm:text-base">
          {project.description}
        </p>

        {/* Technology stack */}
        <div className="mt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
            Technologies
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((technology) => (
              <motion.span
                key={technology}
                className="rounded-full bg-[#EAF3FF] px-3 py-1.5 text-xs font-medium text-[#22529C]"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {technology}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Project links */}
        {links.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-3">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1D4ED8]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
                <ExternalLinkIcon />
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
