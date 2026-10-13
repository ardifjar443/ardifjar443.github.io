export default function AllProjectsCard() {
  return (
    <a
      href="/project"
      aria-label="Lihat semua proyek Ardi Fajar"
      className="group relative flex h-full min-h-[180px] flex-col justify-between overflow-hidden rounded-[15px] bg-[#D6E6F2] p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-[#729BC8]">
          Portfolio · Projects
        </p>

        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F7FBFC] shadow-inner">
          <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#527DA8] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F7FBFC] text-[#527DA8] shadow-sm transition-all duration-300 group-hover:bg-[#527DA8] group-hover:text-white">
          <svg
            viewBox="0 0 24 24"
            width="34"
            height="34"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
        </div>

        <div className="min-w-0">
          <h3 className="text-xl font-bold text-[#24384B]">
            View All Projects
          </h3>

          <p className="mt-1 text-sm leading-5 text-[#526B82]">
            Explore my work in AI/ML, Web Development, and Networking.
          </p>

          <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#527DA8]">
            Explore all projects
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}
