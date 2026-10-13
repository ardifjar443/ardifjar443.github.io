const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 shrink-0"
  >
    <path d="M14 3h7v7" />
    <path d="M10 14 21 3" />
    <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
  </svg>
);

export default function SkillItem({ skill, index }) {
  const hasTraining = skill.training?.length > 0;
  const hasCertifications = skill.certifications?.length > 0;

  return (
    <article className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-14">
      {/* LEFT: Skill Illustration */}
      <div
        className={`relative flex min-h-[250px] items-center justify-center overflow-hidden rounded-[15px] bg-[#D6E6F2] p-6 shadow-lg sm:min-h-[320px] ${
          index % 2 !== 0 ? "md:order-2" : ""
        }`}
      >
        <span className="absolute left-4 top-4 text-sm font-medium text-[#729BC8]">
          Skills · {skill.name}
        </span>

        <div className="absolute right-3 top-3 h-7 w-7 rounded-full bg-[#F7FBFC] shadow-inner" />

        <img
          src={skill.img}
          alt={`${skill.name} illustration`}
          loading="lazy"
          className="mt-6 max-h-[220px] w-2/3 object-contain transition-transform duration-500 hover:scale-105 sm:max-h-[260px]"
        />
      </div>

      {/* RIGHT: Skill Details */}
      <div className={`py-2 md:py-6 ${index % 2 !== 0 ? "md:order-1" : ""}`}>
        <p className="text-sm font-medium tracking-wide text-[#729BC8]">
          Expertise · Skills
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#24384B] sm:text-3xl">
          {skill.name}
        </h2>

        <p className="mt-4 text-sm leading-7 text-[#526B82] sm:text-base">
          {skill.description}
        </p>

        {/* Technologies */}
        {skill.technologies?.length > 0 && (
          <div className="mt-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#729BC8]">
              Technologies & Tools
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {skill.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[#D6E6F2] px-3 py-1.5 text-xs font-medium text-[#365F86]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Training */}
        {hasTraining && (
          <section className="mt-7">
            <h3 className="flex items-center gap-2 font-bold text-[#24384B]">
              <span className="h-2 w-2 rounded-full bg-[#729BC8]" />
              Training & Learning
            </h3>

            <div className="mt-3 space-y-3">
              {skill.training.map((item) => (
                <div
                  key={`${item.name}-${item.provider}`}
                  className="rounded-xl border border-[#D6E6F2] bg-white/70 p-4"
                >
                  <p className="font-semibold text-[#365F86]">{item.name}</p>

                  <p className="mt-1 text-sm text-[#526B82]">
                    {item.provider}
                    {item.year ? ` · ${item.year}` : ""}
                  </p>

                  {item.description && (
                    <p className="mt-2 text-sm leading-6 text-[#526B82]">
                      {item.description}
                    </p>
                  )}

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#527DA8] hover:text-[#24384B]"
                    >
                      View Training
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {hasCertifications && (
          <section className="mt-7">
            <h3 className="flex items-center gap-2 font-bold text-[#24384B]">
              <span className="h-2 w-2 rounded-full bg-[#729BC8]" />
              Certifications
            </h3>

            <div className="mt-3 space-y-3">
              {skill.certifications.map((cert) => (
                <div
                  key={`${cert.name}-${cert.issuer}`}
                  className="flex flex-col gap-3 rounded-xl border border-[#D6E6F2] bg-white/70 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-semibold text-[#365F86]">{cert.name}</p>

                    <p className="mt-1 text-sm text-[#526B82]">
                      {cert.issuer}
                      {cert.year ? ` · ${cert.year}` : ""}
                    </p>

                    {cert.description && (
                      <p className="mt-2 text-sm leading-6 text-[#526B82]">
                        {cert.description}
                      </p>
                    )}
                  </div>

                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#527DA8] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#365F86] sm:self-center"
                    >
                      View Certificate
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {!hasTraining && !hasCertifications && (
          <p className="mt-5 text-sm text-[#729BC8]">
            Explore my practical experience through selected projects.
          </p>
        )}
      </div>
    </article>
  );
}
