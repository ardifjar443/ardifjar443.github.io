import SkillItem from "./card/SkillItem";

const skills = [
  {
    name: "Network Engineering",
    img: "./img/network.png",
    description:
      "Knowledge of networking fundamentals, network infrastructure, connectivity, and troubleshooting, supported by professional certification and networking coursework.",
    technologies: [
      "Computer Networking",
      "TCP/IP",
      "Network Infrastructure",
      "Network Troubleshooting",
      "Cisco Networking",
    ],
    training: [
      {
        name: "CCNA: Introduction to Networks",
        provider: "Cisco",
        year: "2024",
        description:
          "Networking fundamentals and foundational concepts for understanding network communication and infrastructure.",
        url: "https://www.credly.com/badges/ff32d9ef-fb75-4ab4-b4db-742432a1b9bc/linked_in_profile",
      },
    ],
    certifications: [
      {
        name: "Aktivitas Teknologi Informasi dan Jasa Komputer Lainnya",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        year: "2022",
        description:
          "Issued June 2022 · Expired June 2025 · Credential ID: 62090351320001463",
        url: "",
      },
    ],
  },

  {
    name: "Data Analytics & Business Intelligence",
    img: "./img/data-scientist.png",
    description:
      "Skills in data analytics, data visualization, and business intelligence, with a focus on transforming data into meaningful insights to support analysis and decision-making.",
    technologies: [
      "Data Analytics",
      "Business Intelligence",
      "Data Visualization",
      "Data Interpretation",
      "Analytical Thinking",
    ],
    training: [
      {
        name: "Belajar Dasar Visualisasi Data",
        provider: "Dicoding Indonesia",
        year: "2023",
        description:
          "Fundamentals of presenting data through clear and informative visualizations.",
        url: "https://www.dicoding.com/certificates/L4PQ9OEY7PO1",
      },
    ],
    certifications: [
      {
        name: "Data Analytic",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        year: "2026",
        description:
          "Issued March 2026 · Expires March 2029 · Credential ID: 63111252160038696",
        url: "",
      },
    ],
  },

  {
    name: "Artificial Intelligence & Machine Learning",
    img: "./img/iconML.png",
    description:
      "Exploring artificial intelligence and machine learning through practical learning and research. My Text-to-SQL research investigates the use of Large Language Models and embedding-based schema retrieval to translate Indonesian natural-language questions into SQL queries.",
    technologies: [
      "Artificial Intelligence",
      "Machine Learning",
      "Large Language Models",
      "Semantic Search",
      "Embeddings",
      "Text-to-SQL",
    ],
    training: [
      {
        name: "Belajar Machine Learning untuk Pemula",
        provider: "Dicoding Indonesia",
        year: "2024",
        description: "Introductory machine learning concepts and workflows.",
        url: "https://www.dicoding.com/certificates/6RPN17GD8X2M",
      },
    ],
    certifications: [
      {
        name: "Gemini Certified University Student",
        issuer: "Google for Education",
        year: "2026",
        description:
          "Issued August 2026 · Expires August 2029 · Credential ID: 192517241",
        url: "https://edu.google.accredible.com/cb7185cb-97f5-46f1-bec5-4808c5f893a7#acc.MkdcvnSe",
      },
    ],
  },

  {
    name: "Python & Programming",
    img: "./img/python.png",
    description:
      "Programming fundamentals using Python, with practical applications in data processing, application development, and AI/ML experimentation.",
    technologies: [
      "Python",
      "Programming Fundamentals",
      "Data Processing",
      "Problem Solving",
      "SQL",
    ],
    training: [
      {
        name: "Memulai Pemrograman dengan Python",
        provider: "Dicoding Indonesia",
        year: "2024",
        description:
          "Foundational Python programming concepts and coding practices.",
        url: "https://www.dicoding.com/certificates/0LZ02LYMNX65",
      },
    ],
    certifications: [],
  },

  {
    name: "Web Development & IT Support",
    img: "./img/iconFullstack.png",
    description:
      "Web development experience with Laravel, React, and Tailwind CSS, alongside foundational IT support knowledge. Projects include radio station websites with online audio streaming and, for Paramuda Radio, video streaming.",
    technologies: [
      "Laravel",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML & CSS",
      "IT Support",
    ],
    training: [
      {
        name: "Front End Development Libraries",
        provider: "freeCodeCamp",
        year: "2023",
        description:
          "Front-end development learning focused on building interactive web interfaces and working with front-end libraries.",
        url: "https://www.freecodecamp.org/certification/ardifjar443/front-end-development-libraries",
      },
      {
        name: "IT Support Google",
        provider: "Coursera",
        year: "2022",
        description: "Foundational IT support and troubleshooting knowledge.",
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/NN6RMSULU8AP",
      },
    ],
    certifications: [],
  },
];

export default function Skill() {
  return (
    <main className="portfolio-page">
      <header className="portfolio-page-header">
        <p className="portfolio-page-eyebrow">
          Expertise · Technical Skills
        </p>

        <h1>
          Skills & Certifications
          <span>.</span>
        </h1>

        <p className="portfolio-page-description">
          My technical expertise, continuous learning journey, and professional
          certifications across AI/ML, web development, data analysis, and
          networking.
        </p>
      </header>

      <section className="portfolio-page-list" aria-label="Technical skills">
        {skills.map((skill, index) => (
          <SkillItem key={skill.name} skill={skill} index={index} />
        ))}
      </section>
    </main>
  );
}
