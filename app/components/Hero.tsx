export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Subtle purple background ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs sm:text-sm font-medium mb-8 hover:border-purple-600/70 transition-colors">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span>CSE Student & Aspiring Software Engineer</span>
        </div>

        {/* Name in large text */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
            Vedant Ghosh
          </span>
        </h1>

        {/* One-line intro */}
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          A passionate <span className="text-purple-300 font-normal">CSE student</span> who loves turning ideas into clean, functional code and building impactful digital experiences.
        </p>

        {/* Two Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>View my work</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-800 hover:border-purple-500/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Contact me
          </a>
        </div>

        {/* Social Quick Links */}
        <div className="mt-12 flex items-center justify-center gap-6 text-zinc-400">
          <a
            href="https://github.com/vedantghosh0410"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors p-2 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="mailto:vedantghosh0410@gmail.com"
            className="hover:text-purple-400 transition-colors p-2 hover:scale-110"
            aria-label="Email Me"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
