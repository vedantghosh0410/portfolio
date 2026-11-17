export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Logo / Branding */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-purple-600/80 flex items-center justify-center text-white font-bold text-xs">
              VG
            </span>
            <span className="text-sm font-semibold text-zinc-300">
              Vedant Ghosh
            </span>
          </div>

          {/* Copyright notice required: © 2026 [Vedant Ghosh] */}
          <p className="text-xs sm:text-sm text-zinc-500">
            © 2026 <span className="text-zinc-400 font-medium">[Vedant Ghosh]</span>. All rights reserved.
          </p>

          {/* Quick scroll to top */}
          <a
            href="#"
            className="text-xs text-zinc-400 hover:text-purple-400 transition-colors flex items-center gap-1 group"
          >
            <span>Back to top</span>
            <svg
              className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
