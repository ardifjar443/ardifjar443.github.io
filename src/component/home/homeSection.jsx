const projects = [
  {
    number: "01",
    category: "AI / MACHINE LEARNING",
    title: "Indonesian Text-to-SQL AI",
    description:
      "An AI-powered pipeline that translates Indonesian natural language questions into SQL queries using LLMs and embedding-based schema retrieval.",
    tech: ["Python", "SQL", "LLM", "Embeddings"],
    image: null,
    href: "#contact",
  },
  {
    number: "02",
    category: "FULL-STACK DEVELOPMENT",
    title: "Radio Streaming Platform",
    description:
      "Radio web applications featuring audio streaming and, for one project, video streaming, built with Laravel and React.",
    tech: ["Laravel", "React", "Tailwind CSS"],
    image: null,
    href: "#contact",
  },
  {
    number: "03",
    category: "NETWORK ENGINEERING",
    title: "Network Infrastructure Lab",
    description:
      "A technical lab portfolio documenting network topology, device configurations, connectivity tests, and troubleshooting.",
    tech: ["Networking", "TCP/IP", "Documentation"],
    image: null,
    href: "#contact",
  },
];

const expertise = [
  {
    number: "01",
    title: "AI & Machine Learning",
    description:
      "Developing data-driven applications, experimenting with LLMs, embedding-based retrieval, and SQL generation.",
    skills: ["Python", "SQL", "LLMs", "Data Analysis"],
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Building responsive web applications, backend services, and interactive user interfaces.",
    skills: ["Laravel", "React", "Tailwind CSS", "REST API"],
  },
  {
    number: "03",
    title: "Network Engineering",
    description:
      "Exploring network infrastructure, connectivity, configuration, and systematic troubleshooting.",
    skills: ["TCP/IP", "Routing", "Network Topology"],
  },
];

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#729BC8]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-[#24384B] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 leading-7 text-[#526B82]">{description}</p>
    </div>
  );
}

export default function HomeSections() {
  return (
    <div className="space-y-16 pb-12 pt-10 sm:space-y-24 sm:pt-16">
      {/* SELECTED PROJECTS */}

      {/* TECHNICAL EXPERTISE */}
      <section id="expertise" className="scroll-mt-24 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I Work With"
          title="Technical expertise."
          description="Three areas where I develop my skills and build practical solutions."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {expertise.map((item) => (
            <article
              key={item.number}
              className="rounded-[20px] border border-[#D6E6F2] bg-[#F7FBFC] p-6 transition-colors hover:bg-[#D6E6F2]/50"
            >
              <span className="text-sm font-semibold text-[#729BC8]">
                {item.number} / 03
              </span>

              <h3 className="mt-5 text-xl font-bold text-[#24384B]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#526B82]">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-[#D6E6F2] px-2.5 py-1.5 text-xs text-[#365F86]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE & ACHIEVEMENTS */}
      <section id="experience" className="scroll-mt-24 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Journey"
          title="Experience & achievements."
          description="Experiences that have shaped my technical skills and professional growth."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <article className="rounded-[20px] bg-[#D6E6F2] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#729BC8]">
              Web Development
            </p>

            <h3 className="mt-3 text-xl font-bold text-[#24384B]">
              Radio Website Development
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#526B82]">
              Developed websites for two radio stations using Laravel, React,
              and Tailwind CSS, with audio streaming and video streaming on one
              of the projects.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Laravel", "React", "Streaming"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#F7FBFC] px-3 py-1.5 text-xs text-[#365F86]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-[20px] bg-[#D6E6F2] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#729BC8]">
              Mentoring & Certification
            </p>

            <h3 className="mt-3 text-xl font-bold text-[#24384B]">
              LKS Mentoring & Data Analyst
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#526B82]">
              Experience mentoring three cohorts of LKS participants, alongside
              professional development through a BNSP Data Analyst
              certification.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Mentoring", "Data Analysis", "BNSP"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#F7FBFC] px-3 py-1.5 text-xs text-[#365F86]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[24px] bg-[#D6E6F2] p-7 sm:p-12 lg:p-16">
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#729BC8]">
              Let's Connect
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#24384B] sm:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-[#526B82]">
              I'm open to opportunities in AI/ML, web development, and network
              engineering. Let's connect and create something meaningful.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:ardifjar443@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-[#527DA8] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#365F86]"
              >
                Contact Me <ArrowIcon />
              </a>

              <a
                href="https://drive.google.com/file/d/1Mu_HuWQw27czvZpqVp8CdVB_VM2ajwLF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F7FBFC] px-5 py-3 font-semibold text-[#365F86] transition-colors hover:bg-white"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
