export default function About() {
  const skills = [
    "C / C++",
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "Node.js",
    "Data Structures & Algorithms",
    "Git & GitHub",
    "SQL / Relational DBs",
    "Problem Solving",
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-zinc-900 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-purple-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Bio Column */}
          <div className="md:col-span-7 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-zinc-700/80 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              Who I Am
            </h3>
            <div className="space-y-4 text-zinc-300 leading-relaxed text-base">
              <p>
                I am Vedant Ghosh, currently pursuing my Bachelor of Engineering in Computer Science & Engineering (CSE) at BIT Bangalore.
              </p>
              <p>
                Driven by curiosity, I enjoy exploring full-stack engineering, core computer science concepts, and modern web frameworks like Next.js and Tailwind CSS.
              </p>
              <p>
                I am looking forward to creating impactful projects, participating in developer hackathons, and contributing to collaborative open-source ecosystems.
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="mt-6 pt-6 border-t border-zinc-800/80 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-zinc-500 block text-xs uppercase tracking-wider">Institution</span>
                <span className="text-zinc-200 font-medium">BIT Bangalore</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-xs uppercase tracking-wider">Major</span>
                <span className="text-zinc-200 font-medium">Computer Science & Eng.</span>
              </div>
            </div>
          </div>

          {/* Skills Column */}
          <div className="md:col-span-5 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              Skills & Technologies
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              Technologies and tools I work with and continuously build expertise in.
            </p>

            {/* Small Tags/Chips */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-zinc-800/70 text-zinc-300 border border-zinc-700/60 hover:border-purple-500/70 hover:bg-purple-950/40 hover:text-purple-200 hover:scale-105 transition-all duration-200 cursor-default select-none shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
