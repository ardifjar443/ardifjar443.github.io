import ProjectItem from "./card/ProjectItem";

const projects = [
  {
    name: "Paramuda Radio",
    category: "Full-Stack Web Development",
    img: "./img/paramuda.png",
    description:
      "A radio station website developed to deliver digital broadcasting content through an integrated web experience. The platform features audio streaming, video streaming, radio programs, and station information, making it easier for audiences to access radio content online.",
    tech: [
      "Laravel",
      "React",
      "Tailwind CSS",
      "Audio Streaming",
      "Video Streaming",
    ],
    demo: "https://www.paramudaradio.com/",
    demoLabel: "Live Website",
    // github: "URL_GITHUB_PARAMUDA",
  },
  {
    name: "Indonesian Text-to-SQL Research",
    category: "Artificial Intelligence · Machine Learning",
    img: "./img/text2sql.png",
    description:
      "A research project exploring how Large Language Models can translate Indonesian natural-language questions into executable SQL queries. The pipeline uses embedding-based schema retrieval and evaluates generated queries using Semantic Exact Match and Execution Accuracy on a domain-specific social-economic dataset.",
    tech: [
      "Python",
      "Large Language Models",
      "Gemini Embedding",
      "Semantic Search",
      "MySQL",
      "Flask",
    ],
    // Isi jika aplikasi atau hasil penelitian sudah tersedia secara publik.
    // demo: "URL_DEMO_TEXT2SQL",
    // demoLabel: "Live Demo",
    github: "https://github.com/ardifjar443/text2sql",
  },
  {
    name: "Rama FM Radio",
    category: "Full-Stack Web Development",
    img: "./img/rama.png",
    description:
      "A radio station website built to support online broadcasting and provide audiences with convenient access to station information, radio programs, and digital radio content.",
    tech: ["Laravel", "React", "Tailwind CSS", "Audio Streaming"],
    demo: "https://ramafm.com/",
    demoLabel: "Live Website",
    // github: "URL_GITHUB_RAMAFM",
  },

  {
    name: "PocketPlan",
    category: "Web Development",
    img: "./img/PocketPlan.png",
    description:
      "A personal finance application for tracking income, expenses, and financial activity through a visual dashboard.",
    tech: ["Web Development", "Dashboard", "Data Visualization"],
    // demo: "https://pocketplan.great-site.net/",
    // demoLabel: "Live Website",
    github: "https://github.com/ardifjar443/pocketPlanWeb",
  },
  {
    name: "RocketLuncur",
    category: "Web Development",
    img: "./img/rocketLuncur.png",
    description:
      "A space-themed news website presenting articles and information through an engaging visual interface.",
    tech: ["Web Development", "News", "Responsive UI"],
    // demo: "https://rocketluncur.infinityfreeapp.com/berita",
    demoLabel: "Live Website",
    github: "https://github.com/ardifjar443/rocketLuncur",
  },
  {
    name: "Car Rental",
    category: "Web Development",
    img: "./img/projectRental.png",
    description:
      "A car rental application featuring vehicle listings and a user interface for exploring available cars.",
    tech: ["Web Development", "Vehicle Listings"],
    github: "https://github.com/ardifjar443/rentalMobil",
  },
  {
    name: "News Web",
    category: "Web Development",
    img: "./img/berita.png",
    description:
      "A news website with a clean reading interface for browsing news content and featured articles.",
    tech: ["Web Development", "Responsive UI"],
    demo: "https://web-berita-lime.vercel.app/",
    demoLabel: "Live Website",
    github: "https://github.com/ardifjar443/webBerita",
  },
  {
    name: "Quotes Generator",
    category: "Web Development",
    img: "./img/quotes.png",
    description:
      "A small web application for generating and displaying quotes through an interactive interface.",
    tech: ["JavaScript", "React"],
    demo: "/quote",
    demoLabel: "Try Project",
    internal: true,
  },
  // {
  //   name: "Angka Boom",
  //   category: "Web Development",
  //   img: "./img/angkaBoom.png",
  //   description:
  //     "An interactive number-based game designed to provide a simple and engaging user experience.",
  //   tech: ["JavaScript", "Interactive UI"],
  //   demo: "/angka-boom",
  //   demoLabel: "Play Game",
  //   internal: true,
  // },
  {
    name: "IoT Green House",
    category: "IoT & Networking",
    img: "./img/greenhouse.png",
    description:
      "A greenhouse IoT simulation project exploring connected devices and automated monitoring.",
    tech: ["IoT", "Wokwi", "Simulation"],
    demo: "https://wokwi.com/projects/386816792253478913",
    demoLabel: "View Simulation",
    github:
      "https://github.com/ardifjar443/IOT_10122266_ArdiFajarArifin_PABCL2024",
  },
  {
    name: "Front End Development Libraries",
    category: "Web Development",
    img: "./img/frontend.png",
    description:
      "A front-end development project showcasing interface-building practice and reusable UI components.",
    tech: ["Front-End", "UI Development"],
    // Tambahkan URL repository atau demo yang benar di sini.
    github:
      "https://github.com/ardifjar443/Front-End-Development-Libraries-certification-freeCodeCamp",
  },
];

export default function Project() {
  return (
    <main className="min-h-screen bg-[#F7FBFC] pb-20 pt-24">
      {/* Page Header */}
      <header className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
        <p className="text-sm font-medium tracking-wide text-[#729BC8]">
          Portfolio · Selected Work
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#24384B] sm:text-5xl">
          Projects<span className="text-[#729BC8]">.</span>
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#526B82] sm:text-base">
          A collection of projects where I explore software development,
          intelligent systems, and connected technologies to solve practical
          problems.
        </p>

        <div className="mt-5 text-sm text-[#729BC8]">
          {projects.length} projects · Selected work and experiments
        </div>
      </header>

      {/* Project List */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="space-y-14 md:space-y-20">
          {projects.map((project, index) => (
            <ProjectItem key={project.name} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
