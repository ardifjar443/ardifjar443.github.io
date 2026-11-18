import "./portfolio.css";
import { Link } from "react-router-dom";

const cvUrl = "/cv/cv.pdf";

const projects = [
  {
    name: "Text-to-SQL DTSEN",
    category: "FEATURED · AI / DATA ENGINEERING",
    description:
      "An Indonesian natural-language-to-SQL system that translates information requests into executable SQL queries.",
    image: "/img/text2sql.png",
    href: "https://github.com/ardifjar443/text2sql",
    featured: true,
    tags: ["Python", "SQL / MySQL", "LLM", "Gemini Embedding"],
  },
  {
    name: "PocketPlan",
    category: "FULL STACK · DATA VISUALIZATION",
    description:
      "Personal finance dashboard for financial tracking and visualization.",
    image: "/img/PocketPlan.png",
    href: "https://github.com/ardifjar443/pocketPlanWeb",
  },
  {
    name: "RocketLuncur",
    category: "WEB DEVELOPMENT",
    description: "Web-based news platform.",
    image: "/img/rocketLuncur.png",
    href: "https://rocketluncur.infinityfreeapp.com/berita",
    tint: true,
  },
  {
    name: "Radio Rama FM",
    category: "FULL STACK DEVELOPMENT",
    description:
      "Radio streaming website with audio streaming and an administrative analytics dashboard.",
    image: "/img/rama.png",
    href: "https://ramafm.com/",
  },
  {
    name: "Radio Paramuda",
    category: "FULL STACK DEVELOPMENT",
    description: "Radio website supporting audio and video streaming.",
    image: "/img/paramuda.png",
    href: "https://www.paramudaradio.com/",
  },
  {
    name: "Car Rental System",
    category: "WEB APPLICATION",
    description: "Web-based vehicle rental application.",
    image: "/img/projectRental.png",
    href: "https://github.com/ardifjar443/rentalMobil",
  },
];

