import { motion } from "framer-motion";

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
    <motion.article
      className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-14"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: (index % 2) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* LEFT: Skill Illustration */}
      <motion.div
        className={`relative flex min-h-[250px] items-center justify-center overflow-hidden rounded-[15px] border border-[#D9E4F0] bg-[#EAF3FF] p-6 shadow-sm sm:min-h-[320px] ${
          index % 2 !== 0 ? "md:order-2" : ""
        }`}
        whileHover={{
          y: -6,
          scale: 1.02,
          boxShadow: "0 18px 36px -10px rgba(37, 99, 235, 0.16)",
        }}
        transition={{ duration: 0.25 }}
      >
        <span className="absolute left-4 top-4 text-sm font-medium text-[#2563EB]">
          Skills · {skill.name}
        </span>

        <div className="absolute right-3 top-3 h-7 w-7 rounded-full bg-[#F8FBFF] shadow-inner" />

        <img
          src={skill.img}
          alt={`${skill.name} illustration`}
          loading="lazy"
          className="mt-6 max-h-[220px] w-2/3 object-contain transition-transform duration-500 hover:scale-105 sm:max-h-[260px]"
        />
      </motion.div>

      {/* RIGHT: Skill Details */}
      <div className={`py-2 md:py-6 ${index % 2 !== 0 ? "md:order-1" : ""}`}>
        <p className="text-sm font-medium tracking-wide text-[#2563EB]">
          Expertise · Skills
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#17283F] sm:text-3xl">
          {skill.name}
        </h2>

        <p className="mt-4 text-sm leading-7 text-[#62748B] sm:text-base">
          {skill.description}
        </p>

        {/* Technologies */}
        {skill.technologies?.length > 0 && (
          <div className="mt-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
              Technologies & Tools
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {skill.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="rounded-full bg-[#EAF3FF] px-3 py-1.5 text-xs font-medium text-[#22529C]"
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {/* Training */}
        {hasTraining && (
          <section className="mt-7">
            <h3 className="flex items-center gap-2 font-bold text-[#17283F]">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
              Training & Learning
            </h3>

            <div className="mt-3 space-y-3">
              {skill.training.map((item) => (
                <motion.div
                  key={`${item.name}-${item.provider}`}
                  className="rounded-xl border border-[#D9E4F0] bg-white p-4 transition-colors hover:border-[#2563EB]"
                  whileHover={{
                    x: 6,
                    boxShadow: "0 8px 24px -4px rgba(16, 36, 62, 0.08)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="font-semibold text-[#22529C]">{item.name}</p>

                  <p className="mt-1 text-sm text-[#62748B]">
                    {item.provider}
                    {item.year ? ` · ${item.year}` : ""}
                  </p>

                  {item.description && (
                    <p className="mt-2 text-sm leading-6 text-[#62748B]">
                      {item.description}
                    </p>
                  )}

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#17283F]"
                    >
                      View Training
                      <ExternalLinkIcon />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {hasCertifications && (
          <section className="mt-7">
            <h3 className="flex items-center gap-2 font-bold text-[#17283F]">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
              Certifications
            </h3>

            <div className="mt-3 space-y-3">
              {skill.certifications.map((cert) => (
                <motion.div
                  key={`${cert.name}-${cert.issuer}`}
                  className="flex flex-col gap-3 rounded-xl border border-[#D9E4F0] bg-white p-4 transition-colors hover:border-[#2563EB] sm:flex-row sm:items-center sm:justify-between"
                  whileHover={{
                    x: 6,
                    boxShadow: "0 8px 24px -4px rgba(16, 36, 62, 0.08)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    <p className="font-semibold text-[#22529C]">{cert.name}</p>

                    <p className="mt-1 text-sm text-[#62748B]">
                      {cert.issuer}
                      {cert.year ? ` · ${cert.year}` : ""}
                    </p>

                    {cert.description && (
                      <p className="mt-2 text-sm leading-6 text-[#62748B]">
                        {cert.description}
                      </p>
                    )}
                  </div>

                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1D4ED8] sm:self-center"
                    >
                      View Certificate
                      <ExternalLinkIcon />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {!hasTraining && !hasCertifications && (
          <p className="mt-5 text-sm text-[#2563EB]">
            Explore my practical experience through selected projects.
          </p>
        )}
      </div>
    </motion.article>
  );
}
