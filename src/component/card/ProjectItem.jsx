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
    <article className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-8 lg:gap-12">
      {/* LEFT: Project Preview */}
      <a
        href={project.demo || project.github || undefined}
        target={project.demo || project.github ? "_blank" : undefined}
        rel={project.demo || project.github ? "noopener noreferrer" : undefined}
        aria-label={`Preview ${project.name}`}
        className={`group relative flex min-h-[250px] items-center justify-center overflow-hidden rounded-[15px] bg-[#D6E6F2] p-4 shadow-lg sm:min-h-[320px] ${
          index % 2 !== 0 ? "md:order-2" : ""
        }`}
      >
        <span className="absolute left-4 top-4 z-10 text-sm font-medium text-[#527DA8]">
          Project . {project.name}
        </span>

        <div className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#F7FBFC] shadow-inner">
          <ExternalLinkIcon />
        </div>

        <img
          src={project.img}
          alt={`Screenshot ${project.name}`}
          loading="lazy"
          className="mt-7 max-h-[290px] w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </a>

      {/* RIGHT: Project Details */}
      <div
        className={`flex flex-col justify-center py-2 md:py-6 ${
          index % 2 !== 0 ? "md:order-1" : ""
        }`}
      >
        <p className="text-sm font-medium tracking-wide text-[#729BC8]">
          {project.category}
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#24384B] sm:text-3xl">
          {project.name}
        </h2>

        <p className="mt-4 text-sm leading-7 text-[#526B82] sm:text-base">
          {project.description}
        </p>

        {/* Technology stack */}
        <div className="mt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#729BC8]">
            Technologies
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-[#D6E6F2] px-3 py-1.5 text-xs font-medium text-[#365F86]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Project links */}
        {links.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#527DA8] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#365F86] hover:shadow-md"
              >
                {link.label}
                <ExternalLinkIcon />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