const disciplines = [
  {
    title: "Data Analytics",
    skills: ["Python", "SQL · MySQL", "Excel · Power Query", "Data Visualization", "ETL"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Large Language Models", "Text-to-SQL", "Embeddings", "Machine Learning"],
  },
  {
    title: "Software Development",
    skills: ["Laravel · PHP", "React · Inertia.js", "JavaScript", "Tailwind CSS", "REST API"],
  },
  {
    title: "Network Engineering",
    skills: [
      "Network Configuration",
      "Fiber Optic",
      "Network Troubleshooting",
      "Network Infrastructure",
    ],
  },
];

const experiences = [
  {
    role: "Full Stack Developer Intern",
    organization: "Radio Paramuda & Radio Rama",
    details: [
      "Laravel and React implementation with Tailwind CSS",
      "Audio and video streaming integration",
      "Administrative analytics dashboard",
    ],
  },
  {
    role: "Network Engineer Intern",
    organization: "PT Dinar Wahana Gemilang",
    details: [
      "Fiber optic installation and maintenance",
      "WiFi technician activities and network configuration",
      "Internet troubleshooting and infrastructure maintenance",
    ],
  },
];

const certifications = [
  {
    name: "Data Analytics",
    issuer: "BNSP",
    image: "/sertification/data%20analis%20bnsp.png",
  },
  { name: "Network Engineering", issuer: "BNSP" },
  {
    name: "Gemini Certified University Student",
    issuer: "Google for Education",
    image: "/sertification/gemini%20sertified%20student.png",
  },
  {
    name: "Data Visualization",
    issuer: "Dicoding",
    image: "/sertification/belajar%20dasar%20visualisasi%20data%20dicoding.png",
  },
  {
    name: "Machine Learning for Beginners",
    issuer: "Dicoding",
    image: "/sertification/belajar%20machine%20learning%20untuk%20pemula%20dicoding.png",
  },
];

const photographs = [
  { src: "/img/ig/foto1.jpg", alt: "Pemandangan perkebunan teh di lereng" },
  { src: "/img/ig/foto2.jpg", alt: "Laut dan ombak di pesisir" },
  { src: "/img/ig/foto3.jpg", alt: "Perjalanan melewati jalan di tengah hutan" },
  { src: "/img/ig/foto4.jpg", alt: "Pemandangan pantai dari balik jendela" },
  { src: "/img/ig/foto5.jpg", alt: "Potret boneka katak berwarna hijau" },
];

function Arrow({ diagonal = false }) {
  return (
    <span aria-hidden="true" className="portfolio-arrow">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function Home() {
  return (
    <main className="portfolio-site">
      <section className="portfolio-hero page-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">ARDI FAJAR — PORTFOLIO 2026</p>
          <h1>
            Turning Data Into <em>Insights</em>, Ideas Into <em>Solutions.</em>
          </h1>
          <p className="hero-description">
            I build data-driven solutions, explore intelligent technologies,
            and develop practical digital experiences that solve real-world
            problems.
          </p>
          <div className="skill-pills" aria-label="Areas of expertise">
            <span>Data Analyst</span>
            <span>AI / ML Enthusiast</span>
            <span>Full Stack Developer</span>
            <span>Network Engineering</span>
          </div>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              View My Work <Arrow />
            </a>
            <a className="button button-outline" href={cvUrl} download>
              Download CV
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/ardifjar443" target="_blank" rel="noreferrer">
              GitHub <Arrow diagonal />
            </a>
            <a
              href="https://www.linkedin.com/in/ardi-fajar-arifin/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <Arrow diagonal />
            </a>
            <a href="mailto:ardifjar443@gmail.com">
              Email <Arrow diagonal />
            </a>
          </div>
        </div>
        <figure className="portrait-card">
          <span className="portrait-number">01</span>
          <img src="/img/profil.jpeg" alt="Ardi Fajar" />
          <figcaption>Professional portrait · Ardi Fajar</figcaption>
        </figure>
      </section>

      <section className="portfolio-stats page-wrap" aria-label="Portfolio summary">
        <div><strong>6</strong><span>Projects across AI, data and web</span></div>
        <div><strong>2</strong><span>Internships, 3 months each</span></div>
        <div><strong>5</strong><span>Professional certifications</span></div>
        <div><strong>4</strong><span>Expertise areas: data, AI, software, network</span></div>
      </section>

      <section className="projects-section page-wrap" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FEATURED PROJECTS</p>
            <h2>Selected work</h2>
          </div>
          <Link className="text-link" to="/project">
            All projects <Arrow />
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <a
              className={`project-card${project.featured ? " project-featured" : ""}${
                project.tint ? " project-tint" : ""
              }`}
              href={project.href}
              key={project.name}
              target="_blank"
              rel="noreferrer"
            >
              {project.featured ? (
                <>
                  <div className="featured-copy">
                    <p className="eyebrow">{project.category}</p>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <div className="featured-media">
                    <img src={project.image} alt="Text-to-SQL project interface" />
                  </div>
                </>
              ) : (
                <>
                  <img src={project.image} alt="" />
                  <div className="project-copy">
                    <p className="eyebrow">{project.category}</p>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    {index < 3 && <span className="project-visit">View project <Arrow /></span>}
                  </div>
                </>
              )}
            </a>
          ))}
        </div>
      </section>

      <section className="expertise-section" id="expertise">
        <div className="page-wrap">
          <p className="eyebrow">TECHNICAL EXPERTISE</p>
          <h2>Four disciplines, one analytical<br className="desktop-break" /> mindset.</h2>
          <div className="discipline-grid">
            {disciplines.map((discipline, index) => (
              <article key={discipline.title}>
                <span className="eyebrow">0{index + 1}</span>
                <h3>{discipline.title}</h3>
                <ul>
                  {discipline.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section page-wrap" id="experience">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPERIENCE</p>
            <h2>Hands-on, in the field.</h2>
          </div>
        </div>
        <div className="experience-grid">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.role}>
              <p className="eyebrow">INTERNSHIP · 3 MONTHS</p>
              <h3>{experience.role}</h3>
              <p className="experience-org">{experience.organization}</p>
              <ul>
                {experience.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="certification-section page-wrap" id="certifications">
        <p className="eyebrow">CERTIFICATIONS</p>
        <h2>Verified credentials.</h2>
        <div className="certification-grid">
          {certifications.map(({ name, issuer, image }) => (
            <article className="certification-card" key={name}>
              {image ? (
                <a
                  className="certificate-image"
                  href={image}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${name} certificate`}
                >
                  <img src={image} alt={`${name} certificate`} />
                </a>
              ) : (
                <div className="certificate-placeholder">
                  CERTIFICATE IMAGE NOT PROVIDED
                </div>
              )}
              <h3>{name}</h3>
              <p>{issuer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="photography-section page-wrap" id="photography">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A HOBBY · PHOTOGRAPHY</p>
            <h2>Finding stories in the everyday.</h2>
          </div>
          <a
            className="text-link"
            href="https://instagram.com/ardi_fj_ar/"
            target="_blank"
            rel="noreferrer"
          >
            More on Instagram <Arrow diagonal />
          </a>
        </div>
        <div className="photography-grid">
          {photographs.map((photo, index) => (
            <a
              className="photo-card"
              href="https://instagram.com/ardi_fj_ar/"
              key={photo.src}
              target="_blank"
              rel="noreferrer"
              aria-label={`View more photography on Instagram, photo ${index + 1}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
              <span>0{index + 1} ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-section page-wrap" id="contact">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2>Let&apos;s turn your data and<br className="desktop-break" /> ideas into something useful.</h2>
        <p>
          Open to opportunities in data analytics and AI, and to collaborations
          in software development.
        </p>
        <div className="hero-actions">
          <a className="button button-light" href="mailto:ardifjar443@gmail.com">
            Get in Touch <Arrow />
          </a>
          <a className="button button-light-outline" href={cvUrl} download>
            Download CV
          </a>
        </div>
      </section>

      <footer className="portfolio-footer page-wrap">
        <span>© 2026 Ardi Fajar. All rights reserved.</span>
        <div>
          <a href="https://github.com/ardifjar443" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ardi-fajar-arifin/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://instagram.com/ardi_fj_ar/" target="_blank" rel="noreferrer">Instagram (photography)</a>
        </div>
      </footer>
    </main>
  );
}

export default Home;
