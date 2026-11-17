export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/50 border border-zinc-800/80 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/60 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-purple-600/10">
      <div>
        {/* Top bar with indicator & link */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform" />
            {featured && (
              <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-400 bg-purple-950/60 border border-purple-800/50 px-2 py-0.5 rounded-full">
                Featured
              </span>
            )}
          </div>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-purple-400 p-1.5 rounded-lg hover:bg-zinc-800/80 transition-colors"
            aria-label={`View ${title} source on GitHub`}
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* Project Name */}
        <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-purple-300 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 group-hover:border-purple-900/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View on GitHub Link */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 group-hover:translate-x-1 transition-all"
        >
          <span>View on GitHub</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
