const socials = [
  {
    name: "GitHub",
    description: "Explore my code",
    href: "https://github.com/ardifjar443",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.2 3.45 1.67.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.02.75 2.06v3.04c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    description: "Connect professionally",
    href: "https://www.linkedin.com/in/ardi-fajar-arifin/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9">
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM8 18H5V9h3v9ZM6.5 7.77a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.38c0-1.04-.02-2.37-1.44-2.37-1.44 0-1.66 1.12-1.66 2.29V18h-3V9h2.88v1.23h.04c.4-.71 1.38-1.46 2.84-1.46 3.04 0 3.6 2 3.6 4.6V18Z" />
      </svg>
    ),
  },
  {
    name: "Email",
    description: "Let's get in touch",
    href: "mailto:ardifjar443@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-9 w-9"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },

  {
    name: "Instagram",
    description: "Explore my photography",
    href: "https://instagram.com/ardi_fj_ar/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-9 w-9"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function SocialCards() {
  return (
    <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 xl:grid-cols-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target={social.name === "Email" ? undefined : "_blank"}
          rel={social.name === "Email" ? undefined : "noopener noreferrer"}
          aria-label={`Open ${social.name}`}
          className="group flex min-h-[180px] flex-col justify-between overflow-hidden rounded-[15px] bg-[#D6E6F2] p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-start justify-between">
            <p className="text-sm font-medium text-[#729BC8]">
              Connect · {social.name}
            </p>

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F7FBFC] shadow-inner">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-[#527DA8]"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center py-5">
            <div className="flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-[#F7FBFC] text-[#365F86] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#527DA8] group-hover:text-white">
              {social.icon}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#24384B]">{social.name}</h3>
            <p className="mt-1 text-sm text-[#526B82]">{social.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
