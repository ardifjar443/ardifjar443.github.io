import "./portfolio.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollWordTitle from "../common/ScrollWordTitle";

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

const statsData = [
  { value: "6", label: "Projects across AI, data and web" },
  { value: "2", label: "Internships, 3 months each" },
  { value: "5", label: "Professional certifications" },
  { value: "4", label: "Expertise areas: data, AI, software, network" },
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
      {/* HERO SECTION */}
      <section className="portfolio-hero page-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">ARDI FAJAR — PORTFOLIO 2026</p>
          <ScrollWordTitle as="h1" delay={0.1} start="top 95%">
            Turning Data Into <em>Insights</em>, Ideas Into <em>Solutions.</em>
          </ScrollWordTitle>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I build data-driven solutions, explore intelligent technologies,
            and develop practical digital experiences that solve real-world
            problems.
          </motion.p>
          <motion.div
            className="skill-pills"
            aria-label="Areas of expertise"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {["Data Analyst", "AI / ML Enthusiast", "Full Stack Developer", "Network Engineering"].map((pill) => (
              <motion.span
                key={pill}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.a
              className="button button-dark"
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work <Arrow />
            </motion.a>
            <motion.a
              className="button button-outline"
              href={cvUrl}
              download
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV
            </motion.a>
          </motion.div>
          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
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
          </motion.div>
        </div>
        <motion.figure
          className="portrait-card"
          initial={{ opacity: 0, scale: 0.93, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6, scale: 1.015 }}
        >
          <span className="portrait-number">01</span>
          <img src="/img/profil.jpeg" alt="Ardi Fajar" />
          <figcaption>Professional portrait · Ardi Fajar</figcaption>
        </motion.figure>
      </section>

      {/* STATS SECTION */}
      <motion.section
        className="portfolio-stats page-wrap"
        aria-label="Portfolio summary"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {statsData.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </motion.section>

      {/* PROJECTS SECTION */}
      <section className="projects-section page-wrap" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FEATURED PROJECTS</p>
            <ScrollWordTitle as="h2">Selected work</ScrollWordTitle>
          </div>
          <Link className="text-link" to="/project">
            All projects <Arrow />
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project, index) =>
            project.featured ? (
              <motion.a
                className="project-card project-featured"
                href={project.href}
                key={project.name}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -7,
                  scale: 1.01,
                  boxShadow: "0 24px 48px -12px rgba(16, 36, 62, 0.28)",
                }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="featured-copy">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="featured-media">
                  <img src={project.image} alt="Text-to-SQL project interface" />
                </div>
              </motion.a>
            ) : (
              <motion.a
                className={`project-card${project.tint ? " project-tint" : ""}`}
                href={project.href}
                key={project.name}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -7,
                  scale: 1.015,
                  boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.15)",
                }}
                whileTap={{ scale: 0.985 }}
              >
                <img src={project.image} alt="" />
                <div className="project-copy">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {index < 3 && (
                    <span className="project-visit">
                      View project <Arrow />
                    </span>
                  )}
                </div>
              </motion.a>
            )
          )}
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="expertise-section" id="expertise">
        <div className="page-wrap">
          <p className="eyebrow">TECHNICAL EXPERTISE</p>
          <ScrollWordTitle as="h2">
            Four disciplines, one analytical<br className="desktop-break" /> mindset.
          </ScrollWordTitle>
          <div className="discipline-grid">
            {disciplines.map((discipline, index) => (
              <motion.article
                key={discipline.title}
                className="discipline-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  transition: { duration: 0.25 },
                }}
              >
                <span className="eyebrow">0{index + 1}</span>
                <h3>{discipline.title}</h3>
                <ul>
                  {discipline.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="experience-section page-wrap" id="experience">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPERIENCE</p>
            <ScrollWordTitle as="h2">Hands-on, in the field.</ScrollWordTitle>
          </div>
        </div>
        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <motion.article
              className="experience-card"
              key={experience.role}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -7,
                scale: 1.01,
                boxShadow: "0 22px 42px -10px rgba(16, 36, 62, 0.12)",
                transition: { duration: 0.25 },
              }}
            >
              <p className="eyebrow">INTERNSHIP · 3 MONTHS</p>
              <h3>{experience.role}</h3>
              <p className="experience-org">{experience.organization}</p>
              <ul>
                {experience.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section className="certification-section page-wrap" id="certifications">
        <p className="eyebrow">CERTIFICATIONS</p>
        <ScrollWordTitle as="h2">Verified credentials.</ScrollWordTitle>
        <div className="certification-grid">
          {certifications.map(({ name, issuer, image }, index) => (
            <motion.article
              className="certification-card"
              key={name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                scale: 1.025,
                boxShadow: "0 16px 32px -8px rgba(16, 36, 62, 0.12)",
                transition: { duration: 0.25 },
              }}
            >
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
            </motion.article>
          ))}
        </div>
      </section>

      {/* PHOTOGRAPHY SECTION */}
      <section className="photography-section page-wrap" id="photography">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A HOBBY · PHOTOGRAPHY</p>
            <ScrollWordTitle as="h2">Finding stories in the everyday.</ScrollWordTitle>
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
            <motion.a
              className="photo-card"
              href="https://instagram.com/ardi_fj_ar/"
              key={photo.src}
              target="_blank"
              rel="noreferrer"
              aria-label={`View more photography on Instagram, photo ${index + 1}`}
              initial={{ opacity: 0, scale: 0.94, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.025,
                boxShadow: "0 24px 44px -10px rgba(0, 0, 0, 0.35)",
                transition: { duration: 0.25 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
              <span>0{index + 1} ↗</span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <motion.section
        className="contact-section page-wrap"
        id="contact"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">LET'S CONNECT</p>
        <ScrollWordTitle as="h2">
          Let&apos;s turn your data and<br className="desktop-break" /> ideas into something useful.
        </ScrollWordTitle>
        <p>
          Open to opportunities in data analytics and AI, and to collaborations
          in software development.
        </p>
        <div className="hero-actions">
          <motion.a
            className="button button-light"
            href="mailto:ardifjar443@gmail.com"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch <Arrow />
          </motion.a>
          <motion.a
            className="button button-light-outline"
            href={cvUrl}
            download
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Download CV
          </motion.a>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="portfolio-footer page-wrap">
        <span>© 2026 Ardi Fajar. All rights reserved.</span>
        <div>
          <a href="https://github.com/ardifjar443" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ardi-fajar-arifin/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://instagram.com/ardi_fj_ar/" target="_blank" rel="noreferrer">
            Instagram (photography)
          </a>
        </div>
      </footer>
    </main>
  );
}

export default Home;
