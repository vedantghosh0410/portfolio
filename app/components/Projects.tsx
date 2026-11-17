import ProjectCard, { ProjectCardProps } from "./ProjectCard";

export default function Projects() {
  const projects: ProjectCardProps[] = [
    {
      title: "AlgoVisuals – CS Algorithm Visualizer",
      description:
        "An interactive web platform to visualize sorting, graph traversal, and tree algorithms in real time. Built to help students grasp foundational DSA concepts through visual animation.",
      tags: ["TypeScript", "Next.js", "Tailwind CSS", "Data Structures"],
      githubUrl: "https://github.com/vedantghosh0410",
      featured: true,
    },
    {
      title: "Minimal Developer Portfolio",
      description:
        "A personal developer portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. Designed with a clean, purple-accented minimal aesthetic, full responsiveness, and smooth section navigation.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
      githubUrl: "https://github.com/vedantghosh0410",
      featured: false,
    },
    {
      title: "CampusSync – Student Collaboration Hub",
      description:
        "A platform for college peers to collaborate on hackathons, share technical notes, and coordinate coursework projects. Features intuitive task boards and team formation tools.",
      tags: ["React", "Node.js", "Tailwind CSS", "REST API"],
      githubUrl: "https://github.com/vedantghosh0410",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-zinc-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-purple-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            A selection of projects and experiments I have worked on, actively building my skills and looking forward to creating and participating in more.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* Explore more on GitHub banner */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/vedantghosh0410"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white px-5 py-2.5 rounded-xl border border-zinc-800 hover:border-purple-500/50 hover:bg-zinc-900/60 transition-all duration-200"
          >
            <span>Explore more repositories on GitHub</span>
            <svg
              className="w-4 h-4 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
